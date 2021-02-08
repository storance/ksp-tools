import { Map, List } from 'immutable';
import { TYPE_DIRECT,
         POWER_UNITS_MAP,
         Antenna,
         VesselAntenna,
         createValidatedField,
         createValidatedUnitField,
         getValidatedNumericField,
         getValidatedUnitField,
         setValidatedField,
         setValidatedUnitField,
         formUpdate,
         calcVesselPower,
         calcMaxRange,
         calcSignal } from '../utils';
import { validatePositiveIntegerField, validatePositiveNumberField, validateNumberField } from '../validators';

const initialState = Map({
    dsnLevel: 1,
    vesselAntennas : List(),
    vesselAntennasForm : Map({
        show: false,
        index: '',
        antennaName: '',
        antenna: null,
        type: TYPE_DIRECT,
        power: createValidatedUnitField({units: 'k'}),
        combinable: true,
        combinabilityExponent: createValidatedField(),
        feedScale: createValidatedField(),
        reflectorName: '',
        reflector: null,
        reflectorAddedPower: createValidatedUnitField({units: 'k'}),
        count: createValidatedField('1'),
    })
});

function addAntenna(state, profile) {
    return state.withMutations((tempState) => {
        
        setValidatedUnitField(tempState, ['vesselAntennasForm', 'power'], '', 'k');
        setValidatedField(tempState, ['vesselAntennasForm', 'combinabilityExponent'], '0.75');
        setValidatedField(tempState, ['vesselAntennasForm', 'count'], '1');
        setValidatedField(tempState, ['vesselAntennasForm', 'feedScale'], '0');
        setValidatedUnitField(tempState, ['vesselAntennasForm', 'reflectorAddedPower'], '', 'k');

        const defaultAntenna = profile.antennas.get(0);

        tempState.setIn(['vesselAntennasForm', 'index'], '');
        tempState.setIn(['vesselAntennasForm', 'antennaName'], defaultAntenna.name);
        tempState.setIn(['vesselAntennasForm', 'antenna'], defaultAntenna);
        tempState.setIn(['vesselAntennasForm', 'type'], TYPE_DIRECT);
        tempState.setIn(['vesselAntennasForm', 'combinable'], true);
        tempState.setIn(['vesselAntennasForm', 'reflectorName'], '');
        tempState.setIn(['vesselAntennasForm', 'reflector'], null);
        tempState.setIn(['vesselAntennasForm', 'show'], true);
    });
}

function deleteAntenna(state, index) {
    return state.deleteIn(['vesselAntennas', index]);
}

function cancelVesselAntenna(state) {
    return state.setIn(['vesselAntennasForm', 'show'], false);
}

function updateVesselAntennaForm(state, field, value, profile) {
    let newState = state.set('vesselAntennasForm', formUpdate(state.get('vesselAntennasForm'), field, value));

    if (field === 'antennaName') {
        if (value === 'custom') {
            newState = newState.setIn(['vesselAntennasForm', 'antenna'], null);
        } else {
            newState = newState.setIn(['vesselAntennasForm', 'antenna'], profile.findAntennaByName(value));
        }
    }
    return newState;
}

function saveVesselAntenna(state, profile) {
    let newState = validate(state);
    if (newState.getIn(['vesselAntennasForm', 'hasErrors'])) {
        return newState;
    }

    return newState.withMutations(tempState => {
        const antennaName = tempState.getIn(['vesselAntennasForm', 'antennaName']);
        let antenna = tempState.getIn(['vesselAntennasForm', 'antenna']);

        if (antennaName === 'custom') {
            antenna = new Antenna({
                mod: 'custom',
                name: 'custom',
                displayName: 'Custom',
                type: tempState.getIn(['vesselAntennasForm', 'type']),
                power: getValidatedUnitField(tempState.getIn(['vesselAntennasForm', 'power']), '', POWER_UNITS_MAP),
                combinable: tempState.getIn(['vesselAntennasForm', 'combinable']),
                combinabilityExponent: getValidatedNumericField(
                    tempState.getIn(['vesselAntennasForm', 'combinabilityExponent'])),
                feedScale: getValidatedNumericField(tempState.getIn(['vesselAntennasForm', 'feedScale']))
            });
        }

        const vesselAntenna = new VesselAntenna({
            antenna,
            count: getValidatedNumericField(tempState.getIn(['vesselAntennasForm', 'count']))
        });

        tempState.set('vesselAntennas', tempState.get('vesselAntennas').push(vesselAntenna));
        tempState.setIn(['vesselAntennasForm', 'show'], false);
        tempState.delete('signalToBodies');
    });
}

function validate(state) {
    const formState = state.get('vesselAntennasForm');

    return state.set('vesselAntennasForm', formState.withMutations(tempState => {
        let errors = false;
        if (tempState.get('antennaName') === 'custom') {
            if (validatePositiveNumberField(tempState, 'power')) {
                errors = true;
            }

            if (tempState.get('combinable') 
                && validateNumberField(tempState, 'combinabilityExponent', 0.0, 1.0)) {
                errors = true;
            }

            if (validateNumberField(tempState, 'feedScale', 0.0, 1.0)) {
                errors = true;
            }
        }

        if (validatePositiveIntegerField(tempState, 'count')) {
            errors = true;
        }

        tempState.set('hasErrors', errors);
    }));
}

function calculateSignal(state, profile) {
    const homeworld = profile.planetpack.homeworld;
    const otherBodies = profile.planetpack.sun.satellites.filter(body => body.name !== homeworld.name);
    const dsnLevel = parseInt(state.get('dsnLevel'));
    const dsnPower = profile.dsnLevels.get(dsnLevel - 1);
    const vesselAntennas = state.get('vesselAntennas');

    const vesselPower = calcVesselPower(vesselAntennas);
    const maxRange = calcMaxRange(dsnPower, vesselPower);

    let signalToBodies = {
        vesselPower: vesselPower,
        maxRange: maxRange,
        bodies: []
    };

    for (var moon of homeworld.satellites) {
        const minDist = moon.orbit.periapsis;
        const maxDist = moon.orbit.apoapsis;

        signalToBodies.bodies.push({
            body: moon,
            minSignal : calcSignal(maxRange, minDist),
            maxSignal : calcSignal(maxRange, maxDist)
        })
    }

    for (var planet of otherBodies) {
        const minDist = homeworld.orbit.apoapsis + planet.orbit.apoapsis;
        const maxDist = homeworld.orbit.periapsis + planet.orbit.periapsis;

        signalToBodies.bodies.push({
            body: planet,
            minSignal : calcSignal(maxRange, minDist),
            maxSignal : calcSignal(maxRange, maxDist)
        })
    }

    return state.set('signalToBodies', Map(signalToBodies));
}

export default function(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case 'ANTENNA_RANGE.FORM_UPDATE':
            newState = formUpdate(newState, action.payload.field, action.payload.value);
            break;
        case 'ANTENNA_RANGE.VESSEL.ADD_ANTENNA':
            newState = addAntenna(newState, action.activeProfile);
            break;
        case 'ANTENNA_RANGE.VESSEL.DELETE_ANTENNA':
            newState = deleteAntenna(newState, action.payload.index);
            break;
        case 'ANTENNA_RANGE.VESSEL.FORM_UPDATE':
            newState = updateVesselAntennaForm(newState,
                action.payload.field,
                action.payload.value,
                action.activeProfile);
            break;
        case 'ANTENNA_RANGE.VESSEL.FORM_CANCEL':
            newState = cancelVesselAntenna(newState);
            break;
        case 'ANTENNA_RANGE.VESSEL.FORM_SAVE':
            newState = saveVesselAntenna(newState, action.activeProfile);
            break;
        case 'ANTENNA_RANGE.CALCULATE_SIGNAL':
            newState = calculateSignal(newState, action.activeProfile);
            break;

    }
    return newState;
}
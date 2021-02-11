import { Map } from 'immutable';
import { DISTANCE_UNITS_MAP,
         Orbit,
         createValidatedField,
         createValidatedUnitField,
         getValidatedNumericField,
         getValidatedUnitField,
         convertValue,
         formUpdate,
         resetBodyOnProfileSelect,
         lookupBody } from '../utils';
import { validatePositiveNumberField, validateApsisFields } from '../validators';

const initialState = Map({
    'apoapsis' : createValidatedUnitField({units: 'km'}),
    'periapsis' : createValidatedUnitField({units: 'km'}),
    'period' : createValidatedField(),
    'eccentricity' : createValidatedField(),
    'semiMajorAxis' : createValidatedUnitField({units: 'km'}),
    'firstElement' : 'apoapsis',
    'secondElement' : 'periapsis',
    'body' : '',
});

function calculate(state, profile) {
    const body = lookupBody(state.get('body'), profile.planetpack);
    let newState = validate(state, body);
    if (newState.get('hasErrors')) {
        return newState;
    }

    
    const apoapsis = hasOrbitalElement(state, 'apoapsis') ? 
        getValidatedUnitField(newState.get('apoapsis'), 'm', DISTANCE_UNITS_MAP) : null;
    const periapsis = hasOrbitalElement(state, 'periapsis') ? 
        getValidatedUnitField(newState.get('periapsis'), 'm', DISTANCE_UNITS_MAP) : null;
    const semiMajorAxis = hasOrbitalElement(state, 'semimajoraxis') ? 
        getValidatedUnitField(newState.get('semiMajorAxis'), 'm', DISTANCE_UNITS_MAP) : null;
    const eccentricity = hasOrbitalElement(state, 'eccentricity') ? 
        getValidatedNumericField(newState.get('eccentricity')) : null;
    const period = hasOrbitalElement(state, 'period') ? 
        getValidatedNumericField(newState.get('period')) : null;

    const orbit = Orbit.from(body, {
        apoapsis,
        periapsis,
        semiMajorAxis,
        eccentricity,
        period
    });
    return newState.set('orbit', orbit);
}

function validate(state, body) {
    return state.withMutations(tempState => {
        let errors = false;
        let apoapsisValid = true;
        let periapsisValid = true;
        let semiMajorAxisValid = true;

        if (hasOrbitalElement(tempState, 'apoapsis')) {
            if (validatePositiveNumberField(tempState, 'apoapsis')) {
                errors = true;
                apoapsisValid = false;
            }
        }

        if (hasOrbitalElement(tempState, 'periapsis')) {
            if (validatePositiveNumberField(tempState, 'periapsis')) {
                errors = true;
                periapsisValid = false;
            }
        }

        if (hasOrbitalElement(tempState, 'period')) {
            if (validatePositiveNumberField(tempState, 'period')) {
                errors = true;
            }
        }

        if (hasOrbitalElement(tempState, 'eccentricity')) {
            if (validatePositiveNumberField(tempState, 'eccentricity')) {
                errors = true;
            }
        }

        if (hasOrbitalElement(tempState, 'semiMajorAxis')) {
            if (validatePositiveNumberField(tempState, 'semiMajorAxis')) {
                errors = true;
                semiMajorAxisValid = false;
            }
        }

        if (apoapsisValid && apoapsisValid && hasOrbitalElements(tempState, 'apoapsis', 'periapsis')) {
            if (validateApsisFields(tempState, 'apoapsis', 'periapsis')) {
                errors = true;
            }
        }

        if (apoapsisValid && semiMajorAxisValid && hasOrbitalElements(tempState, 'semimajoraxis', 'apoapsis')) {
            const apUnits = tempState.getIn(['apoapsis', 'units']);
            const ap = getValidatedUnitField(tempState.get('apoapsis'), 'm', DISTANCE_UNITS_MAP);
            const sma = getValidatedUnitField(tempState.get('semiMajorAxis'), 'm', DISTANCE_UNITS_MAP);
            const smaAltitude = sma - body.radius;

            if (ap < smaAltitude) {
                tempState.setIn(['apoapsis', 'error'], 'Please enter an apoapsis that is greater than or equal to ' + 
                    convertValue(smaAltitude, 'm', apUnits, DISTANCE_UNITS_MAP) + apUnits + '.');
                errors = true;
            }
        }

        if (periapsisValid && semiMajorAxisValid && hasOrbitalElements(tempState, 'semimajoraxis', 'periapsis')) {
            const peUnits = tempState.getIn(['periapsis', 'units']);
            const pe = getValidatedUnitField(tempState.get('periapsis'), 'm', DISTANCE_UNITS_MAP);
            const sma = getValidatedUnitField(tempState.get('semiMajorAxis'), 'm', DISTANCE_UNITS_MAP);
            const smaAltitude = sma - body.radius;

            if (pe > smaAltitude) {
                tempState.setIn(['periapsis', 'error'], 'Please enter an periapsis that is less than or equal to ' + 
                    convertValue(smaAltitude, 'm', peUnits, DISTANCE_UNITS_MAP) + peUnits + '.');
                errors = true;
            }
        }

        tempState.set('hasErrors', errors);
        tempState.remove('orbit');
    });
}

function hasOrbitalElement(state, e) {
     const first = state.get('firstElement');
     const second = state.get('secondElement');

    return first === e || second === e;
}

function hasOrbitalElements(state, e1, e2) {
    const first = state.get('firstElement');
    const second = state.get('secondElement');

    return (first === e1 && second === e2) || (first === e2 && second === e1);
}

export default function(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case 'ORBIT_INFORMATION.FORM_UPDATE':
            newState = formUpdate(newState, action.payload.field, action.payload.value);
            break;
        case 'ORBIT_INFORMATION.CALCULATE':
            newState = calculate(newState, action.activeProfile);
            break;
    }
    return resetBodyOnProfileSelect(newState, action);
}
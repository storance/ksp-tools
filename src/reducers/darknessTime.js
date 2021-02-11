import { Map } from 'immutable';
import { DISTANCE_UNITS_MAP,
         Orbit,
         createValidatedField,
         createValidatedUnitField,
         getValidatedNumericField,
         getValidatedUnitField,
         formUpdate,
         resetBodyOnProfileSelect,
         lookupBody } from '../utils';
import { validatePositiveNumberField, validateApsisFields } from '../validators';

const initialState = Map({
    'apoapsis' : createValidatedUnitField({units: 'km'}),
    'periapsis' : createValidatedUnitField({units: 'km'}),
    'darknessTime' : createValidatedField(),
    'energyUse' : createValidatedField()
});

function calculateDarknessTime(state, profile) {
    let newState = validateDarknessTime(state);
    if (newState.get('hasErrors')) {
        return newState;
    }

    const body = lookupBody(newState.get('body'), profile.planetpack);
    const apoapsis = getValidatedUnitField(newState.get('apoapsis'), 'm', DISTANCE_UNITS_MAP);
    const periapsis = getValidatedUnitField(newState.get('periapsis'), 'm', DISTANCE_UNITS_MAP);

    const orbit = Orbit.from(body, {apoapsis, periapsis});
    const darknessTime = ((2 * orbit.semiMajorAxis * orbit.semiMinorAxis) / orbit.specificAngularMomentum) * 
        Math.asin(orbit.parentBody.radius / orbit.semiMinorAxis) +
        ((orbit.eccentricity * orbit.parentBody.radius) / orbit.semiMinorAxis);
    return newState.set('darknessTimeComputed', darknessTime)
                   .setIn(['darknessTime', 'value'], darknessTime.toFixed(3));
}


function validateDarknessTime(state) {
    return state.withMutations(tempState => {
        let errors = validatePositiveNumberField(tempState, 'apoapsis') ||
            validatePositiveNumberField(tempState, 'periapsis');

        if (!errors) {
            errors = errors || validateApsisFields(tempState, 'apoapsis', 'periapsis');
        }

        tempState.set('hasErrors', errors);
        tempState.remove('darknessTimeComputed');
    });
}

function calculateBatteryStorage(state) {
    let newState = validateBatteryStorage(state);
    if (newState.get('hasErrors')) {
        return newState;
    }

    const darknessTime = parseFloat(newState.getIn(['darknessTime', 'value']));
    const energyUse = parseFloat(newState.getIn(['energyUse', 'value']));

    return newState.set('energyCapacity', darknessTime * energyUse);
}

function validateBatteryStorage(state) {
    return state.withMutations(tempState => {
        const errors = validatePositiveNumberField(tempState, 'darknessTime') ||
            validatePositiveNumberField(tempState, 'energyUse');

        tempState.set('hasErrors', errors);
        tempState.remove('energyCapacity');
    });
}

export default function(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case 'DARKNESS_TIME.FORM_UPDATE':
            newState = formUpdate(newState, action.payload.field, action.payload.value);
            break;
        case 'DARKNESS_TIME.CALCULATE_DARKNESS_TIME':
            newState = calculateDarknessTime(newState, action.activeProfile);
            break;
        case 'DARKNESS_TIME.CALCULATE_BATTERY_STORAGE':
            newState = calculateBatteryStorage(newState);
            break;
    }
    return resetBodyOnProfileSelect(newState, action);
}
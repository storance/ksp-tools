import { Map } from 'immutable';
import { convertAltitudeToMeters, Orbit, formUpdate, lookupBody, resetBodyOnPlanetPackUpdate } from '../utils';
import { validatePositiveNumberField, validateApsisFields } from '../validators';

const initialState = Map({
    'apoapsis' : Map({
        'value' : '',
        'units' : 'km',
        'error' : null,
    }),
    'periapsis' : Map({
        'value' : '',
        'units' : 'km',
        'error' : null,
    }),
    'darknessTime' : Map({
        'value' : '',
        'error' : null
    }),
    'energyUse' : Map({
        'value' : '',
        'error' : null
    })
});

function calculateDarknessTime(state, planetpack) {
    let newState = validateDarknessTime(state);
    if (newState.get('hasErrors')) {
        return newState;
    }

    const body = lookupBody(newState.get('body'), planetpack);
    const apoapsis = convertAltitudeToMeters(newState.get('apoapsis'));
    const periapsis = convertAltitudeToMeters(newState.get('periapsis'));

    const orbit = Orbit.fromApAndPe(body, apoapsis, periapsis);
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
            newState = calculateDarknessTime(newState, action.planetpack);
            break;
        case 'DARKNESS_TIME.CALCULATE_BATTERY_STORAGE':
            newState = calculateBatteryStorage(newState);
            break;
    }
    return resetBodyOnPlanetPackUpdate(newState, action);
}
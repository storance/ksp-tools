import { Map } from 'immutable';
import Orbit from '../orbit.js';
import { convertAltitude, isPositiveNumber, isEmpty } from '../utils.js';

const initialState = Map({
    'apoapsis' : '',
    'apoapsisUnits' : 'km',
    'periapsis' : '',
    'periapsisUnits' : 'km',
    'darknessTimeManual' : '',
    'energyUse' : '',
    'errors' : {}
});

function formUpdate(state, field, value) {
    return state.set(field, value);
}

function calculateDarknessTime(state, body) {
    const errors = validateDarknessTime(state);
    if (!isEmpty(errors)) {
        return state.set('errors', errors);
    }

    const apoapsis = convertAltitude(state.get('apoapsis'), state.get('apoapsisUnits'), 'm');
    const periapsis = convertAltitude(state.get('periapsis'), state.get('periapsisUnits'), 'm');

    const orbit = Orbit.fromApAndPe(body, apoapsis, periapsis);
    const darknessTime = ((2 * orbit.semiMajorAxis * orbit.semiMinorAxis) / orbit.specificAngularMomentum) * 
        Math.asin(orbit.parentBody.radius / orbit.semiMinorAxis) +
        ((orbit.eccentricity * orbit.parentBody.radius) / orbit.semiMinorAxis);
    return state.set('darknessTime', darknessTime)
                .set('darknessTimeManual', darknessTime.toFixed(3))
                .set('errors', {});
}


function validateDarknessTime(state) {
    const apoapsis = state.get('apoapsis');
    const apoapsisUnits = state.get('apoapsisUnits');
    const periapsis = state.get('periapsis');
    const periapsisUnits = state.get('periapsisUnits');
    const errors = {};

    if (apoapsis === "") {
        errors.apoapsis = "Please enter an apoapsis.";
    } else if (!isPositiveNumber(apoapsis)) {
        errors.apoapsis = "Please enter a valid number greater than or equal to 0.";
    }

    if (periapsis === "") {
        errors.periapsis = "Please enter a periapsis.";
    } else if (!isPositiveNumber(periapsis)) {
        errors.periapsis = "Please enter a valid number greater than or equal to 0.";
    }

    if (isEmpty(errors)) {
        const pe = convertAltitude(periapsis, periapsisUnits, 'm');
        const ap = convertAltitude(apoapsis, apoapsisUnits, 'm');

        if (pe > ap) { 
            errors.periapsis = "Please enter a periapsis that is less than or equal to the apoapsis.";
        }
    }

    return errors;
}

function calculateBatteryStorage(state) {
    const errors = validateBatteryStorage(state);
    if (!isEmpty(errors)) {
        return state.set('errors', errors);
    }

    const darknessTime = parseFloat(state.get('darknessTimeManual'));
    const energyUse = parseFloat(state.get('energyUse'));

    return state.set('energyCapacity', darknessTime * energyUse)
                .set('errors', {});
}

function validateBatteryStorage(state) {
    const darknessTime = state.get('darknessTimeManual');
    const energyUse = state.get('energyUse');
    const errors = {}
    
    if (energyUse === "") {
        errors.energyUse = "Please enter the amount of energy used per second.";
    } else if (!isPositiveNumber(energyUse)) {
        errors.energyUse = "Please enter a valid number greater than or equal to 0.";
    }

    if (darknessTime === "") {
        errors.darknessTime = "Please enter the number of seconds spent in darkness.";
    } else if (!isPositiveNumber(darknessTime)) {
        errors.darknessTime = "Please enter a valid number greater than or equal to 0.";
    }

    return errors;
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'DARKNESS_TIME.FORM_UPDATE':
            return formUpdate(state, action.field, action.value);
        case 'DARKNESS_TIME.CALCULATE_DARKNESS_TIME':
            return calculateDarknessTime(state, action.orbitingBody);
        case 'DARKNESS_TIME.CALCULATE_BATTERY_STORAGE':
            return calculateBatteryStorage(state);
    }
    return state;
}
import { Map } from 'immutable';
import Orbit from '../orbit.js';
import { convertAltitude } from '../utils.js';

const initialState = Map({
    'apoapsis' : '',
    'apoapsisUnits' : 'km',
    'periapsis' : '',
    'periapsisUnits' : 'km',
    'darknessTimeManual' : '',
    'energyUse' : ''
});

function formUpdate(state, field, value) {
    return state.set(field, value);
}

function calculateDarknessTime(state, body) {
    const apoapsis = convertAltitude(state.get('apoapsis'), state.get('apoapsisUnits'), 'm');
    const periapsis = convertAltitude(state.get('periapsis'), state.get('periapsisUnits'), 'm');

    const orbit = Orbit.fromApAndPe(body, apoapsis, periapsis);
    const darknessTime = ((2 * orbit.semiMajorAxis * orbit.semiMinorAxis) / orbit.specificAngularMomentum) * 
        Math.asin(orbit.parentBody.radius / orbit.semiMinorAxis) +
        ((orbit.eccentricity * orbit.parentBody.radius) / orbit.semiMinorAxis);
    return state.set('darknessTime', darknessTime)
                .set('darknessTimeManual', darknessTime.toFixed(3));
}

function calculateBatteryStorage(state) {
    const darknessTime = parseFloat(state.get('darknessTimeManual'));
    const ecUsage = parseFloat(state.get('energyUse'));

    return state.set('energyCapacity', darknessTime * ecUsage);
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
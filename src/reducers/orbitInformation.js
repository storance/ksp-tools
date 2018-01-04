import { Map } from 'immutable';
import Orbit from '../orbit.js';
import { convertAltitude } from '../utils.js';

const initialState = Map({
    'apoapsis' : '',
    'apoapsisUnits' : 'km',
    'periapsis' : '',
    'periapsisUnits' : 'km',
    'period' : '',
    'mode' : 'ap+pe'
});

function formUpdate(state, field, value) {
    return state.set(field, value);
}

function calculate(state, body) {
    const mode = state.get('mode');
    const apoapsis = convertAltitude(state.get('apoapsis'), state.get('apoapsisUnits'), 'm');
    const periapsis = convertAltitude(state.get('periapsis'), state.get('periapsisUnits'), 'm');
    const period = parseFloat(state.get('period'));



    let orbit = null;
    if (mode === 'ap+pe') {
        orbit = Orbit.fromApAndPe(body, apoapsis, periapsis);
    } else if (mode === 'ap+period') {
        orbit = Orbit.fromApAndPeriod(body, apoapsis, period);
    } else if (mode === 'pe+period') {
        orbit = Orbit.fromPeAndPeriod(body, apoapsis, period);
    }
    return state.set('orbit', orbit);
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'ORBIT_INFORMATION.FORM_UPDATE':
            return formUpdate(state, action.field, action.value);
        case 'ORBIT_INFORMATION.CALCULATE':
            return calculate(state, action.orbitingBody);
    }
    return state;
}
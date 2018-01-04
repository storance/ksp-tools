import { Map } from 'immutable';
import Orbit from '../orbit.js';
import { convertAltitude } from '../utils.js';

const initialState = Map({
    'apoapsis' : '',
    'apoapsisUnits' : 'km',
    'periapsis' : '',
    'periapsisUnits' : 'km'
});

function formUpdate(state, field, value) {
    return state.set(field, value);
}

function calculate(state, body) {
    const apoapsis = convertAltitude(state.get('apoapsis'), state.get('apoapsisUnits'), 'm');
    const periapsis = convertAltitude(state.get('periapsis'), state.get('periapsisUnits'), 'm');

    const orbit = Orbit.fromApAndPe(body, apoapsis, periapsis);
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
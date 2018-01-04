import { Map } from 'immutable';
import { ManeuverPlan } from '../maneuver.js';
import { convertAltitude } from '../utils.js';

const initialState = Map({
    'currentApoapsis' : '',
    'currentApoapsisUnits' : 'km',
    'currentPeriapsis' : '',
    'currentPeriapsisUnits' : 'km',
    'desiredApoapsis' : '',
    'desiredApoapsisUnits' : 'km',
    'desiredPeriapsis' : '',
    'desiredPeriapsisUnits' : 'km'
});

function formUpdate(state, field, value) {
    return state.set(field, value);
}

function calculate(state, body) {
    const currentApoapsis = convertAltitude(state.get('currentApoapsis'), state.get('currentApoapsisUnits'), 'm');
    const currentPeriapsis = convertAltitude(state.get('currentPeriapsis'), state.get('currentPeriapsisUnits'), 'm');
    const desiredApoapsis = convertAltitude(state.get('desiredApoapsis'), state.get('desiredApoapsisUnits'), 'm');
    const desiredPeriapsis = convertAltitude(state.get('desiredPeriapsis'), state.get('desiredPeriapsisUnits'), 'm');
    const maneuverPlan = new ManeuverPlan(body, currentApoapsis, currentPeriapsis, desiredApoapsis, desiredPeriapsis);

    return state.set('maneuverPlan', maneuverPlan);
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'MANEUVER_PLANNER.FORM_UPDATE':
            return formUpdate(state, action.field, action.value);
        case 'MANEUVER_PLANNER.CALCULATE':
            return calculate(state, action.orbitingBody);
    }
    return state;
}
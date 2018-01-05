import { Map } from 'immutable';
import { ManeuverPlan } from '../maneuver.js';
import { convertAltitude, isPositiveNumber, isEmpty } from '../utils.js';

const initialState = Map({
    'currentApoapsis' : '',
    'currentApoapsisUnits' : 'km',
    'currentPeriapsis' : '',
    'currentPeriapsisUnits' : 'km',
    'desiredApoapsis' : '',
    'desiredApoapsisUnits' : 'km',
    'desiredPeriapsis' : '',
    'desiredPeriapsisUnits' : 'km',
    'errors' : {}
});

function formUpdate(state, field, value) {
    return state.set(field, value);
}

function calculate(state, body) {
    const errors = validate(state);
    if (!isEmpty(errors)) {
        return state.set('errors', errors)
                    .remove('maneuverPlan');
    }

    const currentApoapsis = convertAltitude(state.get('currentApoapsis'), state.get('currentApoapsisUnits'), 'm');
    const currentPeriapsis = convertAltitude(state.get('currentPeriapsis'), state.get('currentPeriapsisUnits'), 'm');
    const desiredApoapsis = convertAltitude(state.get('desiredApoapsis'), state.get('desiredApoapsisUnits'), 'm');
    const desiredPeriapsis = convertAltitude(state.get('desiredPeriapsis'), state.get('desiredPeriapsisUnits'), 'm');
    const maneuverPlan = new ManeuverPlan(body, currentApoapsis, currentPeriapsis, desiredApoapsis, desiredPeriapsis);

    return state.set('maneuverPlan', maneuverPlan)
                .set('errors', {});
}

function validate(state) {
    const currentApoapsis = state.get('currentApoapsis');
    const currentApoapsisUnits = state.get('currentApoapsisUnits');
    const currentPeriapsis = state.get('currentPeriapsis');
    const currentPeriapsisUnits = state.get('currentPeriapsisUnits');

    const currentErrors = {};

    if (currentApoapsis === "") {
        currentErrors.currentApoapsis = "Please enter an apoapsis.";
    } else if (!isPositiveNumber(currentApoapsis)) {
        currentErrors.currentApoapsis = "Please enter a valid number greater than or equal to 0.";
    }

    if (currentPeriapsis === "") {
        currentErrors.currentPeriapsis = "Please enter a periapsis.";
    } else if (!isPositiveNumber(currentPeriapsis)) {
        currentErrors.currentPeriapsis = "Please enter a valid number greater than or equal to 0.";
    }

    if (isEmpty(currentErrors)) {
        const pe = convertAltitude(currentPeriapsis, currentPeriapsisUnits, 'm');
        const ap = convertAltitude(currentApoapsis, currentApoapsisUnits, 'm');

        if (pe > ap) { 
            currentErrors.currentPeriapsis = "Please enter a periapsis that is less than or equal to the apoapsis.";
        }
    }

    const desiredApoapsis = state.get('desiredApoapsis');
    const desiredApoapsisUnits = state.get('desiredApoapsisUnits');
    const desiredPeriapsis = state.get('desiredPeriapsis');
    const desiredPeriapsisUnits = state.get('desiredPeriapsisUnits');

    const desiredErrors = {}
    if (desiredApoapsis === "") {
        desiredErrors.desiredApoapsis = "Please enter an apoapsis.";
    } else if (!isPositiveNumber(desiredApoapsis)) {
        desiredErrors.desiredApoapsis = "Please enter a valid number greater than or equal to 0.";
    }

    if (desiredPeriapsis === "") {
        desiredErrors.desiredPeriapsis = "Please enter a periapsis.";
    } else if (!isPositiveNumber(desiredPeriapsis)) {
        desiredErrors.desiredPeriapsis = "Please enter a valid number greater than or equal to 0.";
    }

    if (isEmpty(desiredErrors)) {
        const pe = convertAltitude(desiredPeriapsis, desiredPeriapsisUnits, 'm');
        const ap = convertAltitude(desiredApoapsis, desiredApoapsisUnits, 'm');

        if (pe > ap) { 
            desiredErrors.desiredPeriapsis = "Please enter a periapsis that is less than or equal to the apoapsis.";
        }
    }

    return {
        ...currentErrors,
        ...desiredErrors
    };
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
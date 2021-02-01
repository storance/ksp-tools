import { Map } from 'immutable';
import { convertAltitudeToMeters, ManeuverPlan, formUpdate, lookupBody, resetBodyOnPlanetPackUpdate } from '../utils';
import { validatePositiveNumberField, validateApsisFields } from '../validators';

const initialState = Map({
    'currentApoapsis' : Map({
        'value' : '',
        'units' : 'km',
        'error' : null
    }),
    'currentPeriapsis' : Map({
        'value' : '',
        'units' : 'km',
        'error' : null
    }),
    'desiredApoapsis' : Map({
        'value' : '',
        'units' : 'km',
        'error' : null
    }),
    'desiredPeriapsis' : Map({
        'value' : '',
        'units' : 'km',
        'error' : null
    })
});

function calculate(state, planetpack) {
    let newState = validate(state);
    if (newState.get('hasErrors')) {
        return newState;
    }

    const body = lookupBody(newState.get('body'), planetpack);
    const currentApoapsis = convertAltitudeToMeters(newState.get('currentApoapsis'));
    const currentPeriapsis = convertAltitudeToMeters(newState.get('currentPeriapsis'));
    const desiredApoapsis = convertAltitudeToMeters(newState.get('desiredApoapsis'));
    const desiredPeriapsis = convertAltitudeToMeters(newState.get('desiredPeriapsis'));

    const maneuverPlan = new ManeuverPlan(body, currentApoapsis, currentPeriapsis, desiredApoapsis, desiredPeriapsis);

    return newState.set('maneuverPlan', maneuverPlan);
}

function validate(state) {
    return state.withMutations(tempState => {
        let currentErrors = validatePositiveNumberField(tempState, 'currentApoapsis') ||
            validatePositiveNumberField(tempState, 'currentPeriapsis');

        let desiredErrors = validatePositiveNumberField(tempState, 'desiredApoapsis') ||
            validatePositiveNumberField(tempState, 'desiredPeriapsis');

        if (!currentErrors) {
            currentErrors = currentErrors || validateApsisFields(tempState, 'currentApoapsis', 'currentPeriapsis');
        }

        if (!desiredErrors) {
            desiredErrors = desiredErrors || validateApsisFields(tempState, 'desiredApoapsis', 'desiredPeriapsis');
        }

        tempState.set('hasErrors', currentErrors || desiredErrors);
        tempState.remove('maneuverPlan');
    });
}

export default function(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case 'MANEUVER_PLANNER.FORM_UPDATE':
            newState = formUpdate(newState, action.payload.field, action.payload.value);
            break;
        case 'MANEUVER_PLANNER.CALCULATE':
            newState = calculate(newState, action.planetpack);
            break;
    }
    return resetBodyOnPlanetPackUpdate(newState, action);
}
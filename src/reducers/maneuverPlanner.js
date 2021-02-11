import { Map } from 'immutable';
import { DISTANCE_UNITS_MAP,
         ManeuverPlan,
         createValidatedUnitField,
         getValidatedUnitField,
         formUpdate,
         resetBodyOnProfileSelect,
         lookupBody } from '../utils';
import { validatePositiveNumberField, validateApsisFields } from '../validators';

const initialState = Map({
    'currentApoapsis' : createValidatedUnitField({units: 'km'}),
    'currentPeriapsis' : createValidatedUnitField({units: 'km'}),
    'desiredApoapsis' : createValidatedUnitField({units: 'km'}),
    'desiredPeriapsis' : createValidatedUnitField({units: 'km'})
});

function calculate(state, profile) {
    let newState = validate(state);
    if (newState.get('hasErrors')) {
        return newState;
    }

    const body = lookupBody(newState.get('body'), profile.planetpack);
    const currentApoapsis = getValidatedUnitField(newState.get('currentApoapsis'), 'm', DISTANCE_UNITS_MAP);
    const currentPeriapsis = getValidatedUnitField(newState.get('currentPeriapsis'), 'm', DISTANCE_UNITS_MAP);
    const desiredApoapsis = getValidatedUnitField(newState.get('desiredApoapsis'), 'm', DISTANCE_UNITS_MAP);
    const desiredPeriapsis = getValidatedUnitField(newState.get('desiredPeriapsis'), 'm', DISTANCE_UNITS_MAP);

    const maneuverPlan = new ManeuverPlan(body, currentApoapsis, currentPeriapsis, desiredApoapsis, desiredPeriapsis);

    return newState.set('maneuverPlan', maneuverPlan);
}

function validate(state) {
    return state.withMutations(tempState => {
        let currentErrors = false;
        if (validatePositiveNumberField(tempState, 'currentApoapsis')) {
            currentErrors = true;
        }

        if (validatePositiveNumberField(tempState, 'currentPeriapsis')) {
            currentErrors = true;
        }

        let desiredErrors = false;
        if (validatePositiveNumberField(tempState, 'desiredApoapsis')) {
            desiredErrors = true;
        }

        if (validatePositiveNumberField(tempState, 'desiredPeriapsis')) {
            desiredErrors = true;
        }

        if (!currentErrors && validateApsisFields(tempState, 'currentApoapsis', 'currentPeriapsis')) {
            currentErrors = true;
        }

        if (!desiredErrors && validateApsisFields(tempState, 'desiredApoapsis', 'desiredPeriapsis')) {
            desiredErrors = true;
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
            newState = calculate(newState, action.activeProfile);
            break;
    }
    return resetBodyOnProfileSelect(newState, action);
}
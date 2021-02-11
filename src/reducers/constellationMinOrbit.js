import { Map } from 'immutable';
import { PI,
        createValidatedField,
        getValidatedNumericField,
        formUpdate,
        lookupBody,
        resetBodyOnProfileSelect } from '../utils';
import { validatePositiveNumberField } from '../validators';

const initialState = Map({
    'satelliteCount' : createValidatedField()
});

function calculate(state, profile) {
    let newState = validate(state);
    if (newState.get('hasErrors')) {
        return newState;
    }

    const body = lookupBody(state.get('body'), profile.planetpack);
    const satelliteCount = getValidatedNumericField(state.get('satelliteCount'));

    const occlusion = body.atmosphere.enabled ? profile.atmOcclusion : profile.vacOcclusion;
    const minOrbit = ( body.radius * occlusion ) / (Math.cos(PI / satelliteCount)) - body.radius;

    return state.set('minOrbit', minOrbit);
}

function validate(state) {
    return state.withMutations(tempState => {
        let errors = validatePositiveNumberField(tempState, 'satelliteCount');

        tempState.set('hasErrors', errors);
        tempState.remove('minOrbit');
    });
}

export default function(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case 'CONSTELLATION.MIN_ORBIT.FORM_UPDATE':
            newState = formUpdate(newState, action.payload.field, action.payload.value);
            break;
        case 'CONSTELLATION.MIN_ORBIT.CALCULATE':
            newState = calculate(newState, action.activeProfile); 
            break;
    }
    return resetBodyOnProfileSelect(newState, action);
}
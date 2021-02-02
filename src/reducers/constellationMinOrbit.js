import { Map } from 'immutable';
import { Orbit, convertAltitudeToMeters, formUpdate, lookupBody, resetBodyOnPlanetPackUpdate } from '../utils';
import { validatePositiveNumberField } from '../validators';

const initialState = Map({
    'satelliteCount' : Map({
        'value': '',
        'error': null
    }),
    'atmOcclusion' : Map({
        'value': '0.75',
        'error': null
    }),
    'vacOcclusion' : Map({
        'value': '0.9',
        'error': null
    })
});

function calculate(state, planetpack) {
    let newState = validate(state);
    if (newState.get('hasErrors')) {
        return newState;
    }

    const body = lookupBody(state.get('body'), planetpack);
    const vacOcclusion = parseFloat(state.getIn(['vacOcclusion', 'value']));
    const atmOcclusion = parseFloat(state.getIn(['atmOcclusion', 'value']));
    const satelliteCount = parseFloat(state.getIn(['satelliteCount', 'value']));

    const occlusion = body.atmosphere.enabled ? atmOcclusion : vacOcclusion;
    const minOrbit = ( body.radius * occlusion ) / (Math.cos(Math.PI / satelliteCount)) - body.radius;

    return state.set('minOrbit', minOrbit);
}

function validate(state) {
    return state.withMutations(tempState => {
        let errors = validatePositiveNumberField(tempState, 'vacOcclusion') ||
            validatePositiveNumberField(tempState, 'atmOcclusion') ||
            validatePositiveNumberField(tempState, 'satelliteCount');

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
            newState = calculate(newState, action.planetpack); 
            break;
    }
    return resetBodyOnPlanetPackUpdate(newState, action);
}
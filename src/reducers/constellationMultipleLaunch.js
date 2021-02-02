import { Map } from 'immutable';
import { PI, convertAltitudeToMeters, Orbit, formUpdate, lookupBody, resetBodyOnPlanetPackUpdate } from '../utils';
import { validatePositiveNumberField, validateApsisFields } from '../validators';

const initialState = Map({
    'apoapsis' : Map({
        'value': '',
        'units': 'km',
        'error': null
    }),
    'periapsis' : Map({
        'value': '',
        'units': 'km',
        'error': null
    }),
    'satelliteCount' : Map({
        'value': '',
        'error': null
    })
});

function calculate(state, planetpack) {
    let newState = validate(state);
    if (newState.get('hasErrors')) {
        return newState;
    }

    const body = lookupBody(state.get('body'), planetpack);
    const apoapsis = convertAltitudeToMeters(state.get('apoapsis'));
    const periapsis = convertAltitudeToMeters(state.get('periapsis'));
    const satelliteCount = parseFloat(state.getIn(['satelliteCount', 'value']));

    const orbit = Orbit.fromApAndPe(body, apoapsis, periapsis);
    const angleRadians = (2 * PI) / satelliteCount;
    const separation = orbit.semiMajorAxis * 2 * Math.sin(angleRadians / 2);

    return state.set('separation', separation);
}

function validate(state) {
    return state.withMutations(tempState => {
        let errors = validatePositiveNumberField(tempState, 'apoapsis') ||
            validatePositiveNumberField(tempState, 'periapsis');

        if (!errors) {
            errors = errors || validateApsisFields(tempState, 'apoapsis', 'periapsis');
        }

        errors = errors || validatePositiveNumberField(tempState, 'satelliteCount');

        tempState.set('hasErrors', errors);
        tempState.remove('separation');
    });
}

export default function(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case 'CONSTELLATION.MUTIPLE_LAUNCH.FORM_UPDATE':
            newState = formUpdate(newState, action.payload.field, action.payload.value);
            break;
        case 'CONSTELLATION.MUTIPLE_LAUNCH.CALCULATE':
            newState = calculate(newState, action.planetpack);
            break;
    }
    return resetBodyOnPlanetPackUpdate(newState, action);
}
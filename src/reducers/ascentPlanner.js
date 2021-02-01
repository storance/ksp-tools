import { Map } from 'immutable';
import { Orbit, convertAltitudeToMeters, formUpdate, lookupBody, resetBodyOnPlanetPackUpdate } from '../utils';
import { validatePositiveNumberField } from '../validators';

const initialState = Map({
    'altitude' : Map({
        'value': '',
        'units': 'km',
        'error': null
    })
});

function calculate(state, planetpack) {
    let newState = validate(state);
    if (newState.get('hasErrors')) {
        return newState;
    }

    const body = lookupBody(newState.get('body'), planetpack);
    const altitude = convertAltitudeToMeters(newState.get('altitude'));

    const orbit1 = Orbit.fromApAndPe(body, altitude, 0);
    const orbit2 = Orbit.fromApAndPe(body, altitude, altitude);

    const burn1 = orbit1.periapsisVelocity - body.rotationalVelocity;
    const burn2 = orbit2.apoapsisVelocity - orbit1.apoapsisVelocity;

    return newState.set('ascentDeltaV', burn1 + burn2);
}

function validate(state) {
    return state.withMutations(tempState => {
        const errors = validatePositiveNumberField(tempState, 'altitude');

        tempState.set('hasErrors', errors);
        tempState.remove('ascentDeltaV');
    });
}

export default function(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case 'ASCENT_PLANNER.FORM_UPDATE':
            newState = formUpdate(newState, action.payload.field, action.payload.value);
            break;
        case 'ASCENT_PLANNER.CALCULATE':
            newState = calculate(newState, action.planetpack);
            break;
    }
    return resetBodyOnPlanetPackUpdate(newState, action);
}
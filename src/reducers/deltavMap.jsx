import { Map } from 'immutable';
import Orbit from '../orbit.js';
import { convertAltitude, isPositiveNumber, isEmpty } from '../utils.js';

const initialState = Map({
    'altitude' : '',
    'altitudeUnits' : 'km',
    'errors' : {}
});

function formUpdate(state, field, value) {
    return state.set(field, value);
}

function calculate(state, body) {
    const errors = validate(state);
    if (!isEmpty(errors)) {
        return state.set('errors', errors)
                    .remove('transferOrbit');
    }

    const altitude = convertAltitude(state.get('altitude'), state.get('altitudeUnits'), 'm');

    const orbit1 = Orbit.fromApAndPe(body, altitude, 0);
    const orbit2 = Orbit.fromApAndPe(body, altitude, altitude);

    const burn1 = orbit1.periapsisVelocity - body.rotationalVelocity;
    const burn2 = orbit2.apoapsisVelocity - orbit1.apoapsisVelocity;

    return state.set('ascentDeltav', burn1 + burn2)
                .set('errors', {});
}

function validate(state) {
    const altitude = state.get('altitude');
    const errors = {};

    if (altitude === "") {
        errors.altitude = "Please enter an altitude.";
    } else if (!isPositiveNumber(altitude)) {
        errors.altitude = "Please enter a valid number greater than or equal to 0.";
    }

    return errors;
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'DELTAVMAP.FORM_UPDATE':
            return formUpdate(state, action.field, action.value);
        case 'DELTAVMAP.CALCULATE':
            return calculate(state, action.orbitingBody);
    }
    return state;
}
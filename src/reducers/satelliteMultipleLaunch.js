import { Map } from 'immutable';
import Orbit from '../orbit';
import { convertAltitude, isPositiveNumber, isEmpty } from '../utils';
import { PI } from '../consts';

const initialState = Map({
    'apoapsis' : '',
    'apoapsisUnits' : 'km',
    'periapsis' : '',
    'periapsisUnits' : 'km',
    'satelliteCount' : '',
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

    const apoapsis = convertAltitude(state.get('apoapsis'), state.get('apoapsisUnits'), 'm');
    const periapsis = convertAltitude(state.get('periapsis'), state.get('periapsisUnits'), 'm');
    const satelliteCount = parseFloat(state.get('satelliteCount'));

    const orbit = Orbit.fromApAndPe(body, apoapsis, periapsis);
    const angleRadians = (2 * PI) / satelliteCount;
    const separation = orbit.semiMajorAxis * 2 * Math.sin(angleRadians / 2)

    return state.set('separation', separation)
                .set('errors', {});
}

function validate(state) {
    const satelliteCount = state.get('satelliteCount');
    const apoapsis = state.get('apoapsis');
    const apoapsisUnits = state.get('apoapsisUnits');
    const periapsis = state.get('periapsis');
    const periapsisUnits = state.get('periapsisUnits');
    const errors = {};

    if (apoapsis === "") {
        errors.apoapsis = "Please enter an apoapsis.";
    } else if (!isPositiveNumber(apoapsis)) {
        errors.apoapsis = "Please enter a valid number greater than or equal to 0.";
    }

    if (periapsis === "") {
        errors.periapsis = "Please enter a periapsis.";
    } else if (!isPositiveNumber(periapsis)) {
        errors.periapsis = "Please enter a valid number greater than or equal to 0.";
    }

    if (isEmpty(errors)) {
        const pe = convertAltitude(periapsis, periapsisUnits, 'm');
        const ap = convertAltitude(apoapsis, apoapsisUnits, 'm');

        if (pe > ap) { 
            errors.periapsis = "Please enter a periapsis that is less than or equal to the apoapsis.";
        }
    }

    if (satelliteCount === "") {
        errors.satelliteCount = "Please enter a the number of satellites.";
    } else if (!isPositiveNumber(satelliteCount)) {
        errors.satelliteCount = "Please enter a valid number greater than or equal to 0.";
    }

    return errors;
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'SATELLITE.MUTIPLE_LAUNCH.FORM_UPDATE':
            return formUpdate(state, action.field, action.value);
        case 'SATELLITE.MUTIPLE_LAUNCH.CALCULATE':
            return calculate(state, action.orbitingBody);
    }
    return state;
}
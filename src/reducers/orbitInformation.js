import { Map } from 'immutable';
import Orbit from '../orbit.js';
import { convertAltitude, isPositiveNumber, isEmpty } from '../utils.js';

const initialState = Map({
    'apoapsis' : '',
    'apoapsisUnits' : 'km',
    'periapsis' : '',
    'periapsisUnits' : 'km',
    'period' : '',
    'mode' : 'ap+pe',
    'errors' : {}
});

function formUpdate(state, field, value) {
    return state.set(field, value);
}

function calculate(state, body) {
    const errors = validate(state);
    if (!isEmpty(errors)) {
        return state.set('errors', errors)
                    .remove('orbit');
    }

    const mode = state.get('mode');
    const apoapsis = convertAltitude(state.get('apoapsis'), state.get('apoapsisUnits'), 'm');
    const periapsis = convertAltitude(state.get('periapsis'), state.get('periapsisUnits'), 'm');
    const period = parseFloat(state.get('period'));

    let orbit = null;
    if (mode === 'ap+pe') {
        orbit = Orbit.fromApAndPe(body, apoapsis, periapsis);
    } else if (mode === 'ap+period') {
        orbit = Orbit.fromApAndPeriod(body, apoapsis, period);
    } else if (mode === 'pe+period') {
        orbit = Orbit.fromPeAndPeriod(body, apoapsis, period);
    }
    return state.set('orbit', orbit)
                .set('errors', {});
}

function validate(state) {
    const mode = state.get('mode');
    const apoapsis = state.get('apoapsis');
    const apoapsisUnits = state.get('apoapsisUnits');
    const periapsis = state.get('periapsis');
    const periapsisUnits = state.get('periapsisUnits');
    
    const period = state.get('period');
    const errors = {};

    if (mode === 'ap+pe' || mode === 'ap+period') {
        if (apoapsis === "") {
            errors.apoapsis = "Please enter an apoapsis.";
        } else if (!isPositiveNumber(apoapsis)) {
            errors.apoapsis = "Please enter a valid number greater than or equal to 0.";
        }
    }

    if (mode === 'ap+pe' || mode === 'pe+period') {
        if (periapsis === "") {
            errors.periapsis = "Please enter a periapsis.";
        } else if (!isPositiveNumber(periapsis)) {
            errors.periapsis = "Please enter a valid number greater than or equal to 0.";
        }
    }

    if (mode === 'ap+period' || mode === 'pe+period') {
        if (period === "") {
            errors.period = "Please enter a period.";
        } else if (!isPositiveNumber(period)) {
            errors.period = "Please enter a valid number greater than or equal to 0.";
        }
    }

    if (mode === 'ap+pe' && isEmpty(errors)) {
        const pe = convertAltitude(periapsis, periapsisUnits, 'm');
        const ap = convertAltitude(apoapsis, apoapsisUnits, 'm');

        if (pe > ap) { 
            errors.periapsis = "Please enter a periapsis that is less than or equal to the apoapsis.";
        }
    }

    return errors;
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'ORBIT_INFORMATION.FORM_UPDATE':
            return formUpdate(state, action.field, action.value);
        case 'ORBIT_INFORMATION.CALCULATE':
            return calculate(state, action.orbitingBody);
    }
    return state;
}
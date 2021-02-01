import { Map } from 'immutable';
import { convertAltitudeToMeters,
         Orbit,
         formUpdate,
         resetBodyOnPlanetPackUpdate,
         lookupBody } from '../utils';
import { validatePositiveNumberField, validateApsisFields } from '../validators';

const initialState = Map({
    'apoapsis' : Map({
        'value' : '',
        'units' : 'km',
        'error' : null
    }),
    'periapsis' : Map({
        'value' : '',
        'units' : 'km',
        'error' : null
    }),
    'period' : Map({
        'value' : '',
        'error' : null
    }),
    'body' : '',
    'mode' : 'ap+pe'
});

function calculate(state, planetpack) {
    let newState = validate(state);
    if (newState.get('hasErrors')) {
        return newState;
    }

    const body = lookupBody(newState.get('body'), planetpack);
    const mode = newState.get('mode');
    const apoapsis = convertAltitudeToMeters(newState.get('apoapsis'));
    const periapsis = convertAltitudeToMeters(newState.get('periapsis'));
    const period = parseFloat(newState.getIn(['period', 'value']));

    let orbit = null;
    if (mode === 'ap+pe') {
        orbit = Orbit.fromApAndPe(body, apoapsis, periapsis);
    } else if (mode === 'ap+period') {
        orbit = Orbit.fromApAndPeriod(body, apoapsis, period);
    } else if (mode === 'pe+period') {
        orbit = Orbit.fromPeAndPeriod(body, apoapsis, period);
    }
    return newState.set('orbit', orbit);
}

function validate(state) {
    return state.withMutations(tempState => {
        let errors = false;
        const mode = tempState.get('mode');

        if (mode === 'ap+pe' || mode === 'ap+period') {
            errors = errors || validatePositiveNumberField(tempState, 'apoapsis');
        }

        if (mode === 'ap+pe' || mode === 'pe+period') {
            errors = errors || validatePositiveNumberField(tempState, 'periapsis');
        }

        if (mode === 'ap+period' || mode === 'pe+period') {
            errors = errors || validatePositiveNumberField(tempState, 'period');
        }

        if (mode === 'ap+pe' && !errors) {
            errors = errors || validateApsisFields(tempState, 'apoapsis', 'periapsis');
        }

        tempState.set('hasErrors', errors);
        tempState.remove('orbit');
    });
}

export default function(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case 'ORBIT_INFORMATION.FORM_UPDATE':
            newState = formUpdate(newState, action.payload.field, action.payload.value);
            break;
        case 'ORBIT_INFORMATION.CALCULATE':
            newState = calculate(newState, action.planetpack);
            break;
    }
    return resetBodyOnPlanetPackUpdate(newState, action);
}
import { Map } from 'immutable';
import { convertAltitudeToMeters, Orbit, formUpdate, lookupBody, resetBodyOnPlanetPackUpdate } from '../utils';
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

    const minPeriapsis = body.atmosphere.enabled ? body.atmosphere.height : 0;
    const maxApoapsis = body.sphereOfInfluence;

    const orbit = Orbit.fromApAndPe(body, apoapsis, periapsis);
    const transferLowPeriod = (orbit.period * (satelliteCount - 1)) / satelliteCount;
    const transferLowOrbit = Orbit.fromApAndPeriod(body, apoapsis, transferLowPeriod);
    const transferLow = {
        type: 'Lower',
        orbit: transferLowOrbit,
        isPossible: true, //transferLowOrbit.periapsis >= minPeriapsis,
        deltaV: orbit.apoapsisVelocity - transferLowOrbit.apoapsisVelocity
    };

    const transferHighPeriod = (orbit.period * (satelliteCount + 1)) / satelliteCount;
    const transferHighOrbit = Orbit.fromPeAndPeriod(body, periapsis, transferHighPeriod);
    const transferHigh = {
        type: 'Higher',
        orbit: transferHighOrbit,
        isPossible: transferHighOrbit.apoapsis <= maxApoapsis,
        deltaV: transferHighOrbit.periapsisVelocity - orbit.periapsisVelocity
    };

    return newState.set('transferOrbits', [transferHigh, transferLow]);
}

function validate(state) {
    return state.withMutations(tempState => {
        let errors = validatePositiveNumberField(tempState, 'apoapsis') ||
            validatePositiveNumberField(tempState, 'periapsis');

        if (!errors) {
            errors = errors || validateApsisFields(tempState, 'apoapsis', 'periapsis');
        }

        errors = errors || validatePositiveNumberField(tempState, 'satelliteCount')

        tempState.set('hasErrors', errors);
        tempState.remove('transferOrbits');
    });
}

export default function(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case 'CONSTELLATION.SINGLE_LAUNCH.FORM_UPDATE':
            newState = formUpdate(newState, action.payload.field, action.payload.value);
            break;
        case 'CONSTELLATION.SINGLE_LAUNCH.CALCULATE':
            newState = calculate(newState, action.planetpack);
            break;
    }
    return resetBodyOnPlanetPackUpdate(newState, action);
}
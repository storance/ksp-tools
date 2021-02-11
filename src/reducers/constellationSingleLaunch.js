import { Map } from 'immutable';
import { DISTANCE_UNITS_MAP,
         Orbit,
         createValidatedField,
         createValidatedUnitField,
         getValidatedNumericField,
         getValidatedUnitField,
         formUpdate,
         resetBodyOnProfileSelect,
         lookupBody } from '../utils';
import { validatePositiveNumberField, validateApsisFields } from '../validators';

const initialState = Map({
    'apoapsis' : createValidatedUnitField({units: 'km'}),
    'periapsis' : createValidatedUnitField({units: 'km'}),
    'satelliteCount' : createValidatedField()
});

function calculate(state, profile) {
    let newState = validate(state);
    if (newState.get('hasErrors')) {
        return newState;
    }

    const body = lookupBody(state.get('body'), profile.planetpack);
    const apoapsis = getValidatedUnitField(newState.get('apoapsis'), 'm', DISTANCE_UNITS_MAP);
    const periapsis = getValidatedUnitField(newState.get('periapsis'), 'm', DISTANCE_UNITS_MAP);
    const satelliteCount = getValidatedNumericField(state.get('satelliteCount'));

    const minPeriapsis = body.atmosphere.enabled ? body.atmosphere.height : 0;
    const maxApoapsis = body.sphereOfInfluence;

    const orbit = Orbit.from(body, {apoapsis, periapsis});
    const transferLowPeriod = (orbit.period * (satelliteCount - 1)) / satelliteCount;
    const transferLowOrbit = Orbit.from(body, {apoapsis, period: transferLowPeriod});
    const transferLow = {
        type: 'Lower',
        orbit: transferLowOrbit,
        isPossible: transferLowOrbit.periapsis >= minPeriapsis,
        deltaV: orbit.apoapsisVelocity - transferLowOrbit.apoapsisVelocity
    };

    const transferHighPeriod = (orbit.period * (satelliteCount + 1)) / satelliteCount;
    const transferHighOrbit = Orbit.from(body, {periapsis, period: transferHighPeriod});
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
        let errors = false;
        if (validatePositiveNumberField(tempState, 'apoapsis')) {
            errors = true;
        }

        if (validatePositiveNumberField(tempState, 'periapsis')) {
            errors = true;
        }

        if (!errors && validateApsisFields(tempState, 'apoapsis', 'periapsis')) {
            errors = true
        }

        if (validatePositiveNumberField(tempState, 'satelliteCount')) {
            errors = true;
        }

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
            newState = calculate(newState, action.activeProfile);
            break;
    }
    return resetBodyOnProfileSelect(newState, action);
}
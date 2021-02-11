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
import { validatePositiveNumberField } from '../validators';

const initialState = Map({
    'altitude' : createValidatedUnitField({units: 'km'})
});

function calculate(state, profile) {
    let newState = validate(state);
    if (newState.get('hasErrors')) {
        return newState;
    }

    const body = lookupBody(newState.get('body'), profile.planetpack);
    const altitude = getValidatedUnitField(newState.get('altitude'), 'm', DISTANCE_UNITS_MAP);

    const orbit1 = Orbit.from(body, {apoapsis: altitude, periapsis: 0});
    const orbit2 = Orbit.from(body, {apoapsis: altitude, periapsis: altitude});

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
            newState = calculate(newState, action.activeProfile);
            break;
    }
    return resetBodyOnProfileSelect(newState, action);
}
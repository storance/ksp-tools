import { Map } from 'immutable';
import { PI, 
         DISTANCE_UNITS_MAP,
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

    const orbit = Orbit.from(body, {apoapsis, periapsis});
    const angleRadians = (2 * PI) / satelliteCount;
    const separation = orbit.semiMajorAxis * 2 * Math.sin(angleRadians / 2);

    return state.set('separation', separation);
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
            newState = calculate(newState, action.activeProfile);
            break;
    }
    return resetBodyOnProfileSelect(newState, action);
}
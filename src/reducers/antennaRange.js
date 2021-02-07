import { Map } from 'immutable';
import { createValidatedField,
         createValidatedUnitField,
         getValidatedNumericField,
         getValidatedUnitField,
         formUpdate } from '../utils';
import { validatePositiveNumberField } from '../validators';

const initialState = Map({
    dsnLevel: 1,
});

export default function(state = initialState, action) {
    switch (action.type) {
        case 'ANTENNA_RANGE.FORM_UPDATE':
            return formUpdate(state, action.payload.field, action.payload.value);
    }
    return state;
}
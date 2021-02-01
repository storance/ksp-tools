import { Map } from 'immutable';
import { formUpdate, resetBodyOnPlanetPackUpdate } from '../utils';

const initialState = Map({
    'body' : null
});

export default function(state = initialState, action) {
	let newState = state;
    switch (action.type) {
        case 'BODY_INFORMATION.FORM_UPDATE':
            newState = formUpdate(newState, action.payload.field, action.payload.value);
            break;
    }

    return resetBodyOnPlanetPackUpdate(newState, action, 'body');
}
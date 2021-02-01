import { isPositiveNumber, convertAltitudeToMeters } from './utils';


export function validatePositiveNumberField(state, fieldName) {
    const value = state.getIn([fieldName, 'value']);

    if (value === '') {
        state.setIn([fieldName, 'error'], 'Required.');
        return true;
    } else if (!isPositiveNumber(value)) {
        state.setIn([fieldName, 'error'], 'Please enter a valid number greater than or equal to 0.');
        return true;
    } else {
        state.setIn([fieldName, 'error'], null);
        return false;
    }
}

export function validateApsisFields(state, apFieldName, peFieldName) {
    const pe = convertAltitudeToMeters(state.get(peFieldName));
    const ap = convertAltitudeToMeters(state.get(apFieldName));

    if (pe > ap) { 
        state.setIn([peFieldName, 'error'], 
            'Please enter a periapsis that is less than or equal to the apoapsis.');
        return true;
    }

    return false;
}
import { isPositiveNumber, convertAltitudeToMeters } from './utils';

export function validateRequiredField(state, fieldName) {
    const fieldPath = Array.isArray(fieldName) ? fieldName : [fieldName];
    const valuePath = fieldPath.concat('value');
    const errorPath = fieldPath.concat('error');
    const value = state.getIn(valuePath);

    if (value === '') {
        state.setIn(errorPath, 'Required.');
        return true;
    } else {
        state.setIn(errorPath, null);
        return false;
    }
}

export function validatePositiveNumberField(state, fieldName) {
    const fieldPath = Array.isArray(fieldName) ? fieldName : [fieldName];
    const valuePath = fieldPath.concat('value');
    const errorPath = fieldPath.concat('error');
    const value = state.getIn(valuePath);

    if (value === '') {
        state.setIn(errorPath, 'Required.');
        return true;
    } else if (!isPositiveNumber(value)) {
        state.setIn(errorPath, 'Please enter a valid number greater than or equal to 0.');
        return true;
    } else {
        state.setIn(errorPath, null);
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
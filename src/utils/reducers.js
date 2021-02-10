import { Map, List } from 'immutable';
import { convertValue, getBestFitUnit } from './index';

export function formUpdate(state, field, value) {
    if (Array.isArray(field)) {
        return state.setIn(field, value);
    } else {
        return state.set(field, value);
    }
}

export function resetBodyOnProfileSelect(state, action, fields=['body']) {
    if (action.type == 'PROFILES.SELECT') {
        return state.deleteAll(fields);
    }

    return state;
}

export function createValidatedField(value='', error=null) {
    return Map({
        value,
        error
    });
}

export function createValidatedUnitField({value='', units='', error=null, allUnits=null}) {
    if (allUnits && value !== '') {
        const result = getBestFitUnit(value, allUnits);
        return Map({
            value: result.value,
            units: result.units,
            error
        });
    }

    return Map({
        value,
        units,
        error
    });
}

export function setValidatedField(state, name, value='', error=null) {
    const fieldMap = createValidatedField(value, error);

    if (Array.isArray(name)) {
        return state.setIn(name, fieldMap);
    } else {
        return state.set(name, fieldMap);
    }
}

export function setValidatedUnitField(state, name, {
        value='',
        units='',
        error=null,
        allUnits=null
    }) {
    const fieldMap = createValidatedUnitField({value, units, error, allUnits});

    if (Array.isArray(name)) {
        return state.setIn(name, fieldMap);
    } else {
        return state.set(name, fieldMap);
    }
}

export function getValidatedField(field, parser=v => v) {
    return parser(field.get('value'));
}

export function getValidatedNumericField(field, parser=v => v) {
    return getValidatedField(field, parseFloat);
}

export function getValidatedUnitField(field, wantedUnits, unitsMap) {
    return convertValue(field.get('value'), field.get('units'), wantedUnits, unitsMap);
}
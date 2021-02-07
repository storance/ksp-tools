import { Map, List } from 'immutable';

export const GRAVITATIONAL_CONSTANT = 6.67408e-11;
export const PI = 3.14159265358979;
export const GRAVITY = 9.805;

export const DISTANCE_UNITS = List([
    Map({
        scale: 1,
        suffix: 'm'
    }),
    Map({
        scale: 1000,
        suffix: 'km'
    }),
    Map({
        scale: 1000000,
        suffix: 'Mm'
    }),
    Map({
        scale: 1000000000,
        suffix: 'Gm'
    })
]);

export const DISTANCE_UNITS_DISPLAY = DISTANCE_UNITS.filter(entry => entry.get('scale') <= 1000);

export const DISTANCE_UNITS_MAP = Map(DISTANCE_UNITS.map(entry => [entry.get('suffix'), entry.get('scale')]));

export const DISTANCE_SQUARED_UNITS = List([
    Map({
        scale: 1,
        suffix: 'm^2'
    }),
    Map({
        scale: 1000000,
        suffix: 'km^2'
    })
]);

export const DISTANCE_SQUARED_UNITS_MAP = Map(DISTANCE_SQUARED_UNITS.map(entry => 
    [entry.get('suffix'), entry.get('scale')]));

export const VELOCITY_UNITS = List([
    Map({
        scale: 1,
        suffix: 'm/s'
    }),
    Map({
        scale: 1000,
        suffix: 'km/s'
    })
]);

export const VELOCITY_UNITS_MAP = Map(VELOCITY_UNITS.map(entry => [entry.get('suffix'), entry.get('scale')]));

export const POWER_UNITS = List([
    Map({
        scale: 1,
        suffix: '',
    }),
    Map({
        scale: 1000,
        suffix: 'k'
    }),
    Map({
        scale: 1000000,
        suffix: 'M'
    }),
    Map({
        scale: 1000000000,
        suffix: 'G'
    }),
    Map({
        scale: 1000000000000,
        suffix: 'T'
    })
]);

export const POWER_UNITS_MAP = Map(POWER_UNITS.map(entry => [entry.get('suffix'), entry.get('scale')]));

export const DIFFICULTY_PRESETS = List([
    Map({
        name: 'Easy',
        dsnModifier: 1.0,
        rangeModifier: 1.0,
        atmOcclusion: 0,
        vacOcclusion: 0
    }),
    Map({
        name: 'Normal',
        dsnModifier: 1.0,
        rangeModifier: 1.0,
        atmOcclusion: 0.75,
        vacOcclusion: 0.9
    }),
    Map({
        name: 'Moderate',
        dsnModifier: 1.0,
        rangeModifier: 1.0,
        atmOcclusion: 0.85,
        vacOcclusion: 1.0
    }),
    Map({
        name: 'Hard',
        dsnModifier: 1.0,
        rangeModifier: 1.0,
        atmOcclusion: 1.0,
        vacOcclusion: 1.0
    })
]);

export const DSN_LEVELS = List([
    2000000000,
    50000000000,
    250000000000
]);
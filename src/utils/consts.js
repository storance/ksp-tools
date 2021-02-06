export const GRAVITATIONAL_CONSTANT = 6.67408e-11;
export const PI = 3.14159265358979;
export const GRAVITY = 9.805;

export const DISTANCE_UNITS =[
    {
        scale: 1,
        suffix: 'm'
    },
    {
        scale: 1000,
        suffix: 'km'
    }
];

export const DISTANCE_SQUARED_UNITS =[
    {
        scale: 1,
        suffix: 'm^2'
    },
    {
        scale: 1000000,
        suffix: 'km^2'
    }
];

export const VELOCITY_UNITS = [
    {
        scale: 1,
        suffix: 'm/s'
    },
    {
        scale: 1000,
        threshold: 10000,
        suffix: 'km/s'
    }
];

export const POWER_UNITS = [
    {
        scale: 1000,
        suffix: 'k'
    },
    {
        scale: 1000000,
        suffix: 'M'
    },
    {
        scale: 1000000000,
        suffix: 'G'
    },
    {
        scale: 1000000000000,
        suffix: 'T'
    }
];

export const DIFFICULTY_PRESETS = [
    {
        name: 'Easy',
        dsnModifier: 1.0,
        rangeModifier: 1.0,
        atmOcclusion: 0,
        vacOcclusion: 0
    },
    {
        name: 'Normal',
        dsnModifier: 1.0,
        rangeModifier: 1.0,
        atmOcclusion: 0.75,
        vacOcclusion: 0.9
    },
    {
        name: 'Moderate',
        dsnModifier: 1.0,
        rangeModifier: 1.0,
        atmOcclusion: 0.85,
        vacOcclusion: 1.0
    },
    {
        name: 'Hard',
        dsnModifier: 1.0,
        rangeModifier: 1.0,
        atmOcclusion: 1.0,
        vacOcclusion: 1.0
    }
];

export const DSN_LEVELS = [
    2000000000,
    50000000000,
    250000000000
];
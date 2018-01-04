export const GRAVITATIONAL_CONSTANT = 6.67408e-11;
export const PI = 3.14159265358979;

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
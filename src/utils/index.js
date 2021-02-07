import { PI, GRAVITY } from './consts';

export * from './atmosphere';
export Body from './body';
export Orbit from './orbit';
export PlanetPack from './planetpack';
export * from './calendar';
export * from './profile';
export * from './consts';
export * from './maneuver';
export * from './format';
export * from './reducers';

export function convertValue(value, fromUnit, toUnit, unitsMap) {
    return value * unitsMap.get(fromUnit) / unitsMap.get(toUnit);
}

export function convertField(field, unitsMap) {
    const units = field.get('units');
    const value = parseFloat(field.get('value'));

    return value * unitsMap.get(units);
}

export function convertAltitudeToMeters(field) {
    var unitMult = {
        "m" : 1,
        "km" : 1000,
        "Mm" : 1000000,
        "Gm" : 1000000000
    };

    const units = field.get('units');
    const value = parseFloat(field.get('value'));
    return value * unitMult[units];
}

export function toRadians(deg) {
    return deg * PI / 180;
}

export function toDegrees(rad) {
    return rad * 180 / PI;
}

export function isPositiveNumber(n) {
    if (typeof n === 'string' && !n.match(/^-?\d+(\.\d+)?$/)) {
        return false;
    }

    const floatVal = parseFloat(n);
    return Number.isFinite(floatVal) && floatVal >= 0;
}

export function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

export function toGees(gravity) {
    return gravity / GRAVITY;
}

export function lookupBody(bodyName, planetpack) {
    if (!bodyName) {
        return planetpack.homeworld;
    }

    let body = planetpack.findByName(bodyName);
    if (!body) {
        return planetpack.homeworld;
    }

    return body;
}
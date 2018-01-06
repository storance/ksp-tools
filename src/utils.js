import { PI, GRAVITY } from './consts';

export function convertAltitude(value, fromUnits, toUnits) {
    var unitMult = {
        "m" : 1,
        "km" : 1000,
        "Mm" : 1000000,
        "Gm" : 1000000000
    };

    if (fromUnits === toUnits) {
        return parseFloat(value);
    } else {
        return parseFloat(value) * (unitMult[fromUnits] / unitMult[toUnits]);
    }
}

export function toRadians(deg) {
    return deg * PI / 180;
}

export function toDegrees(rad) {
    return rad * 180 / PI;
}

export function isPositiveNumber(n) {
    const floatVal = parseFloat(n);
    return Number.isFinite(floatVal) && floatVal >= 0;
}

export function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

export function toGees(gravity) {
    return gravity / GRAVITY;
}

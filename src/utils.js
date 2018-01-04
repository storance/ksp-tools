import {PI} from './consts';

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
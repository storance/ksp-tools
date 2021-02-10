import { PI, GRAVITY } from './consts';

export * from './atmosphere';
export Body from './body';
export Orbit from './orbit';
export PlanetPack from './planetpack';
export * from './antenna';
export * from './calendar';
export * from './profile';
export * from './consts';
export * from './maneuver';
export * from './format';
export * from './reducers';

export function convertValue(value, fromUnit, toUnit, unitsMap) {
    return value * unitsMap.get(fromUnit) / unitsMap.get(toUnit);
}

export function getBestFitUnit(value, units) {
    for (const unit of Array.from(units).reverse()) {
        if (Math.abs(value) >= unit.get('scale')) {
            return {
                value: value / unit.get('scale'),
                units: unit.get('suffix')
            };
        }
    }

    return {value: value, units: ''};
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

export function isNumber(n, min=null, max=null) {
    if (typeof n === 'string' && !n.match(/^-?(\d+(\.\d+)?|\.\d+)$/)) {
        return false;
    }

    const floatVal = parseFloat(n);
    if (!Number.isFinite(floatVal)) {
        return false;
    }

    if (min != null && floatVal < min) {
        return false;
    }

    if (max != null && floatVal > max) {
        return false;
    }

    return true;
}

export function isInteger(n, min=null, max=null) {
    if (typeof n === 'string' && !n.match(/^-?\d+$/)) {
        return false;
    }

    const intVal = parseInt(n);
    if (!Number.isFinite(intVal)) {
        return false;
    }

    if (min != null && intVal < min) {
        return false;
    }

    if (max != null && intVal > max) {
        return false;
    }

    return true;
}

export function isPositiveNumber(n) {
    return isNumber(n, 0.0);
}

export function isPositiveInteger(n) {
    return isInteger(n, 0);
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
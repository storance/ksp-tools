import { Map, List } from 'immutable';

export const TYPE_INTERNAL = 'internal';
export const TYPE_DIRECT = 'direct';
export const TYPE_RELAY = 'relay';

export const ANTENNA_TYPE_TO_DISPLAY = Map({
    [TYPE_INTERNAL]:  'Internal',
    [TYPE_DIRECT]:  'Direct',
    [TYPE_RELAY]: 'Relay'
});

export class Antenna {
    constructor({
            mod,
            name,
            displayName,
            type,
            power,
            combinable = false,
            combinabilityExponent = 0,
            feedScale = 0}) {
        this.mod = mod;
        this.name = name;
        this.displayName = displayName;
        this.type = type;
        this.power = power;
        this.combinable = combinable;
        this.combinabilityExponent = combinabilityExponent;
        this.feedScale = feedScale;
    }

    applyRangeModifier(rangeModifier) {
        return new Antenna({
            mod: this.mod,
            name: this.name,
            displayName: this.displayName,
            type: this.type,
            power: this.power * rangeModifier,
            combinable: this.combinable,
            combinabilityExponent: this.combinabilityExponent,
            feedScale: this.feedScale
        })
    }

    get isReflectorUsable() {
        return this.feedScale > 0;
    }
}

export class VesselAntenna {
    constructor({
        antenna,
        count = 1,
        reflector = null
    }) {
        this.antenna = antenna;
        this.count = count;
        this.reflector = reflector;
    }

    get name() {
        return this.antenna.name;
    }

    get displayName() {
        return this.antenna.displayName;
    }

    get power() {
        let addedPower = 0;
        if (this.hasReflector) {
            addedPower = this.reflector.addedPower * this.antenna.feedScale;
        }

        return this.antenna.power + addedPower;
    }

    get type() {
        return this.antenna.type;
    }

    get combinable() {
        return this.antenna.combinable;
    }

    get combinabilityExponent() {
        return this.antenna.combinabilityExponent;
    }

    get feedScale() {
        return this.antenna.feedScale;
    }

    get hasReflector() {
        return this.reflector != null;
    }
}

export class Reflector {
    constructor({mod, name, displayName, addedPower}) {
        this.mod = mod;
        this.name = name;
        this.displayName = displayName;
        this.addedPower = addedPower;
    }
}

export function calcVesselPower(antennas) {
    let maxPower = 0;
    let sumPower = 0;
    let sumPowerExp = 0;
    let mostPowerfulAntenna = null;

    for (var antenna of antennas) {
        if (mostPowerfulAntenna == null || antenna.power > mostPowerfulAntenna.power) {
            mostPowerfulAntenna = antenna;
        }

        if (antenna.combinable) {
            maxPower = Math.max(antenna.power, maxPower);
            sumPower += (antenna.count * antenna.power);
            sumPowerExp += (antenna.count * antenna.power * antenna.combinabilityExponent);
        }
    }

    let combinedPower = 0;
    if (sumPower !== 0 && maxPower !== 0) {
        let avgExp = sumPowerExp / sumPower;
        combinedPower = maxPower * Math.pow(sumPower / maxPower, avgExp);
    }
    
    if (mostPowerfulAntenna != null && combinedPower < mostPowerfulAntenna.power) {
        return mostPowerfulAntenna.power;
    } else {
        return combinedPower;
    }
}

export function calcMaxRange(power1, power2) {
    return Math.sqrt(power1 * power2);
}

export function calcSignal(maxRange, distance) {
    let relativeDist = Math.min(1.0, Math.max(0, 1 - (distance / maxRange)));

    return (3 - 2 * relativeDist) * (relativeDist * relativeDist);
}
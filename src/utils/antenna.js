import { Map, List } from 'immutable';

export const TYPE_INTERNAL = 'internal';
export const TYPE_DIRECT = 'direct';
export const TYPE_RELAY = 'relay';

const MOD_STOCK = 'stock';
const MOD_BREAKING_GROUND = 'breaking-ground'
const MOD_NEARFUTURE_EXPLORATION = 'nearfuture-exploration';
const MOD_TANTARES = 'tantares';
const MOD_TANTARES_SP = 'tantares-sp';
const MOD_COMMNET_EXTENSION = 'commnet-antenna-extension';
const MOD_RT_REDEV = 'rt-redev-anntennas';
const MOD_JX2 = 'jx2';
const MOD_RESTOCK_PLUS = 'restock+';
const MOD_KIWI = 'kiwi-tech-tree';
const MOD_KNES = 'knes';
const MOD_SOCK = 'sock';

export const MOD_TO_DISPLAY_NAME = Map([
    [MOD_STOCK, 'Stock'],
    [MOD_BREAKING_GROUND, 'Breaking Ground'],
    [MOD_NEARFUTURE_EXPLORATION, 'NearFutureExploration'],
    [MOD_TANTARES, 'Tantares'],
    [MOD_TANTARES_SP, 'TantaresSP'],
    [MOD_COMMNET_EXTENSION, 'CommNet antenna Extension'],
    [MOD_RT_REDEV, 'RemoteTech Redev Anntennas'],
    [MOD_JX2, 'JX2 Antennas'],
    [MOD_RESTOCK_PLUS,'ReStock+'],
    [MOD_KIWI, 'Kiwi Tech Tree'],
    [MOD_KNES, 'Knes'],
    [MOD_SOCK, 'Sock']
]);

export const ANTENNA_TYPE_TO_DISPLAY = Map([
    [TYPE_INTERNAL,  'Internal'],
    [TYPE_DIRECT,  'Direct'],
    [TYPE_RELAY, 'Relay']
]);

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

    get canUseReflector() {
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

export class NearFutureReflector {
    constructor(mod, name, addedPower) {
        this.mod = mod;
        this.name = name;
        this.addedPower = addedPower;
    }
}

export const ANTENNAS = List([
    new Antenna({
        mod: MOD_STOCK,
        name: 'internal',
        displayName: 'Internal',
        type: TYPE_INTERNAL,
        power: 5000
    }),
    new Antenna({
        mod: MOD_STOCK,
        name: 'longAntenna',
        displayName: 'Communotron 16',
        type: TYPE_DIRECT,
        power: 500000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
    new Antenna({
        mod: MOD_STOCK,
        name: 'SurfAntenna',
        displayName: 'Communotron 16-S',
        type: TYPE_DIRECT,
        power: 500000
    }),
    new Antenna({
        mod: MOD_STOCK,
        name: 'HighGainAntenna5_v2',
        displayName: 'HG-5 High Gain',
        type: TYPE_RELAY,
        power: 5000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_STOCK,
        name: 'mediumDishAntenna',
        displayName: 'Communotron DTS-M1',
        type: TYPE_DIRECT,
        power: 2000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_STOCK,
        name: 'RelayAntenna5',
        displayName: 'RA-2 Relay Antenna',
        type: TYPE_RELAY,
        power: 2000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BREAKING_GROUND,
        name: 'DeployedSatDish',
        displayName: 'Communotron Ground HG-48',
        type: TYPE_DIRECT,
        power: 10000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_STOCK,
        name: 'HighGainAntenna',
        displayName: 'Communotron HG-55',
        type: TYPE_DIRECT,
        power: 15000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_STOCK,
        name: 'RelayAntenna50',
        displayName: 'RA-15 Relay Antenna',
        type: TYPE_RELAY,
        power: 15000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_STOCK,
        name: 'commDish',
        displayName: 'Communotron 88-88',
        type: TYPE_DIRECT,
        power: 100000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_STOCK,
        name: 'RelayAntenna100',
        displayName: 'RA-100 Relay Antenna',
        type: TYPE_RELAY,
        power: 100000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),

    // Kiwi Tech Tree's Patches
    new Antenna({
        mod: MOD_KIWI,
        name: 'kiwi.longAntenna',
        displayName: 'Communotron 16',
        type: TYPE_DIRECT,
        power: 250000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
    new Antenna({
        mod: MOD_KIWI,
        name: 'kiwi.SurfAntenna',
        displayName: 'Communotron 16-S',
        type: TYPE_DIRECT,
        power: 250000
    }),
    new Antenna({
        mod: MOD_KIWI,
        name: 'kiwi.mediumDishAntenna',
        displayName: 'Communotron DTS-M1',
        type: TYPE_DIRECT,
        power: 5000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_KIWI,
        name: 'kiwi.HighGainAntenna',
        displayName: 'Communotron HG-55',
        type: TYPE_DIRECT,
        power: 20000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),

]);

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
import { Map, List } from 'immutable';

export const TYPE_INTERNAL = 'internal';
export const TYPE_DIRECT = 'direct';
export const TYPE_RELAY = 'relay';

const MOD_STOCK = 'stock';
const MOD_COATL = 'coatl';
const MOD_BDB = 'bdb';
const MOD_BREAKING_GROUND = 'breaking-ground'
const MOD_NF_EXPLORATION = 'nearfuture-exploration';
const MOD_TANTARES = 'tantares';
const MOD_TANTARES_SP = 'tantares-sp';
const MOD_COMMNET_EXTENSION = 'commnet-antenna-extension';
const MOD_JX2 = 'jx2';
const MOD_RESTOCK_PLUS = 'restock+';
const MOD_KIWI = 'kiwi-tech-tree';
const MOD_KNES = 'knes';
const MOD_SOCK = 'sock';

export const MOD_TO_DISPLAY_NAME = Map([
    [MOD_STOCK, 'Stock'],
    [MOD_BREAKING_GROUND, 'Breaking Ground'],
    [MOD_BDB, 'Bluedog Design Bureau'],
    [MOD_COATL, 'Coatl Aerospace'],
    [MOD_COMMNET_EXTENSION, 'CommNet antenna Extension'],
    [MOD_JX2, 'JX2 Antennas'],
    [MOD_KIWI, 'Kiwi Tech Tree'],
    [MOD_KNES, 'Knes'],
    [MOD_NF_EXPLORATION, 'NearFuture Exploration'],
    [MOD_RESTOCK_PLUS,'ReStock+'],
    [MOD_SOCK, 'Sock'],
    [MOD_TANTARES, 'Tantares'],
    [MOD_TANTARES_SP, 'TantaresSP'],
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

    // Breaking Ground
    new Antenna({
        mod: MOD_BREAKING_GROUND,
        name: 'DeployedSatDish',
        displayName: 'Communotron Ground HG-48',
        type: TYPE_DIRECT,
        power: 10000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),

    // CommNet Antenna Extension
    new Antenna({
        mod: MOD_COMMNET_EXTENSION,
        name: 'caeDeployableAntenna',
        displayName: 'C2+ High Gain Antenna HG-32',
        type: TYPE_RELAY,
        power: 32000000,
        combinable: true,
        combinabilityExponent: 0.75,
    }),
    new Antenna({
        mod: MOD_COMMNET_EXTENSION,
        name: 'RTLongAntenna3',
        displayName: 'C2 Communotron EXP-VR-2T',
        type: TYPE_DIRECT,
        power: 5000000,
        combinable: true,
        combinabilityExponent: 1.0,
        feedScale: 0.9
    }),
    new Antenna({
        mod: MOD_COMMNET_EXTENSION,
        name: 'RTShortDish2',
        displayName: 'C3+ Relay Antenna RA-7',
        type: TYPE_RELAY,
        power: 7000000000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.9
    }),
    new Antenna({
        mod: MOD_COMMNET_EXTENSION,
        name: 'RTLongDish2',
        displayName: 'C4+ Relay Antenna RA-25',
        type: TYPE_RELAY,
        power: 25000000000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.9
    }),
    new Antenna({
        mod: MOD_COMMNET_EXTENSION,
        name: 'RTGigaDish1',
        displayName: 'C5+ Communotron "Tigger"',
        type: TYPE_DIRECT,
        power: 500000000000,
        combinable: true,
        combinabilityExponent: 1.0,
        feedScale: 0.9
    }),
    new Antenna({
        mod: MOD_COMMNET_EXTENSION,
        name: 'RTGigaDish2',
        displayName: 'C5+ RelayTech One',
        type: TYPE_RELAY,
        power: 500000000000,
        combinable: true,
        combinabilityExponent: 1.0,
        feedScale: 0.9
    }),

    // JX2
    new Antenna({
        mod: MOD_JX2,
        name: 'ju1MDA',
        displayName: 'JU1 Medium Deployable Antenna',
        type: TYPE_RELAY,
        power: 300000000000,
        combinable: true,
        combinabilityExponent: 0.75,
    }),
    new Antenna({
        mod: MOD_JX2,
        name: 'jw1MDA',
        displayName: 'JW1 Medium Deployable Antenna',
        type: TYPE_DIRECT,
        power: 300000000000,
        combinable: true,
        combinabilityExponent: 0.75,
    }),
    new Antenna({
        mod: MOD_JX2,
        name: 'jx2LDA',
        displayName: 'JX2 Large Deployable Antenna',
        type: TYPE_RELAY,
        power: 1000000000000,
        combinable: true,
        combinabilityExponent: 0.75,
    }),

    // Kiwi Tech Tree's Patches
    new Antenna({
        mod: MOD_KIWI,
        name: 'kiwi-relayantenna1',
        displayName: 'RA-1 Relay Antenna',
        type: TYPE_RELAY,
        power: 1000000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
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

    // Near Future Exploration
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-deploy-wv3-1',
        displayName: 'DR-3 Deployable High Gain Antenna',
        type: TYPE_DIRECT,
        power: 500000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.9
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-feeder-direct-1',
        displayName: 'F-DA Direct Antenna Feed',
        type: TYPE_DIRECT,
        power: 5000,
        combinable: true,
        combinabilityExponent: 0.5,
        feedScale: 1.0
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-feeder-relay-1',
        displayName: 'F-RA Relay Antenna Feed',
        type: TYPE_RELAY,
        power: 5000,
        combinable: true,
        combinabilityExponent: 0.5,
        feedScale: 1.0
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-phased-array-1',
        displayName: 'RA-X1 Phased Relay Antenna',
        type: TYPE_RELAY,
        power: 6000000,
        combinable: true,
        combinabilityExponent: 0.25,
        feedScale: 0.75
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-phased-array-2',
        displayName: 'RA-X2 Phased Relay Antenna',
        type: TYPE_RELAY,
        power: 10000000,
        combinable: true,
        combinabilityExponent: 0.25,
        feedScale: 0.75
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-phased-array-3',
        displayName: 'RA-X3 Phased Relay Antenna',
        type: TYPE_RELAY,
        power: 100000000,
        combinable: true,
        combinabilityExponent: 0.25,
        feedScale: 0.75
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-phased-single-1',
        displayName: 'PH-1 Phased Array Antenna Element',
        type: TYPE_DIRECT,
        power: 125000,
        combinable: true,
        combinabilityExponent: 1.0,
        feedScale: 0.9
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-phased-single-2',
        displayName: 'PH-2 Phased Array Antenna Element',
        type: TYPE_DIRECT,
        power: 200000,
        combinable: true,
        combinabilityExponent: 1.0,
        feedScale: 0.9
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-phased-single-3',
        displayName: 'PH-3 Phased Array Antenna Element',
        type: TYPE_DIRECT,
        power: 800000,
        combinable: true,
        combinabilityExponent: 1.0,
        feedScale: 0.9
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-relay-tdrs-1',
        displayName: 'RA-0-8 Relay Antenna',
        type: TYPE_RELAY,
        power: 85000000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.5
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-relay-tdrs-2',
        displayName: 'RA-5B Advanced Relay Antenna',
        type: TYPE_RELAY,
        power: 500000000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.5
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-relay-tiny-1',
        displayName: 'RA-00-2 Micro-Relay Antenna',
        type: TYPE_RELAY,
        power: 2000000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.5
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-rover-1',
        displayName: 'AX-4 Pointable Helical Antenna',
        type: TYPE_DIRECT,
        power: 40000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.5
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-rover-2',
        displayName: 'AX-5 Aerial Micro-Antenna',
        type: TYPE_DIRECT,
        power: 150000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.5
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-rover-3',
        displayName: 'AX-30 High Gain Micro-Antenna',
        type: TYPE_DIRECT,
        power: 300000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.5
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-static-mini-1',
        displayName: 'DR-1 High Gain Antenna',
        type: TYPE_DIRECT,
        power: 300000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.9
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-top-dish-1',
        displayName: 'D-2 Spot Antenna',
        type: TYPE_DIRECT,
        power: 2000000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.9
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-top-dish-2',
        displayName: 'D-50 Large Spot Antenna',
        type: TYPE_DIRECT,
        power: 50000000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.9
    }),
]);

export const REFLECTORS = List([
    new Reflector({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-reflector-side-1',
        displayName: 'RFL-1 Dish Reflector',
        addedPower: 9000000
    }),
    new Reflector({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-reflector-side-2',
        displayName: 'RFL-2 Medium Dish Reflector',
        addedPower: 75000000
    }),
    new Reflector({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-reflector-side-3',
        displayName: 'RFL-3 Dish Reflector Array',
        addedPower: 850000000
    }),
    new Reflector({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-reflector-large-1',
        displayName: 'RFL-50 Large Dish Reflector',
        addedPower: 9000000000
    }),
    new Reflector({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-reflector-huge-1',
        displayName: 'RFL-100 Giant Dish Reflector',
        addedPower: 100000000000
    }),
    new Reflector({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-reflector-giant-1',
        displayName: 'RFL-2000 Dish Reflector Array',
        addedPower: 5000000000000
    })
]);

export const REFLECTORS_BY_MOD = REFLECTORS.groupBy(reflector => reflector.mod);

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
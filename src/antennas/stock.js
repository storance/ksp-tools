import { List } from 'immutable';
import { Antenna, MOD_STOCK, TYPE_DIRECT, TYPE_RELAY, TYPE_INTERNAL } from '../utils';

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
]);
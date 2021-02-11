import { List } from 'immutable';
import { Antenna, MOD_KIWI, TYPE_DIRECT, TYPE_RELAY } from '../utils';

export const ANTENNAS = List([
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
]);
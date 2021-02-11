import { List } from 'immutable';
import { Antenna, MOD_JX2, TYPE_RELAY, TYPE_DIRECT } from '../utils';

export const ANTENNAS = List([
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
]);
import { List } from 'immutable';
import { Antenna, MOD_RESTOCK_PLUS, TYPE_DIRECT, TYPE_RELAY } from '../utils';

export const ANTENNAS = List([
    new Antenna({
        mod: MOD_RESTOCK_PLUS,
        name: 'restock-antenna-stack-2',
        displayName: 'Communotron DTS-J1',
        type: TYPE_DIRECT,
        power: 2000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_RESTOCK_PLUS,
        name: 'restock-antenna-stack-3',
        displayName: 'Communotron HG-61',
        type: TYPE_DIRECT,
        power: 15000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_RESTOCK_PLUS,
        name: 'restock-relay-radial-2_v2',
        displayName: 'HG-20 High Gain Antenna',
        type: TYPE_RELAY,
        power: 20000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
]);
import { List } from 'immutable';
import { Antenna, MOD_BREAKING_GROUND, TYPE_DIRECT } from '../utils';

export const ANTENNAS = List([
    new Antenna({
        mod: MOD_BREAKING_GROUND,
        name: 'DeployedSatDish',
        displayName: 'Communotron Ground HG-48',
        type: TYPE_DIRECT,
        power: 10000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
]);
import { List } from 'immutable';
import { Antenna, MOD_TANTARES_SP, TYPE_DIRECT, TYPE_RELAY } from '../utils';

export const ANTENNAS = List([
    new Antenna({
        mod: MOD_TANTARES_SP,
        name: '1mv_high_gain_antenna_srf_1',
        displayName: 'Opal High Gain Antenna',
        type: TYPE_DIRECT,
        power: 15000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_TANTARES_SP,
        name: '4mv_v_high_gain_antenna_srf_1',
        displayName: 'Amethyst High Gain Antenna',
        type: TYPE_RELAY,
        power: 15000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_TANTARES_SP,
        name: '4mv_vl_parachute_s0_1',
        displayName: 'Garnet Size 0 Parachute',
        type: TYPE_DIRECT,
        power: 500000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_TANTARES_SP,
        name: '1f_high_gain_antenna_s0_1',
        displayName: 'Pearl Size 0 High Gain Antenna',
        type: TYPE_DIRECT,
        power: 15000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
]);

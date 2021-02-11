import { List } from 'immutable';
import { Antenna, MOD_TANTARES, TYPE_DIRECT, TYPE_RELAY } from '../utils';

export const ANTENNAS = List([
    new Antenna({
        mod: MOD_TANTARES,
        name: 'atria_antenna_srf_1_1',
        displayName: 'Atria Active Antenna (Extending)',
        type: TYPE_DIRECT,
        power: 1000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_TANTARES,
        name: 'atria_antenna_srf_1_2',
        displayName: 'Atria Active Antenna (90°)',
        type: TYPE_DIRECT,
        power: 1000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_TANTARES,
        name: 'atria_antenna_srf_1_3',
        displayName: 'Atria Active Antenna (180°)',
        type: TYPE_DIRECT,
        power: 1000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_TANTARES,
        name: 'atria_antenna_srf_2_1',
        displayName: 'Atria Passive Antenna (Extending)',
        type: TYPE_DIRECT,
        power: 1000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_TANTARES,
        name: 'atria_antenna_srf_2_2',
        displayName: 'Atria Passive Antenna (90°)',
        type: TYPE_DIRECT,
        power: 1000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_TANTARES,
        name: 'atria_antenna_srf_2_3',
        displayName: 'Atria Passive Antenna (180°)',
        type: TYPE_DIRECT,
        power: 1000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_TANTARES,
        name: 'lepus_high_gain_antenna_srf_1',
        displayName: 'Lepus High Gain Antenna (Fixed)',
        type: TYPE_RELAY,
        power: 2000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_TANTARES,
        name: 'lepus_high_gain_antenna_srf_2',
        displayName: 'Lepus High Gain Antenna (Folding)',
        type: TYPE_RELAY,
        power: 2000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_TANTARES,
        name: 'lepus_low_gain_antenna_srf_1',
        displayName: 'Lepus Low Gain Antenna (Fixed)',
        type: TYPE_DIRECT,
        power: 500000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_TANTARES,
        name: 'lepus_low_gain_antenna_srf_2',
        displayName: 'Lepus Low Gain Antenna (Folding)',
        type: TYPE_DIRECT,
        power: 500000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_TANTARES,
        name: 'vela_high_gain_antenna_srf_1',
        displayName: 'Vela High Gain Antenna',
        type: TYPE_RELAY,
        power: 2000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_TANTARES,
        name: 'eridani_high_gain_antenna_srf_1',
        displayName: 'Eridani High Gain Antenna',
        type: TYPE_RELAY,
        power: 5000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_TANTARES,
        name: 'eridani_low_gain_antenna_srf_1',
        displayName: 'Eridani Low Gain Antenna A',
        type: TYPE_DIRECT,
        power: 5000000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_TANTARES,
        name: 'eridani_low_gain_antenna_srf_2',
        displayName: 'Eridani Low Gain Antenna B',
        type: TYPE_DIRECT,
        power: 5000000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_TANTARES,
        name: 'octans_basic_high_gain_antenna_srf_2',
        displayName: 'Atria-Octans Basic High Gain Antenna',
        type: TYPE_DIRECT,
        power: 1000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_TANTARES,
        name: 'octans_high_gain_antenna_srf_1',
        displayName: 'Octans High Gain Antenna A',
        type: TYPE_DIRECT,
        power: 1000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_TANTARES,
        name: 'octans_high_gain_antenna_srf_2',
        displayName: 'Octans High Gain Antenna B',
        type: TYPE_DIRECT,
        power: 1000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_TANTARES,
        name: 'octans_whip_antenna_srf_1',
        displayName: 'Octans Whip Antenna A',
        type: TYPE_DIRECT,
        power: 500000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_TANTARES,
        name: 'octans_whip_antenna_srf_2',
        displayName: 'Octans Whip Antenna B',
        type: TYPE_DIRECT,
        power: 1000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_TANTARES,
        name: 'Andromeda_Antenna_1',
        displayName: 'Andromeda 55Å Half-Moon Antenna',
        type: TYPE_DIRECT,
        power: 250000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_TANTARES,
        name: 'Andromeda_Antenna_2',
        displayName: 'Andromeda 66Å Full-Moon Antenna',
        type: TYPE_DIRECT,
        power: 250000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
]);

import { List } from 'immutable';
import { Antenna, MOD_LUCIOLE, TYPE_DIRECT, TYPE_RELAY } from '../utils';

export const ANTENNAS = List([
    new Antenna({
        mod: MOD_LUCIOLE,
        name: '_Luciole_Nano_Antenna',
        displayName: 'L-A "FlowerBee" Antenna',
        type: TYPE_DIRECT,
        power: 500000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
    new Antenna({
        mod: MOD_LUCIOLE,
        name: '_Luciole_MarCO_UHF',
        displayName: 'L-U "Diplura" UHF Antenna',
        type: TYPE_DIRECT,
        power: 125000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
    new Antenna({
        mod: MOD_LUCIOLE,
        name: '_Luciole_MarCO_XBand',
        displayName: 'L-X "Belidae" X-Band Relay Antenna',
        type: TYPE_RELAY,
        power: 2000000000,
        combinable: true,
        combinabilityExponent: 0.7
    }),
]);
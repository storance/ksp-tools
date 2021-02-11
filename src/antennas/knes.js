import { List } from 'immutable';
import { Antenna, MOD_KNES, TYPE_DIRECT } from '../utils';

export const ANTENNAS = List([
    new Antenna({
        mod: MOD_KNES,
        name: '_Knes_ATV_Antenna',
        displayName: 'ATV "Leproux" Antenna',
        type: TYPE_DIRECT,
        power: 150000,
        combinable: true,
        combinabilityExponent: 1
    }),
    new Antenna({
        mod: MOD_KNES,
        name: '_Knes_DirectAntenna_bread',
        displayName: 'C-2501 "Wall-e" Direct Antenna',
        type: TYPE_DIRECT,
        power: 150000,
        combinable: true,
        combinabilityExponent: 1
    }),
    new Antenna({
        mod: MOD_KNES,
        name: '_Knes_mrk_Antenna',
        displayName: 'MRK-5a Antenna',
        type: TYPE_DIRECT,
        power: 5000000,
        combinable: true,
        combinabilityExponent: 1
    }),
]);
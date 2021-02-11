import { List } from 'immutable';
import { Antenna, MOD_SOCK, TYPE_DIRECT } from '../utils';

export const ANTENNAS = List([
    new Antenna({
        mod: MOD_SOCK,
        name: 'benjee10_shuttle_kuBand',
        displayName: 'OV-100 Ku Band Antenna',
        type: TYPE_DIRECT,
        power: 500000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
]);
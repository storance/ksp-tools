import { List } from 'immutable';
import { Antenna, MOD_COMMNET_EXTENSION, TYPE_DIRECT, TYPE_RELAY } from '../utils';

export const ANTENNAS = List([
    new Antenna({
        mod: MOD_COMMNET_EXTENSION,
        name: 'caeDeployableAntenna',
        displayName: 'C2+ High Gain Antenna HG-32',
        type: TYPE_RELAY,
        power: 32000000,
        combinable: true,
        combinabilityExponent: 0.75,
    }),
    new Antenna({
        mod: MOD_COMMNET_EXTENSION,
        name: 'RTLongAntenna3',
        displayName: 'C2 Communotron EXP-VR-2T',
        type: TYPE_DIRECT,
        power: 5000000,
        combinable: true,
        combinabilityExponent: 1.0,
        feedScale: 0.9
    }),
    new Antenna({
        mod: MOD_COMMNET_EXTENSION,
        name: 'RTShortDish2',
        displayName: 'C3+ Relay Antenna RA-7',
        type: TYPE_RELAY,
        power: 7000000000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.9
    }),
    new Antenna({
        mod: MOD_COMMNET_EXTENSION,
        name: 'RTLongDish2',
        displayName: 'C4+ Relay Antenna RA-25',
        type: TYPE_RELAY,
        power: 25000000000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.9
    }),
    new Antenna({
        mod: MOD_COMMNET_EXTENSION,
        name: 'RTGigaDish1',
        displayName: 'C5+ Communotron "Tigger"',
        type: TYPE_DIRECT,
        power: 500000000000,
        combinable: true,
        combinabilityExponent: 1.0,
        feedScale: 0.9
    }),
    new Antenna({
        mod: MOD_COMMNET_EXTENSION,
        name: 'RTGigaDish2',
        displayName: 'C5+ RelayTech One',
        type: TYPE_RELAY,
        power: 500000000000,
        combinable: true,
        combinabilityExponent: 1.0,
        feedScale: 0.9
    }),
]);
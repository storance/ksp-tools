import { List } from 'immutable';
import { Antenna, Reflector, MOD_NF_EXPLORATION, TYPE_DIRECT, TYPE_RELAY } from '../utils';

export const ANTENNAS = List([
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-deploy-wv3-1',
        displayName: 'DR-3 Deployable High Gain Antenna',
        type: TYPE_DIRECT,
        power: 500000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.9
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-feeder-direct-1',
        displayName: 'F-DA Direct Antenna Feed',
        type: TYPE_DIRECT,
        power: 5000,
        combinable: true,
        combinabilityExponent: 0.5,
        feedScale: 1.0
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-feeder-relay-1',
        displayName: 'F-RA Relay Antenna Feed',
        type: TYPE_RELAY,
        power: 5000,
        combinable: true,
        combinabilityExponent: 0.5,
        feedScale: 1.0
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-phased-array-1',
        displayName: 'RA-X1 Phased Relay Antenna',
        type: TYPE_RELAY,
        power: 6000000,
        combinable: true,
        combinabilityExponent: 0.25,
        feedScale: 0.75
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-phased-array-2',
        displayName: 'RA-X2 Phased Relay Antenna',
        type: TYPE_RELAY,
        power: 10000000,
        combinable: true,
        combinabilityExponent: 0.25,
        feedScale: 0.75
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-phased-array-3',
        displayName: 'RA-X3 Phased Relay Antenna',
        type: TYPE_RELAY,
        power: 100000000,
        combinable: true,
        combinabilityExponent: 0.25,
        feedScale: 0.75
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-phased-single-1',
        displayName: 'PH-1 Phased Array Antenna Element',
        type: TYPE_DIRECT,
        power: 125000,
        combinable: true,
        combinabilityExponent: 1.0,
        feedScale: 0.9
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-phased-single-2',
        displayName: 'PH-2 Phased Array Antenna Element',
        type: TYPE_DIRECT,
        power: 200000,
        combinable: true,
        combinabilityExponent: 1.0,
        feedScale: 0.9
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-phased-single-3',
        displayName: 'PH-3 Phased Array Antenna Element',
        type: TYPE_DIRECT,
        power: 800000,
        combinable: true,
        combinabilityExponent: 1.0,
        feedScale: 0.9
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-relay-tdrs-1',
        displayName: 'RA-0-8 Relay Antenna',
        type: TYPE_RELAY,
        power: 85000000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.5
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-relay-tdrs-2',
        displayName: 'RA-5B Advanced Relay Antenna',
        type: TYPE_RELAY,
        power: 500000000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.5
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-relay-tiny-1',
        displayName: 'RA-00-2 Micro-Relay Antenna',
        type: TYPE_RELAY,
        power: 2000000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.5
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-rover-1',
        displayName: 'AX-4 Pointable Helical Antenna',
        type: TYPE_DIRECT,
        power: 40000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.5
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-rover-2',
        displayName: 'AX-5 Aerial Micro-Antenna',
        type: TYPE_DIRECT,
        power: 150000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.5
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-rover-3',
        displayName: 'AX-30 High Gain Micro-Antenna',
        type: TYPE_DIRECT,
        power: 300000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.5
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-static-mini-1',
        displayName: 'DR-1 High Gain Antenna',
        type: TYPE_DIRECT,
        power: 300000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.9
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-top-dish-1',
        displayName: 'D-2 Spot Antenna',
        type: TYPE_DIRECT,
        power: 2000000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.9
    }),
    new Antenna({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-top-dish-2',
        displayName: 'D-50 Large Spot Antenna',
        type: TYPE_DIRECT,
        power: 50000000,
        combinable: true,
        combinabilityExponent: 0.75,
        feedScale: 0.9
    }),
]);

export const REFLECTORS = List([
    new Reflector({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-reflector-side-1',
        displayName: 'RFL-1 Dish Reflector',
        addedPower: 9000000
    }),
    new Reflector({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-reflector-side-2',
        displayName: 'RFL-2 Medium Dish Reflector',
        addedPower: 75000000
    }),
    new Reflector({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-reflector-side-3',
        displayName: 'RFL-3 Dish Reflector Array',
        addedPower: 850000000
    }),
    new Reflector({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-reflector-large-1',
        displayName: 'RFL-50 Large Dish Reflector',
        addedPower: 9000000000
    }),
    new Reflector({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-reflector-huge-1',
        displayName: 'RFL-100 Giant Dish Reflector',
        addedPower: 100000000000
    }),
    new Reflector({
        mod: MOD_NF_EXPLORATION,
        name: 'nfex-antenna-reflector-giant-1',
        displayName: 'RFL-2000 Dish Reflector Array',
        addedPower: 5000000000000
    })
]);
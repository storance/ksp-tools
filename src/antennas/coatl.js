import { List } from 'immutable';
import { Antenna, MOD_COATL, TYPE_DIRECT, TYPE_RELAY } from '../utils';

export const ANTENNAS = List([
    new Antenna({
        mod: MOD_COATL,
        name: 'ca_landv_omni',
        displayName: 'CA-A07 Landvermesser Omni Antenna',
        type: TYPE_RELAY,
        power: 500000000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_COATL,
        name: 'ca_landv_orbiter_HGA',
        displayName: 'CA-A20-B HGA Antenna',
        type: TYPE_DIRECT,
        power: 1000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_COATL,
        name: 'ca_ant_gps',
        displayName: 'CA-KPS KerbNet Position System Antenna',
        type: TYPE_DIRECT,
        power: 400000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
    new Antenna({
        mod: MOD_COATL,
        name: 'antenna_cone_toggle',
        displayName: 'CA-A02 Conic Antenna',
        type: TYPE_DIRECT,
        power: 550000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_COATL,
        name: 'antenna_quetzal',
        displayName: "CA-A06 'Quetzal' Omni Antenna",
        type: TYPE_DIRECT,
        power: 500000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_COATL,
        name: 'antenna_tv',
        displayName: 'CA-A01 Ground Plane Antenna',
        type: TYPE_DIRECT,
        power: 500000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
    new Antenna({
        mod: MOD_COATL,
        name: 'dish_L',
        displayName: 'CA-A300 Torekka Relay Antenna',
        type: TYPE_RELAY,
        power: 100000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_COATL,
        name: 'dish_S',
        displayName: 'CA-A100 Small Dish Antenna',
        type: TYPE_DIRECT,
        power: 2500000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_COATL,
        name: 'dish_deploy_S',
        displayName: 'CA-A10 Small Folding Relay Antenna',
        type: TYPE_DIRECT,
        power: 5000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_COATL,
        name: 'dish_deploy_S2',
        displayName: 'CA-AD1-R Small Folding Relay Antenna',
        type: TYPE_RELAY,
        power: 2500000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_COATL,
        name: 'dish_hera',
        displayName: 'CA-A190 Hera Dish Antenna',
        type: TYPE_RELAY,
        power: 30000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_COATL,
        name: 'dish_quetzal',
        displayName: 'CA-A200 Quetzal Relay Antenna',
        type: TYPE_RELAY,
        power: 50000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_COATL,
        name: 'dish_tatsujin',
        displayName: 'CA-A180 Tatsujin Relay Antenna',
        type: TYPE_RELAY,
        power: 15000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_COATL,
        name: 'dish_xihe',
        displayName: 'CA-D02 Medium Folding Relay Antenna',
        type: TYPE_RELAY,
        power: 10000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_COATL,
        name: 'ca_argo-mk2-hga',
        displayName: 'CA-ED3 Argo Dish Antenna',
        type: TYPE_DIRECT,
        power: 9000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_COATL,
        name: 'ca_argo-mk2-mast',
        displayName: 'CA-AMA Argo Mast Assembly',
        type: TYPE_DIRECT,
        power: 800000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
    new Antenna({
        mod: MOD_COATL,
        name: 'ca_argo-mk3-hga',
        displayName: 'CA-ED3b Argo Mk3 Dish Antenna',
        type: TYPE_DIRECT,
        power: 9000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_COATL,
        name: 'ca_argo-mk4-hga',
        displayName: 'CA-RDA67 Argo Mk4 Dish Antenna',
        type: TYPE_RELAY,
        power: 9800000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_COATL,
        name: 'ca_argo-mk4-mast',
        displayName: 'CA-AMA2 Argo Mast Assembly',
        type: TYPE_DIRECT,
        power: 800000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
    new Antenna({
        mod: MOD_COATL,
        name: 'ca_vor_comm',
        displayName: 'CAE-A03 Vorona Communication Array',
        type: TYPE_DIRECT,
        power: 960000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_COATL,
        name: 'ca_vor_sar',
        displayName: 'CAE-SAR15 Synthetic-Aperture Radar System',
        type: TYPE_DIRECT,
        power: 960000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_COATL,
        name: 'ca_mer_leu',
        displayName: 'CA-MER-LEU Meridiani Lower Equipment Unit',
        type: TYPE_DIRECT,
        power: 550000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_COATL,
        name: 'mer_dish',
        displayName: 'CA-MER-A400 Meridiani Dish Antenna',
        type: TYPE_RELAY,
        power: 100000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_COATL,
        name: 'ca_explorer',
        displayName: "CA-T8E 'Explorer' Orbital Telescope",
        type: TYPE_DIRECT,
        power: 550000,
        combinable: false
    }),
]);
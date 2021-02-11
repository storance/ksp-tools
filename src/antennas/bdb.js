import { List } from 'immutable';
import { Antenna, MOD_BDB, TYPE_DIRECT, TYPE_RELAY } from '../utils';

export const ANTENNAS = List([
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_dipole',
        displayName: 'DP-75 Antenna',
        type: TYPE_DIRECT,
        power: 1000000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_domeAntenna',
        displayName: 'MSC Dome Antenna',
        type: TYPE_DIRECT,
        power: 8000000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_mariner2Antenna',
        displayName: 'A27-C Antenna',
        type: TYPE_DIRECT,
        power: 16000000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_mariner4Antenna',
        displayName: 'N100 Omni Antenna',
        type: TYPE_DIRECT,
        power: 2000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_mariner4Dish',
        displayName: 'J15-D Communications Dish',
        type: TYPE_DIRECT,
        power: 8000000000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_rangerDish',
        displayName: 'OVBR-1 Communications Dish',
        type: TYPE_DIRECT,
        power: 2000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_scimitar',
        displayName: 'WPT Scimitar Antenna',
        type: TYPE_DIRECT,
        power: 125000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_simpleAntenna',
        displayName: 'KD2 Antenna',
        type: TYPE_DIRECT,
        power: 125000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_OAO_antenna',
        displayName: 'AOO-CTR Command Antenna',
        type: TYPE_DIRECT,
        power: 500000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_HoopAntenna',
        displayName: 'Pathfinder Crossed Dipole Antenna',
        type: TYPE_DIRECT,
        power: 16000000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Pioneer6_MainAntenna',
        displayName: 'Pilgrim-PIO6E-PWD Communications Antenna',
        type: TYPE_DIRECT,
        power: 8000000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_PioneerAble_Antenna',
        displayName: 'Pilgrim-P3-VLFA Antenna',
        type: TYPE_DIRECT,
        power: 16000000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Hexagon_VHF_Straight',
        displayName: 'SP9-VHS Helical Antenna',
        type: TYPE_DIRECT,
        power: 16000000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Titan_Transtage_Antenna',
        displayName: 'Prometheus-III-S3 Engineering Antenna',
        type: TYPE_DIRECT,
        power: 500000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Nimbus_LateCommandAntenna',
        displayName: 'Aeolus-LCCA Command Antenna',
        type: TYPE_DIRECT,
        power: 1000000,
        combinable: true,
        combinabilityExponent: 0.5
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_GATV_SpiralAntenna',
        displayName: 'Belle-LOA Spiral Antenna',
        type: TYPE_DIRECT,
        power: 500000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Ranger_OmniAntenna',
        displayName: 'Burke-A27-C Antenna',
        type: TYPE_DIRECT,
        power: 16000000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_AIMP_Antenna',
        displayName: 'MIP-KRA Whip Antenna',
        type: TYPE_DIRECT,
        power: 16000000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_OFO_Antenna',
        displayName: 'OTLTH-A Communications Antenna',
        type: TYPE_DIRECT,
        power: 125000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_OGO_HighGainAntenna',
        displayName: 'HLR-OOG High Gain Antenna',
        type: TYPE_DIRECT,
        power: 2000000000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_LEM_Ascent_Antenna2',
        displayName: 'Sina-MEM-SSC VHF Antenna',
        type: TYPE_DIRECT,
        power: 75000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Gemini_WhipAntenna',
        displayName: 'Leo-DVO Whip Antenna',
        type: TYPE_DIRECT,
        power: 125000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Ranger_Lander_Antenna',
        displayName: 'Burke-L-6TP1 Antenna',
        type: TYPE_DIRECT,
        power: 1000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_ATDA_VHFAntenna',
        displayName: 'Belle-VAF VHF Antenna',
        type: TYPE_DIRECT,
        power: 250000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Gemini_UHFAntenna',
        displayName: 'Leo-MRC-U Uplink Antenna',
        type: TYPE_DIRECT,
        power: 500000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Biosat_Antenna',
        displayName: 'Bion-QRZ Telemetry Antenna',
        type: TYPE_DIRECT,
        power: 125000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Telstar_Antenna',
        displayName: 'TAT-PHON-F21 Helical Antenna',
        type: TYPE_RELAY,
        power: 1000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Gemini_DoubleXAntenna',
        displayName: 'Leo-HD6D Colinear Antenna Array',
        type: TYPE_DIRECT,
        power: 125000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_MOL_TrackingAntenna',
        displayName: 'MOS-GTA Tracking Antenna',
        type: TYPE_DIRECT,
        power: 125000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Relay_Antenna',
        displayName: 'JPR1-62BU1 Biconical Horn Antenna',
        type: TYPE_RELAY,
        power: 2500000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Gemini_DipoleAntenna',
        displayName: 'Leo-KZ24 Dipole Antenna',
        type: TYPE_DIRECT,
        power: 125000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Strawman_Thresher_Antenna',
        displayName: 'P770 Telemetry Antenna',
        type: TYPE_DIRECT,
        power: 125000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Hexagon_VHF_Bent',
        displayName: 'SP9-VHS Helical Antenna',
        type: TYPE_DIRECT,
        power: 16000000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Saturn_VFB_Dish',
        displayName: 'Sarnus-BFBMa(76) Communications Dish',
        type: TYPE_DIRECT,
        power: 3000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Alouette_Antenna',
        displayName: 'ALTTE-TMA Sounding Antenna',
        type: TYPE_DIRECT,
        power: 125000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Helios_Dish',
        displayName: 'Sonne-MBM-LGCA Communications Array',
        type: TYPE_DIRECT,
        power: 14000000000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Gemini_DockingAntenna_Fixed',
        displayName: 'Leo-F-DGAF Docking Guidance Antenna',
        type: TYPE_DIRECT,
        power: 25000000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_LEM_Ascent_Antenna1',
        displayName: 'Sina-MEM-WCT Whip Antenna',
        type: TYPE_DIRECT,
        power: 5000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Nimbus_SBandAntenna',
        displayName: 'Aeolus-SBCA S-Band Antenna',
        type: TYPE_DIRECT,
        power: 500000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Ranger_Block2_OmniAntenna',
        displayName: 'Burke-2-61-P Omni Antenna',
        type: TYPE_DIRECT,
        power: 1000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Nimbus_BeaconAntenna',
        displayName: 'Aeolus-BATA Beacon and Telemetry Antenna',
        type: TYPE_DIRECT,
        power: 1000000,
        combinable: true,
        combinabilityExponent: 0.5
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Gemini_SolarWing',
        displayName: 'Leo-010SM Solar Antenna',
        type: TYPE_DIRECT,
        power: 250000,
        combinable: true,
        combinabilityExponent: 0.5
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Oscar1',
        displayName: 'HAMSAT 1 Radio Communications Package',
        type: TYPE_RELAY,
        power: 300000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_mariner10_lowGainAntenna',
        displayName: 'Wayfarer-10-ALA22 Omni Antenna',
        type: TYPE_DIRECT,
        power: 1000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_agenaAntenna',
        displayName: 'Belle B81 Command Antenna',
        type: TYPE_DIRECT,
        power: 500000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_MOL_rackDish',
        displayName: 'MOS-MCL Communications Dish',
        type: TYPE_DIRECT,
        power: 25000000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Gemini_LunarRecon_Antenna',
        displayName: 'Leo-MRC-A Discone Antenna',
        type: TYPE_DIRECT,
        power: 12000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_LOantenna',
        displayName: 'A23 Omni Antenna',
        type: TYPE_DIRECT,
        power: 1000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Skylab_DisconeAntenna',
        displayName: 'Hokulani-DCA Discone Antenna',
        type: TYPE_DIRECT,
        power: 2000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Pioneer6_StanfordAntenna',
        displayName: 'Pilgrim-PIO6E-SEA Communications Antenna',
        type: TYPE_DIRECT,
        power: 8000000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Apollo_Block5_HGA',
        displayName: 'Kane-11-CDA55 High Gain Antenna',
        type: TYPE_RELAY,
        power: 10000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_GATV_LBandAntenna',
        displayName: 'Belle-BA81 Command Antenna',
        type: TYPE_DIRECT,
        power: 500000,
        combinable: true,
        combinabilityExponent: 1.0
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Apollo_Block3_HGA',
        displayName: 'Kane-11-CDA33 High Gain Antenna',
        type: TYPE_RELAY,
        power: 10000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Strawman_Reaper',
        displayName: 'P770 "Reaper" Helical Antenna Array',
        type: TYPE_RELAY,
        power: 10000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Strawman_Starfish_Big_Antenna',
        displayName: 'P770 "Starfish" Relay Antenna',
        type: TYPE_RELAY,
        power: 1250000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Strawman_Starfish_Small_Antenna',
        displayName: 'P770 "Starfish Lite" Relay Antenna',
        type: TYPE_RELAY,
        power: 750000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Strawman_Harvester_Standalone_Antenna',
        displayName: 'P770 "Harvester Lite" High-Band Antenna',
        type: TYPE_RELAY,
        power: 10000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Apollo_Block2_HGA',
        displayName: 'Kane-11-CDA High Gain Antenna',
        type: TYPE_RELAY,
        power: 10000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Ranger_Dish',
        displayName: 'Burke-OVBR-1 Communications Dish',
        type: TYPE_DIRECT,
        power: 2000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_OSO_Arm',
        displayName: 'SOO-ARM Actuating Reaction Member',
        type: TYPE_DIRECT,
        power: 750000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Gemini_HorizonScanners',
        displayName: 'Leo-M-2A2 Horizon Scanner Module',
        type: TYPE_DIRECT,
        power: 500000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_LunarOrbiter_Dish',
        displayName: 'Codac-A66 Communications Dish',
        type: TYPE_DIRECT,
        power: 2000000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_solarAntenna',
        displayName: 'M17 Solar Antenna',
        type: TYPE_DIRECT,
        power: 500000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_LunarOrbiter_Antenna',
        displayName: 'Codac-A23 Omni Antenna',
        type: TYPE_DIRECT,
        power: 1000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Gemini_LunarRecon_Dish',
        displayName: 'Leo-MRC-D High Gain Dish',
        type: TYPE_DIRECT,
        power: 34000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Gemini_DockingAntenna_Rotating',
        displayName: 'Leo-F-DGA Docking Guidance Antenna',
        type: TYPE_DIRECT,
        power: 25000000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Mariner2_Solar_Antenna',
        displayName: 'Wayfarer-2-ASP Folding Solar Panel - Antenna',
        type: TYPE_DIRECT,
        power: 16000000,
        combinable: false
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_mariner10_highGainAntenna',
        displayName: 'Wayfarer-10-HGRD-22 High Gain Relay Dish',
        type: TYPE_RELAY,
        power: 15000000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Strawman_Thresher',
        displayName: 'P770 "Thresher" SIGINT Collection System',
        type: TYPE_DIRECT,
        power: 1000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Nimbus_EarlyCommandAntenna',
        displayName: 'Aeolus-ECCA RCS/Command Antenna',
        type: TYPE_DIRECT,
        power: 500000,
        combinable: true,
        combinabilityExponent: 0.5
    }),
    new Antenna({
        mod: MOD_BDB,
        name: 'bluedog_Strawman_Harvester',
        displayName: 'P770 "Harvester" High-Band Antenna',
        type: TYPE_RELAY,
        power: 20000000,
        combinable: true,
        combinabilityExponent: 0.75
    }),
]);

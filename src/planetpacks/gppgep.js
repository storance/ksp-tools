import { atmosphere, atmosphereWithOxygen, Body, Calendar, Orbit, PlanetPack } from '../utils';
import gpp from './gpp';

const Ciro = gpp.sun.clone();
const Grannus = Ciro.findByName('Grannus');
const Gael = Ciro.findByName('Gael');

// Taranis System
const Taranis = new Body({
    name: 'Taranis',
    radius: 200000,
    geeAsl: 0.2,
    highSpaceAltitude: 100000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Grannus,
        semiMajorAxis: 260000000,
        eccentricity: 0.02,
        inclination: 9,
        longitudeOfAscendingNode: 140,
        argumentOfPeriapsis: 345,
        meanAnomoloyAtEpochRad: 3.141592654
    })
});

// Nodens System
const Nodens = new Body({
    name: 'Nodens',
    radius: 700000,
    geeAsl: 1.1,
    atmosphere: atmosphereWithOxygen(72000, 18000),
    highSpaceAltitude: 350000,
    rotationalPeriod: 243000,
    orbit: new Orbit({
        parentBody: Grannus,
        semiMajorAxis: 2479975746.7868,
        eccentricity: 0.02,
        inclination: 10,
        longitudeOfAscendingNode: 155,
        argumentOfPeriapsis: 30,
        meanAnomoloyAtEpoch: 0
    })
});

const Belisama = new Body({
    name: 'Belisama',
    radius: 250000,
    geeAsl: 0.27,
    highSpaceAltitude: 125000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Nodens,
        semiMajorAxis: 19921441.0403497,
        eccentricity: 0.025,
        inclination: 9.5,
        longitudeOfAscendingNode: 135,
        argumentOfPeriapsis: 165,
        meanAnomoloyAtEpochRad: 4.875
    })
});

Nodens.satellites = [Belisama];

// Sirona System
const Sirona = new Body({
    name: 'Sirona',
    radius: 3000000,
    geeAsl: 1,
    atmosphere: atmosphere(540000, 135000),
    highSpaceAltitude: 1500000,
    rotationalPeriod: 57600,
    orbit: new Orbit({
        parentBody: Grannus,
        semiMajorAxis: 11900000000,
        eccentricity: 0.04,
        inclination: 10,
        longitudeOfAscendingNode: 150,
        argumentOfPeriapsis: 0,
        meanAnomoloyAtEpochRad: 3.141592654
    })
});

const Airmed = new Body({
    name: 'Airmed',
    radius: 160000,
    geeAsl: 0.15,
    highSpaceAltitude: 80000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Sirona,
        semiMajorAxis: 35000000,
        eccentricity: 0.01,
        inclination: 1,
        longitudeOfAscendingNode: 120,
        argumentOfPeriapsis: 90,
        meanAnomoloyAtEpoch: 0
    })
});

const Brovo = new Body({
    name: 'Brovo',
    radius: 300000,
    geeAsl: 0.35,
    atmosphere: atmosphere(72000, 18000),
    highSpaceAltitude: 150000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Sirona,
        semiMajorAxis: 70000000,
        eccentricity: 0.02,
        inclination: 0.5,
        longitudeOfAscendingNode: 150,
        argumentOfPeriapsis: 30,
        meanAnomoloyAtEpochRad: 3.141592654
    })
});

const Damona = new Body({
    name: 'Damona',
    radius: 80000,
    geeAsl: 0.06,
    highSpaceAltitude: 40000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Sirona,
        semiMajorAxis: 120000000,
        eccentricity: 0.05,
        inclination: 4,
        longitudeOfAscendingNode: 210,
        argumentOfPeriapsis: 300,
        meanAnomoloyAtEpoch: 0
    })
});

Sirona.satellites = [Airmed, Brovo, Damona];

// Epona System
const Epona = new Body({
    name: 'Epona',
    radius: 500000,
    geeAsl: 0.6,
    atmosphere: atmosphere(41000, 10000),
    highSpaceAltitude: 250000,
    rotationalPeriod: 36000,
    orbit: new Orbit({
        parentBody: Grannus,
        semiMajorAxis: 23500000000,
        eccentricity: 0.06,
        inclination: 11,
        longitudeOfAscendingNode: 145,
        argumentOfPeriapsis: 90,
        meanAnomoloyAtEpoch: 0
    })
});

const Rosmerta = new Body({
    name: 'Rosmerta',
    radius: 50000,
    geeAsl: 0.03,
    highSpaceAltitude: 20000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Epona,
        semiMajorAxis: 17000000,
        eccentricity: 0.07,
        inclination: 6,
        longitudeOfAscendingNode: 180,
        argumentOfPeriapsis: 60,
        meanAnomoloyAtEpochRad: 3.141592654
    })
});

const RAB58E = new Body({
    name: 'RAB-58E',
    radius: 10000,
    geeAsl: 0.009,
    highSpaceAltitude: 10000,
    rotationalPeriod: 14400,
    orbit: new Orbit({
        parentBody: Epona,
        semiMajorAxis: 90000000,
        eccentricity: 0.4,
        inclination: -160,
        longitudeOfAscendingNode: 225,
        argumentOfPeriapsis: 180,
        meanAnomoloyAtEpoch: 0
    })
});

Epona.satellites = [Rosmerta, RAB58E];

// Cernunnos System
const Cernunnos = new Body({
    name: 'Cernunnos',
    radius: 120000,
    geeAsl: 0.07,
    highSpaceAltitude: 60000,
    rotationalPeriod: 21600,
    orbit: new Orbit({
        parentBody: Grannus,
        semiMajorAxis: 37300000000,
        eccentricity: 0.175,
        inclination: 4,
        longitudeOfAscendingNode: 120,
        argumentOfPeriapsis: 180,
        meanAnomoloyAtEpochRad: 0.5
    })
});

Grannus.satellites = [Taranis, Nodens, Sirona, Epona, Cernunnos];

export default new PlanetPack('GPP + GEP', Ciro, Gael, gpp.calendar, gpp.rescales);
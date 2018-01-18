import gpp from './gpp';
import PlanetPack from '../planetpack.js';
import Body from '../body.js';
import Orbit from '../orbit.js';
import { toDegrees } from '../utils';

const Ciro = gpp.sun.clone();
const Grannus = Ciro.findByName('Grannus');
const Gael = Ciro.findByName('Gael');

// Taranis System
const Taranis = new Body({
    name: 'Taranis',
    radius: 200000,
    geeAsl: 0.2,
    highSpaceBorder: 100000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Grannus,
        semiMajorAxis: 260000000,
        eccentricity: 0.02,
        inclination: 9,
        longitudeOfAscendingNode: 140,
        argumentOfPeriapsis: 345,
        meanAnomoloyAtEpoch: toDegrees(3.141592654)
    })
});

// Nodens System
const Nodens = new Body({
    name: 'Nodens',
    radius: 700000,
    geeAsl: 1.1,
    atmosphereHeight: 72000,
    highSpaceBorder: 350000,
    rotationalPeriod: 239338.391437997,
    orbit: new Orbit({
        parentBody: Grannus,
        semiMajorAxis: 2455000000,
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
    highSpaceBorder: 125000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Nodens,
        semiMajorAxis: 19720812.9222333,
        eccentricity: 0.025,
        inclination: 9.5,
        longitudeOfAscendingNode: 135,
        argumentOfPeriapsis: 165,
        meanAnomoloyAtEpoch: toDegrees(5.1)
    })
});

Nodens.satellites = [Belisama];

// Sirona System
const Sirona = new Body({
    name: 'Sirona',
    radius: 3000000,
    geeAsl: 1,
    atmosphereHeight: 540000,
    highSpaceBorder: 1500000,
    rotationalPeriod: 57600,
    orbit: new Orbit({
        parentBody: Grannus,
        semiMajorAxis: 11900000000,
        eccentricity: 0.04,
        inclination: 10,
        longitudeOfAscendingNode: 150,
        argumentOfPeriapsis: 0,
        meanAnomoloyAtEpoch: toDegrees(3.141592654)
    })
});

const Airmed = new Body({
    name: 'Airmed',
    radius: 160000,
    geeAsl: 0.15,
    highSpaceBorder: 80000,
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
    atmosphereHeight: 72000,
    highSpaceBorder: 150000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Sirona,
        semiMajorAxis: 70000000,
        eccentricity: 0.02,
        inclination: 0.5,
        longitudeOfAscendingNode: 150,
        argumentOfPeriapsis: 30,
        meanAnomoloyAtEpoch: toDegrees(3.141592654)
    })
});

const Damona = new Body({
    name: 'Damona',
    radius: 80000,
    geeAsl: 0.06,
    highSpaceBorder: 40000,
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
    atmosphereHeight: 41000,
    highSpaceBorder: 250000,
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
    highSpaceBorder: 20000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Epona,
        semiMajorAxis: 17000000,
        eccentricity: 0.07,
        inclination: 6,
        longitudeOfAscendingNode: 180,
        argumentOfPeriapsis: 60,
        meanAnomoloyAtEpoch: toDegrees(3.141592654)
    })
});

const RAB58E = new Body({
    name: 'RAB-58E',
    radius: 10000,
    geeAsl: 0.005,
    highSpaceBorder: 10000,
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
    highSpaceBorder: 60000,
    rotationalPeriod: 21600,
    orbit: new Orbit({
        parentBody: Grannus,
        semiMajorAxis: 37300000000,
        eccentricity: 0.175,
        inclination: 4,
        longitudeOfAscendingNode: 120,
        argumentOfPeriapsis: 180,
        meanAnomoloyAtEpoch: toDegrees(0.5)
    })
});

Grannus.satellites = [Taranis, Nodens, Sirona, Epona, Cernunnos];

export default new PlanetPack('Galileo\'s Planet Pack + Grannus Expansion', Ciro, Gael, gpp.calendar);
import { atmosphere, atmosphereWithOxygen, Body, CalendarDefinition, Orbit, PlanetPack } from '../utils';
import { allRescales } from './rescale';

const Kerbol = new Body({
    name: 'Sun',
    radius: 261600000,
    mass: 1.7565459e28,
    highSpaceAltitude: 1000000000,
    atmosphere: atmosphere(600000, 18000),
    rotationalPeriod: 432000
});

// Moho System
const Moho = new Body({
    name: 'Moho',
    radius: 250000,
    mass: 2.5263314e21, 
    highSpaceAltitude: 80000,
    rotationalPeriod:  1210000,
    orbit: new Orbit({
        parentBody: Kerbol,
        semiMajorAxis: 5263138304,
        eccentricity: 0.2,
        inclination: 7,
        longitudeOfAscendingNode: 70,
        argumentOfPeriapsis: 15,
        meanAnomoloyAtEpoch: 180
    })
});

// Eve System
const Eve = new Body({
    name: 'Eve',
    radius: 700000,
    mass: 1.2243980e23,
    atmosphere: atmosphere(90000, 22000),
    highSpaceAltitude: 400000,
    rotationalPeriod: 80500,
    orbit: new Orbit({
        parentBody: Kerbol,
        semiMajorAxis: 9832684544,
        eccentricity: 0.01,
        inclination: 2.1,
        longitudeOfAscendingNode: 15,
        argumentOfPeriapsis: 0,
        meanAnomoloyAtEpoch: 180
    })
});
const Gilly = new Body({
    name: 'Gilly',
    radius: 13000,
    mass: 1.2420363e17,
    highSpaceAltitude: 6000,
    rotationalPeriod: 28255,
    orbit: new Orbit({
        parentBody: Eve,
        semiMajorAxis: 31500000 ,
        eccentricity: 0.55,
        inclination: 12,
        longitudeOfAscendingNode: 80,
        argumentOfPeriapsis: 10,
        meanAnomoloyAtEpoch: 51.6
    })
});
Eve.satellites = [Gilly];

// Kerbin System
const Kerbin = new Body({
    name: 'Kerbin',
    radius: 600000,
    mass: 5.2915158e22,
    atmosphere: atmosphereWithOxygen(70000, 18000),
    highSpaceAltitude: 250000,
    rotationalPeriod: 21549.425, 
    orbit: new Orbit({
        parentBody: Kerbol,
        semiMajorAxis: 13599840256,
        eccentricity: 0,
        inclination: 0,
        longitudeOfAscendingNode: 0,
        argumentOfPeriapsis: 0,
        meanAnomoloyAtEpoch: 180
    })
});
const Mun = new Body({
    name: 'Mun',
    radius: 200000,
    mass: 9.7599066e20, 
    highSpaceAltitude: 60000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Kerbin,
        semiMajorAxis: 12000000,
        eccentricity: 0,
        inclination: 0,
        longitudeOfAscendingNode: 0,
        argumentOfPeriapsis: 0,
        meanAnomoloyAtEpoch: 97.4
    })
});
const Minmus = new Body({
    name: 'Minmus',
    radius: 60000,
    mass: 2.6457580e19,
    highSpaceAltitude: 30000,
    rotationalPeriod: 40400,
    orbit: new Orbit({
        parentBody: Kerbin,
        semiMajorAxis: 47000000,
        eccentricity: 0,
        inclination: 6,
        longitudeOfAscendingNode: 78,
        argumentOfPeriapsis: 38,
        meanAnomoloyAtEpoch: 51.6
    })
});
Kerbin.satellites = [Mun, Minmus];

// Duna System
const Duna = new Body({
    name: 'Duna',
    radius: 320000,
    mass: 4.5154270e21,
    atmosphere: atmosphere(50000, 12000),
    highSpaceAltitude: 140000,
    rotationalPeriod: 65517.859,
    orbit: new Orbit({
        parentBody: Kerbol,
        semiMajorAxis: 20726155264,
        eccentricity: 0.051,
        inclination: 0.06,
        longitudeOfAscendingNode: 135.5,
        argumentOfPeriapsis: 0,
        meanAnomoloyAtEpoch: 180
    })
});
const Ike = new Body({
    name: 'Ike',
    radius: 130000,
    mass: 2.7821615e20, 
    highSpaceAltitude: 50000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Duna,
        semiMajorAxis: 3200000,
        eccentricity: 0.03,
        inclination: 0.2,
        longitudeOfAscendingNode: 0,
        argumentOfPeriapsis: 0,
        meanAnomoloyAtEpoch: 97.4
    })
});
Duna.satellites = [Ike];

// Dres System
const Dres = new Body({
    name: 'Dres',
    radius: 138000,
    mass: 3.2190937e20,
    highSpaceAltitude: 25000,
    rotationalPeriod: 34800,
    orbit: new Orbit({
        parentBody: Kerbol,
        semiMajorAxis: 40839348203,
        eccentricity: 0.145,
        inclination: 5,
        longitudeOfAscendingNode: 280,
        argumentOfPeriapsis: 90,
        meanAnomoloyAtEpoch: 180
    })
});

// Jool System
const Jool = new Body({
    name: 'Jool',
    radius: 6000000,
    mass: 4.2332127e24,
    atmosphere: atmosphere(200000, 120000),
    highSpaceAltitude: 4000000,
    rotationalPeriod: 36000,
    orbit: new Orbit({
        parentBody: Kerbol,
        semiMajorAxis: 68773560320,
        eccentricity: 0.05,
        inclination: 1.304,
        longitudeOfAscendingNode: 52,
        argumentOfPeriapsis: 0,
        meanAnomoloyAtEpoch: 5.7
    })
});
const Laythe = new Body({
    name: 'Laythe',
    radius: 500000,
    mass: 2.9397311e22,
    atmosphere: atmosphereWithOxygen(50000, 10000),
    highSpaceAltitude: 200000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Jool,
        semiMajorAxis: 27184000,
        eccentricity: 0,
        inclination: 0,
        longitudeOfAscendingNode: 0,
        argumentOfPeriapsis: 0,
        meanAnomoloyAtEpoch: 180
    })
});
const Vall = new Body({
    name: 'Vall',
    radius: 300000,
    mass: 3.1087655e21, 
    highSpaceAltitude: 90000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Jool,
        semiMajorAxis: 43152000,
        eccentricity: 0,
        inclination: 0,
        longitudeOfAscendingNode: 0,
        argumentOfPeriapsis: 0,
        meanAnomoloyAtEpoch: 51.6
    })
});
const Tylo = new Body({
    name: 'Tylo',
    radius: 600000,
    mass: 4.2332127e22, 
    highSpaceAltitude: 250000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Jool,
        semiMajorAxis: 68500000,
        eccentricity: 0,
        inclination: 0.025,
        longitudeOfAscendingNode: 0,
        argumentOfPeriapsis: 0,
        meanAnomoloyAtEpoch: 180
    })
});
const Bop = new Body({
    name: 'Bop',
    radius: 65000,
    mass: 3.7261090e19,
    highSpaceAltitude: 25000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Jool,
        semiMajorAxis: 128500000,
        eccentricity: 0.235,
        inclination: 15,
        longitudeOfAscendingNode: 10,
        argumentOfPeriapsis: 25,
        meanAnomoloyAtEpoch: 51.6
    })
});
const Pol = new Body({
    name: 'Pol',
    radius: 44000,
    mass: 1.0813507e19,
    highSpaceAltitude: 22000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Jool,
        semiMajorAxis: 179890000,
        eccentricity: 0.171,
        inclination: 4.25,
        longitudeOfAscendingNode: 2,
        argumentOfPeriapsis: 15,
        meanAnomoloyAtEpoch: 51.6
    })
});
Jool.satellites = [Laythe, Vall, Tylo, Bop,  Pol];

// Eeloo System
const Eeloo = new Body({
    name: 'Eeloo',
    radius: 210000,
    mass: 1.1149224e21,
    highSpaceAltitude: 60000,
    rotationalPeriod: 19460,
    orbit: new Orbit({
        parentBody: Kerbol,
        semiMajorAxis: 90118820000,
        eccentricity: 0.26,
        inclination: 6.15,
        longitudeOfAscendingNode: 50,
        argumentOfPeriapsis: 260,
        meanAnomoloyAtEpoch: 180
    })
});

Kerbol.satellites = [Moho, Eve, Kerbin, Duna, Dres, Jool, Eeloo];

export default new PlanetPack('Stock', Kerbol, Kerbin, new CalendarDefinition({customDay: 21600, customYear: 9201600}), allRescales);
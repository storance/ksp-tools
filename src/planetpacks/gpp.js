import {atmosphere, atmosphereWithOxygen, Body, CalendarDefinition, Orbit, PlanetPack} from '../utils';
import { allRescales}  from './rescale';

const Ciro = new Body({
    name: 'Ciro',
    radius: 70980000,
    mass: 1.91001413387e28,
    //atmosphere: atmosphere(1600000, 800000),
    highSpaceAltitude: 1e9,
    rotationalPeriod: 540000
});

// Icarus System
const Icarus = new Body({
    name: 'Icarus',
    radius: 160000,
    geeAsl: 1.6,
    highSpaceAltitude: 80000,
    rotationalPeriod: 766931.065512794,
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 3496090000,
        eccentricity: 0.1,
        inclination: 6,
        longitudeOfAscendingNode: 50,
        argumentOfPeriapsis: 340,
        meanAnomoloyAtEpochRad: 4.7
    })
});

// Thalia System
const Thalia = new Body({
    name: 'Thalia',
    radius: 270000,
    geeAsl: 0.3,
    highSpaceAltitude: 135000,
    rotationalPeriod: 72000,
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 6992180000,
        eccentricity: 0.10,
        inclination: 3,
        longitudeOfAscendingNode: 80,
        argumentOfPeriapsis: 10,
        meanAnomoloyAtEpochRad: 1.2
    })
});
const Eta = new Body({
    name: 'Eta',
    radius: 60000,
    geeAsl: 0.5,
    highSpaceAltitude: 30000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Thalia,
        semiMajorAxis: 11300000,
        eccentricity: 0.06,
        inclination: 2,
        longitudeOfAscendingNode: 180,
        argumentOfPeriapsis: 350,
        meanAnomoloyAtEpochRad: 4.71
    })
});
Thalia.satellites = [Eta];

// Niven System
const Niven = new Body({
    name: 'Niven',
    radius: 400000,
    geeAsl: 0.5,
    atmosphere: atmosphere(65000, 16000),
    highSpaceAltitude: 200000,
    rotationalPeriod: 43200,
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 10488300000,
        eccentricity: 0.03,
        inclination: 1,
        longitudeOfAscendingNode: 60,
        argumentOfPeriapsis: 0,
        meanAnomoloyAtEpochRad: 3.25
    })
});

// Gael System
const Gael = new Body({
    name: 'Gael',
    radius: 600000,
    geeAsl: 1.0,
    atmosphere: atmosphereWithOxygen(70000, 18000),
    highSpaceAltitude: 300000,
    rotationalPeriod: 21600,
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 13982766706.4122,
        eccentricity: 0,
        inclination: 0,
        longitudeOfAscendingNode: 90,
        argumentOfPeriapsis: 300,
        meanAnomoloyAtEpoch: 0
    })
});
const Iota = new Body({
    name: 'Iota',
    radius: 100000,
    geeAsl: 0.085,
    highSpaceAltitude: 50000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Gael,
        semiMajorAxis: 28000000,
        eccentricity: 0,
        inclination: 0,
        longitudeOfAscendingNode: 90,
        argumentOfPeriapsis: 300,
        meanAnomoloyAtEpoch: 97.4028279043159
    })
});
const Ceti = new Body({
    name: 'Ceti',
    radius: 150000,
    geeAsl: 0.135,
    highSpaceAltitude: 75000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Gael,
        semiMajorAxis: 55000000,
        eccentricity: 0.05,
        inclination: 9,
        longitudeOfAscendingNode: 90,
        argumentOfPeriapsis: 300,
        meanAnomoloyAtEpochRad: 3.14
    })
});
Gael.satellites = [Iota, Ceti];

// Tellumo System
const Tellumo = new Body({
    name: 'Tellumo',
    radius: 1000000,
    geeAsl: 1.6,
    atmosphere: atmosphereWithOxygen(45000, 11000),
    highSpaceAltitude: 500000,
    rotationalPeriod: 57600,
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 22375000000,
        eccentricity: 0.02,
        inclination: 1.5,
        longitudeOfAscendingNode: 70,
        argumentOfPeriapsis: 20,
        meanAnomoloyAtEpochRad: 2.3
    })
});

const Lili = new Body({
    name: 'Lili',
    radius: 7000,
    geeAsl: 0.015,
    highSpaceAltitude: 10000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Tellumo,
        semiMajorAxis: 1455000,
        eccentricity: 0,
        inclination: 0,
        longitudeOfAscendingNode: 0,
        argumentOfPeriapsis: 0,
        meanAnomoloyAtEpochRad: 0
    })
});

Tellumo.satellites = [Lili];

// Gratian System
const Gratian = new Body({
    name:'Gratian',
    radius: 550000,
    geeAsl: 0.75,
    atmosphere: atmosphere(50000, 13000),
    highSpaceAltitude: 275000,
    rotationalPeriod: 139245.781338531,
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 39156200000,
        eccentricity: 0.06,
        inclination: 2,
        longitudeOfAscendingNode: 100,
        argumentOfPeriapsis: 50,
        meanAnomoloyAtEpochRad: 3.9
    })
});
const Geminus = new Body({
    name: 'Geminus',
    radius: 230000,
    geeAsl: 0.22,
    highSpaceAltitude: 115000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Gratian,
        semiMajorAxis: 10300000,
        eccentricity: 0.025,
        inclination: 3,
        longitudeOfAscendingNode: 60,
        argumentOfPeriapsis: 30,
        meanAnomoloyAtEpochRad: 1.57
    })
});
Gratian.satellites = [Geminus];

// Otho System
const Otho = new Body({
    name: 'Otho',
    radius: 3500000,
    geeAsl: 0.92,
    atmosphere: atmosphere(600000, 300000),
    highSpaceAltitude: 1750000,
    rotationalPeriod: 50400, 
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 72718700000,
        eccentricity: 0.04,
        inclination: 1.5,
        longitudeOfAscendingNode: 80,
        argumentOfPeriapsis: 40,
        meanAnomoloyAtEpoch: 0
    })
});
const Augustus = new Body({
    name: 'Augustus',
    radius: 350000,
    geeAsl: 0.35,
    atmosphere: atmosphere(60000, 15000),
    highSpaceAltitude: 175000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Otho,
        semiMajorAxis: 20000000,
        eccentricity: 0.005,
        inclination: 1,
        longitudeOfAscendingNode: 60,
        argumentOfPeriapsis: 60,
        meanAnomoloyAtEpoch: 0
    })
});
const Hephaestus = new Body({
    name: 'Hephaestus',
    radius: 125000,
    geeAsl: 0.08,
    highSpaceAltitude: 62500,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Otho,
        semiMajorAxis: 32000000,
        eccentricity: 0.01,
        inclination: 0.5,
        longitudeOfAscendingNode: 100,
        argumentOfPeriapsis: 350,
        meanAnomoloyAtEpochRad: 1.57
    })
});
const Jannah = new Body({
    name: 'Jannah',
    radius: 105000,
    geeAsl: 0.065,
    highSpaceAltitude: 52500,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Otho,
        semiMajorAxis: 65000000,
        eccentricity: 0.0075,
        inclination: 6,
        longitudeOfAscendingNode: 80,
        argumentOfPeriapsis: 70,
        meanAnomoloyAtEpochRad: 3.14
    })
});
Otho.satellites = [Augustus, Hephaestus, Jannah];

// Gauss System
const Gauss = new Body({
    name: 'Gauss',
    radius: 2500000,
    geeAsl: 1.03,
    atmosphere: atmosphere(400000, 200000),
    highSpaceAltitude: 1250000,
    rotationalPeriod: 61200,
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 139844000000,
        eccentricity: 0.03,
        inclination: 2,
        longitudeOfAscendingNode: 110,
        argumentOfPeriapsis: 340,
        meanAnomoloyAtEpochRad: 2.5
    })
});
const Loki = new Body({
    name: 'Loki',
    radius: 180000,
    geeAsl: 0.1,
    highSpaceAltitude: 90000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Gauss,
        semiMajorAxis: 18500000,
        eccentricity: 0.02,
        inclination: 4,
        longitudeOfAscendingNode: 130,
        argumentOfPeriapsis: 300,
        meanAnomoloyAtEpoch: 0
    })
});
const Catullus = new Body({
    name: 'Catullus',
    radius: 1200000,
    geeAsl: 0.9,
    atmosphere: atmosphere(280000, 70000),
    highSpaceAltitude: 600000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Gauss,
        semiMajorAxis: 57000000,
        eccentricity: 0,
        inclination: 1,
        longitudeOfAscendingNode: 90,
        argumentOfPeriapsis: 20,
        meanAnomoloyAtEpochRad: 3.14
    })
});
const Tarsiss = new Body({
    name: 'Tarsiss',
    radius: 320000,
    geeAsl: 0.17,
    atmosphere: atmosphere(130000, 33000),
    highSpaceAltitude: 160000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Gauss,
        semiMajorAxis: 6000000,
        eccentricity: 0,
        inclination: 0,
        longitudeOfAscendingNode: 90,
        argumentOfPeriapsis: 20,
        meanAnomoloyAtEpochRad: 1.57
    })
});
Catullus.satellites = [Tarsiss];
Gauss.satellites = [Loki, Catullus];

// Nero System
const Nero = new Body({
    name: 'Nero',
    radius: 5000000,
    geeAsl: 0.97,
    atmosphere: atmosphere(560000, 280000),
    highSpaceAltitude: 2500000,
    rotationalPeriod: 39600,
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 274093000000,
        eccentricity: 0.035,
        inclination: 1,
        longitudeOfAscendingNode: 90,
        argumentOfPeriapsis: 60,
        meanAnomoloyAtEpochRad: 2.5
    })
});
const Hadrian = new Body({
    name: 'Hadrian',
    radius: 300000,
    geeAsl: 0.18,
    atmosphere: atmosphere(80000, 20000),
    highSpaceAltitude: 150000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Nero,
        semiMajorAxis: 30000000,
        eccentricity: 0.01,
        inclination: 10,
        longitudeOfAscendingNode: 357,
        argumentOfPeriapsis: 145,
        meanAnomoloyAtEpoch: 0
    })
});
const Narisse = new Body({
    name: 'Narisse',
    radius: 90000,
    geeAsl: 0.04,
    highSpaceAltitude: 45000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Nero,
        semiMajorAxis: 48000000,
        eccentricity: 0.015,
        inclination: 10.85,
        longitudeOfAscendingNode: 3,
        argumentOfPeriapsis: 115,
        meanAnomoloyAtEpochRad: 3.14
    })
});
const Muse = new Body({
    name: 'Muse',
    radius: 130000,
    geeAsl: 0.08,
    highSpaceAltitude: 65000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Nero,
        semiMajorAxis: 80000000,
        eccentricity: 0.005,
        inclination: 10.25,
        longitudeOfAscendingNode: 0,
        argumentOfPeriapsis: 180,
        meanAnomoloyAtEpochRad: 1.57
    })
});
const Minona = new Body({
    name: 'Minona',
    radius: 120000,
    geeAsl: 0.06,
    highSpaceAltitude: 60000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Nero,
        semiMajorAxis: 135000000,
        eccentricity: 0.02,
        inclination: 11,
        longitudeOfAscendingNode: 6,
        argumentOfPeriapsis: 155,
        meanAnomoloyAtEpochRad: 4.71
    })
});
const Agrippina = new Body({
    name: 'Agrippina',
    radius: 50000,
    geeAsl: 0.03,
    highSpaceAltitude: 25000,
    rotationalPeriod: 28800,
    orbit: new Orbit({
        parentBody: Nero,
        semiMajorAxis: 800000000,
        eccentricity: 0.16,
        inclination: 18,
        longitudeOfAscendingNode: 150,
        argumentOfPeriapsis: 60,
        meanAnomoloyAtEpoch: 0
    })
});
const Julia = new Body({
    name: 'Julia',
    radius: 30000,
    geeAsl: 0.015,
    highSpaceAltitude: 15000,
    rotationalPeriod: 36000,
    orbit: new Orbit({
        parentBody: Nero,
        semiMajorAxis: 1625000000,
        eccentricity: 0.28,
        inclination: 170,
        longitudeOfAscendingNode: 0,
        argumentOfPeriapsis: 60,
        meanAnomoloyAtEpochRad: 3.14
    })
});
Nero.satellites = [Hadrian, Narisse, Muse, Minona, Agrippina, Julia];

// Gox System
const Hox = new Body({
    name: 'Hox',
    radius: 250000,
    geeAsl: 0.14,
    atmosphereHeight: atmosphere(40000, 10000),
    highSpaceAltitude: 125000,
    rotationalPeriod: 64800,
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 139844000000,
        eccentricity: 0.03,
        inclination: 2,
        longitudeOfAscendingNode: 120,
        argumentOfPeriapsis: 90,
        meanAnomoloyAtEpochRad: 4.7
    })
});
const Argo = new Body({
    name: 'Argo',
    radius: 80000,
    geeAsl: 0.035,
    highSpaceAltitude: 40000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Hox,
        semiMajorAxis: 12500000,
        eccentricity: 0,
        inclination: 40,
        longitudeOfAscendingNode: 90,
        argumentOfPeriapsis: 90,
        meanAnomoloyAtEpoch: 0
    })
});
Hox.satellites = [Argo];

// Leto System
const Leto = new Body({
    name: 'Leto',
    radius: 210000,
    geeAsl: 0.12,
    atmosphere: atmosphere(35000, 9000),
    highSpaceAltitude: 105000,
    rotationalPeriod: 21600,
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 542593000000,
        eccentricity: 0.1,
        inclination: 10,
        longitudeOfAscendingNode: 100,
        argumentOfPeriapsis: 80,
        meanAnomoloyAtEpoch: 0
    })
});

// Grannus System
const Grannus = new Body({
    name: 'Grannus',
    radius: 30170000,
    geeAsl: 71.4,
    atmosphere: atmosphere(400000, 200000),
    highSpaceAltitude: 50000000000,
    rotationalPeriod: 1296000,
    sphereOfInfluence: 500000000000,
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 2000000000000,
        eccentricity: 0.4,
        inclination: 7,
        longitudeOfAscendingNode: 130,
        argumentOfPeriapsis: 20,
        meanAnomoloyAtEpochRad: -0.274
    })
});

Ciro.satellites = [Icarus, Thalia, Niven, Gael, Tellumo, Gratian, Otho, Gauss, Nero, Hox, Leto, Grannus];

export default new PlanetPack('GPP', Ciro, Gael, new CalendarDefinition({customDay: 21600, customYear: 9201600}), allRescales);
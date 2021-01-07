import Body from '../body.js';
import Orbit from '../orbit.js';
import PlanetPack from '../planetpack.js';
import Calendar from '../calendar.js';

const Kerbol = new Body({
    name: 'Sun',
    radius: 175750000,
    geeAsl: 27.7,
    highSpaceBorder: 3e9,
    rotationalPeriod: 1080000
});

// Moho System
const Moho = new Body({
    name: 'Moho',
    radius: 650000,
    geeAsl: 0.29,
    highSpaceBorder: 325000,
    rotationalPeriod:  2530758.15664,
    orbit: new Orbit({
        parentBody: Kerbol,
        semiMajorAxis: 14522400000,
        eccentricity: 0.2,
        inclination: 7,
        longitudeOfAscendingNode: 70,
        argumentOfPeriapsis: 15,
        meanAnomoloyAtEpochRad: 0
    })
});

// Eve System
const Eve = new Body({
    name: 'Eve',
    radius: 2050000,
    geeAsl: 1.4,
    atmosphereHeight: 60000,
    flyingHighAltitude: 27000,
    highSpaceBorder: 1025000,
    rotationalPeriod: 81000,
    orbit: new Orbit({
        parentBody: Kerbol,
        semiMajorAxis: 27131000000,
        eccentricity: 0.01,
        inclination: 2.1,
        longitudeOfAscendingNode: 15,
        argumentOfPeriapsis: 45,
        meanAnomoloyAtEpochRad: 5.7
    })
});
const Gilly = new Body({
    name: 'Gilly',
    radius: 30000,
    geeAsl: 0.0075,
    highSpaceBorder: 30000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Eve,
        semiMajorAxis: 86920000,
        eccentricity: 0.55,
        inclination: 12,
        longitudeOfAscendingNode: 80,
        argumentOfPeriapsis: 10,
        meanAnomoloyAtEpochRad: 0
    })
});
Eve.satellites = [Gilly];

// Kerbin System
const Kerbin = new Body({
    name: 'Kerbin',
    radius: 1600000,
    geeAsl: 1,
    atmosphereHeight: 85000,
    flyingHighAltitude: 21000,
    hasOxygen: true,
    highSpaceBorder: 800000,
    rotationalPeriod: 43200, 
    orbit: new Orbit({
        parentBody: Kerbol,
        semiMajorAxis: 37525647898.4324,
        eccentricity: 0.02,
        inclination: 0,
        longitudeOfAscendingNode: 0,
        argumentOfPeriapsis: 0,
        meanAnomoloyAtEpochRad: 0
    })
});
const Mun = new Body({
    name: 'Mun',
    radius: 400000,
    geeAsl: 0.145,
    highSpaceBorder: 200000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Kerbin,
        semiMajorAxis: 90960000,
        eccentricity: 0.005,
        inclination: 0.5,
        longitudeOfAscendingNode: 45,
        argumentOfPeriapsis: 165,
        meanAnomoloyAtEpochRad: 0
    })
});
const Minmus = new Body({
    name: 'Minmus',
    radius: 160000,
    geeAsl: 0.05,
    highSpaceBorder: 80000,
    rotationalPeriod: 160000,
    orbit: new Orbit({
        parentBody: Kerbin,
        semiMajorAxis: 146970000,
        eccentricity: 0.03,
        inclination: 6,
        longitudeOfAscendingNode: 75,
        argumentOfPeriapsis: 315,
        meanAnomoloyAtEpoch: 30
    })
});
Kerbin.satellites = [Mun, Minmus];

// Duna System
const Duna = new Body({
    name: 'Duna',
    radius: 800000,
    geeAsl: 0.34,
    atmosphereHeight: 70000,
    flyingHighAltitude: 10000,
    highSpaceBorder: 400000,
    rotationalPeriod: 50400,
    orbit: new Orbit({
        parentBody: Kerbol,
        semiMajorAxis: 57189100000,
        eccentricity: 0.051,
        inclination: 0.06,
        longitudeOfAscendingNode: 135.5,
        argumentOfPeriapsis: 345,
        meanAnomoloyAtEpochRad: 0.9
    })
});
const Ike = new Body({
    name: 'Ike',
    radius: 210000,
    geeAsl: 0.06, 
    highSpaceBorder: 105000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Duna,
        semiMajorAxis: 36680000,
        eccentricity: 0.03,
        inclination: 0.2,
        longitudeOfAscendingNode: 90,
        argumentOfPeriapsis: 345,
        meanAnomoloyAtEpoch: 180
    })
});
Duna.satellites = [Ike];

// Edna System
const Edna = new Body({
    name: 'Edna',
    radius: 260000,
    geeAsl: 0.15,
    highSpaceBorder: 130000,
    rotationalPeriod: 10800,
    orbit: new Orbit({
        parentBody: Kerbol,
        semiMajorAxis: 94080000000,
        eccentricity: 0.07,
        inclination: 3,
        longitudeOfAscendingNode: 30,
        argumentOfPeriapsis: 310,
        meanAnomoloyAtEpochRad: 0
    })
});

const Dak = new Body({
    name: 'Dak',
    radius: 20000,
    geeAsl: 0.008,
    highSpaceBorder: 15000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Edna,
        semiMajorAxis: 4770000,
        eccentricity: 0.01,
        inclination: 10,
        longitudeOfAscendingNode: 120,
        argumentOfPeriapsis: 90,
        meanAnomoloyAtEpochRad: 0
    })
});

Edna.satellites = [Dak];

// Dres System
const Dres = new Body({
    name: 'Dres',
    radius: 360000,
    geeAsl: 0.12,
    highSpaceBorder: 180000,
    rotationalPeriod: 16200,
    orbit: new Orbit({
        parentBody: Kerbol,
        semiMajorAxis: 112687000000,
        eccentricity: 0.145,
        inclination: 5,
        longitudeOfAscendingNode: 280,
        argumentOfPeriapsis: 90,
        meanAnomoloyAtEpochRad: 3.9
    })
});

// Jool System
const Jool = new Body({
    name: 'Jool',
    radius: 14000000,
    geeAsl: 1.04,
    atmosphereHeight: 700000,
    flyingHighAltitude: 285000,
    highSpaceBorder: 7000000,
    rotationalPeriod: 19800,
    orbit: new Orbit({
        parentBody: Kerbol,
        semiMajorAxis: 189765000000,
        eccentricity: 0.05,
        inclination: 1.304,
        longitudeOfAscendingNode: 52,
        argumentOfPeriapsis: 30,
        meanAnomoloyAtEpochRad: 0.6
    })
});
const Laythe = new Body({
    name: 'Laythe',
    radius: 1100000,
    geeAsl: 0.58,
    atmosphereHeight: 75000,
    hasOxygen: true,
    flyingHighAltitude: 23000,
    highSpaceBorder: 200000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Jool,
        semiMajorAxis: 87640000,
        eccentricity: 0.01,
        inclination: 0.2,
        longitudeOfAscendingNode: 120,
        argumentOfPeriapsis: 120,
        meanAnomoloyAtEpoch: 180
    })
});
const Vall = new Body({
    name: 'Vall',
    radius: 550000,
    geeAsl: 0.18, 
    highSpaceBorder: 275000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Jool,
        semiMajorAxis: 160230000,
        eccentricity: 0.03,
        inclination: 0.3,
        longitudeOfAscendingNode: 90,
        argumentOfPeriapsis: 270,
        meanAnomoloyAtEpoch: 180
    })
});
const Tylo = new Body({
    name: 'Tylo',
    radius: 900000,
    geeAsl: 0.32, 
    atmosphereHeight: 85000,
    flyingHighAltitude: 11000,
    highSpaceBorder: 450000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Jool,
        semiMajorAxis: 292950000,
        eccentricity: 0.01,
        inclination: 0.1,
        longitudeOfAscendingNode: 150,
        argumentOfPeriapsis: 285,
        meanAnomoloyAtEpoch: 270
    })
});
const Bop = new Body({
    name: 'Bop',
    radius: 190000,
    geeAsl: 0.05,
    highSpaceBorder: 95000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Jool,
        semiMajorAxis: 582970000,
        eccentricity: 0.235,
        inclination: 15,
        longitudeOfAscendingNode: 10,
        argumentOfPeriapsis: 25,
        meanAnomoloyAtEpoch: 270
    })
});
const Pol = new Body({
    name: 'Pol',
    radius: 130000,
    geeAsl: 0.03,
    highSpaceBorder: 65000,
    rotationalPeriod: 130000,
    orbit: new Orbit({
        parentBody: Jool,
        semiMajorAxis: 739460000,
        eccentricity: 0.17085,
        inclination: 4.25,
        longitudeOfAscendingNode: 2,
        argumentOfPeriapsis: 15,
        meanAnomoloyAtEpochRad: 1.8
    })
});
Jool.satellites = [Laythe, Vall, Tylo, Bop,  Pol];

// Lindor System
const Lindor = new Body({
    name: 'Lindor',
    radius: 8000000,
    geeAsl: 0.94,
    atmosphereHeight: 540000,
    flyingHighAltitude: 230000,
    highSpaceBorder: 4000000,
    rotationalPeriod: 25200,
    orbit: new Orbit({
        parentBody: Kerbol,
        semiMajorAxis: 359571000000,
        eccentricity: 0.03,
        inclination: 1.7,
        longitudeOfAscendingNode: 80,
        argumentOfPeriapsis: 75,
        meanAnomoloyAtEpochRad: 3.3
    })
});
const Krel = new Body({
    name: 'Krel',
    radius: 150000,
    geeAsl: 0.03,
    highSpaceBorder: 75000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Lindor,
        semiMajorAxis: 58600000,
        eccentricity: 0.02,
        inclination: 1.5,
        longitudeOfAscendingNode: 60,
        argumentOfPeriapsis: 180,
        meanAnomoloyAtEpochRad: 0
    })
});
const Aden = new Body({
    name: 'Aden',
    radius: 300000,
    geeAsl: 0.07,
    highSpaceBorder: 150000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Lindor,
        semiMajorAxis: 107140000,
        eccentricity: 0.01,
        inclination: 0.25,
        longitudeOfAscendingNode: 120,
        argumentOfPeriapsis: 30,
        meanAnomoloyAtEpochRad: 270
    })
});
const Huygen = new Body({
    name: 'Huygen',
    radius: 670000,
    geeAsl: 0.15,
    atmosphereHeight: 180000,
    flyingHighAltitude: 75000,
    highSpaceBorder: 335000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Lindor,
        semiMajorAxis: 187500000,
        eccentricity: 0.025,
        inclination: 0.75,
        longitudeOfAscendingNode: 150,
        argumentOfPeriapsis: 60,
        meanAnomoloyAtEpoch: 90
    })
});
const Riga = new Body({
    name: 'Riga',
    radius: 750000,
    geeAsl: 0.18,
    atmosphereHeight: 90000,
    flyingHighAltitude: 10000,
    highSpaceBorder: 375000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Lindor,
        semiMajorAxis: 309380000,
        eccentricity: 0.03,
        inclination: 0.5,
        longitudeOfAscendingNode: 90,
        argumentOfPeriapsis: 105,
        meanAnomoloyAtEpoch: 180
    })
});
const Talos = new Body({
    name: 'Talos',
    radius: 500000,
    geeAsl: 0.11,
    highSpaceBorder: 250000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Lindor,
        semiMajorAxis: 575680000,
        eccentricity: 0.04,
        inclination: 1,
        longitudeOfAscendingNode: 180,
        argumentOfPeriapsis: 285,
        meanAnomoloyAtEpoch: 90
    })
});

Lindor.satellites = [Krel, Aden, Huygen, Riga, Talos]

// Eeloo System
const Eeloo = new Body({
    name: 'Eeloo',
    radius: 600000,
    geeAsl: 0.15,
    atmosphereHeight: 80000,
    flyingHighAltitude: 10000,
    highSpaceBorder: 300000,
    rotationalPeriod: 14400,
    orbit: new Orbit({
        parentBody: Kerbol,
        semiMajorAxis: 471171300000,
        eccentricity: 0.26,
        inclination: 6.15,
        longitudeOfAscendingNode: 50,
        argumentOfPeriapsis: 260,
        meanAnomoloyAtEpochRad: 3.54
    })
});
const Celes = new Body({
    name: 'Celes',
    radius: 200000,
    geeAsl: 0.04,
    highSpaceBorder: 100000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Eeloo,
        semiMajorAxis: 31800000,
        eccentricity: 0.05,
        inclination: 10,
        longitudeOfAscendingNode: 100,
        argumentOfPeriapsis: 270,
        meanAnomoloyAtEpoch: 0
    })
});
const Tam = new Body({
    name: 'Tam',
    radius: 10000,
    geeAsl: 0.0035,
    highSpaceBorder: 10000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Eeloo,
        semiMajorAxis: 64670000,
        eccentricity: 0.025,
        inclination: 9.5,
        longitudeOfAscendingNode: 105,
        argumentOfPeriapsis: 210,
        meanAnomoloyAtEpoch: 180
    })
});
Eeloo.satellites = [Celes, Tam]

// Hamek System
const Hamek = new Body({
    name: 'Hamek',
    radius: 450000,
    geeAsl: 0.1,
    highSpaceBorder: 225000,
    rotationalPeriod: 14400,
    orbit: new Orbit({
        parentBody: Kerbol,
        semiMajorAxis: 527129000000,
        eccentricity: 0.1,
        inclination: 4,
        longitudeOfAscendingNode: 165,
        argumentOfPeriapsis: 175,
        meanAnomoloyAtEpochRad: 4.7
    })
});

// Nara System
const Nara = new Body({
    name: 'Nara',
    radius: 3600000,
    geeAsl: 1,
    atmosphereHeight: 200000,
    flyingHighAltitude: 85000,
    highSpaceBorder: 1800000,
    rotationalPeriod: 43200,
    orbit: new Orbit({
        parentBody: Kerbol,
        semiMajorAxis: 1712000000000,
        eccentricity: 0.35,
        inclination: 20,
        longitudeOfAscendingNode: 90,
        argumentOfPeriapsis: 150,
        meanAnomoloyAtEpochRad: 2.5
    })
});
const Amos = new Body({
    name: 'Amos',
    radius: 320000,
    geeAsl: 0.06,
    highSpaceBorder: 160000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Nara,
        semiMajorAxis: 55880000,
        eccentricity: 0.01,
        inclination: 0.5,
        longitudeOfAscendingNode: 180,
        argumentOfPeriapsis: 345,
        meanAnomoloyAtEpoch: 180
    })
});
const Enon = new Body({
    name: 'Enon',
    radius: 700000,
    geeAsl: 0.15,
    highSpaceBorder: 350000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Nara,
        semiMajorAxis: 125980000,
        eccentricity: 0.015,
        inclination: 0.2,
        longitudeOfAscendingNode: 270,
        argumentOfPeriapsis: 0,
        meanAnomoloyAtEpoch: 180
    })
});
const Prax = new Body({
    name: 'Prax',
    radius: 110000,
    geeAsl: 0.02,
    highSpaceBorder: 55000,
    rotationalPeriod: 21600,
    orbit: new Orbit({
        parentBody: Nara,
        semiMajorAxis: 751900000,
        eccentricity: 0.4,
        inclination: 17,
        longitudeOfAscendingNode: 95,
        argumentOfPeriapsis: 100,
        meanAnomoloyAtEpoch: 0
    })
});
Nara.satellites = [Amos, Enon, Prax]

Kerbol.satellites = [Moho, Eve, Kerbin, Duna, Edna, Dres, Jool, Lindor, Eeloo, Hamek, Nara];

export default new PlanetPack('JNSQ', Kerbol, Kerbin, new Calendar(43200, 15769326.67544813));
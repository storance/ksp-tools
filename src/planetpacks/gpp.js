import Body from '../body.js';
import Orbit from '../orbit.js';
import PlanetPack from '../planetpack.js';
import Calendar from '../calendar.js';

const Ciro = new Body({
    name: 'Ciro',
    radius: 70980000,
    mass: 1.91001413387e28,
    atmosphereHeight: 1600000,
    highSpaceBorder: 1e9,
    rotationalPeriod: 540000
});

// Icarus System
const Icarus = new Body({
    name: 'Icarus',
    radius: 160000,
    mass: 6.01872960694e20,
    highSpaceBorder: 80000,
    rotationalPeriod: 766931.065512794,
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 3496090000,
        eccentricity: 0.1,
        inclination: 6,
        longitudeOfAscendingNode: 50,
        argumentOfPeriapsis: 240,
        meanAnomoloyAtEpoch: 270
    })
});

// Thalia System
const Thalia = new Body({
    name: 'Thalia',
    radius: 270000,
    mass: 3.21361368418e21,
    highSpaceBorder: 135000,
    rotationalPeriod: 72000,
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 6992180000,
        eccentricity: 0.10,
        inclination: 3,
        longitudeOfAscendingNode: 80,
        argumentOfPeriapsis: 10,
        meanAnomoloyAtEpoch: 68.8
    })
});
const Eta = new Body({
    name: 'Eta',
    radius: 60000,
    mass: 2.6449495343e19,
    highSpaceBorder: 30000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Thalia,
        semiMajorAxis: 11300000,
        eccentricity: 0.06,
        inclination: 2,
        longitudeOfAscendingNode: 180,
        argumentOfPeriapsis: 250,
        meanAnomoloyAtEpoch: 270
    })
});
Thalia.satellites = [Eta];

// Niven System
const Niven = new Body({
    name: 'Niven',
    radius: 400000,
    mass: 1.17553312636e22,
    atmosphereHeight: 65000,
    highSpaceBorder: 200000,
    rotationalPeriod: 43200,
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 10488300000,
        eccentricity: 0.03,
        inclination: 1,
        longitudeOfAscendingNode: 60,
        argumentOfPeriapsis: 0,
        meanAnomoloyAtEpoch: 186.2
    })
});

// Gael System
const Gael = new Body({
    name: 'Gael',
    radius: 600000,
    mass: 5.2915158e22,
    atmosphereHeight: 70000,
    highSpaceBorder: 300000,
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
    mass: 1.24900394675e20,
    highSpaceBorder: 50000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Gael,
        semiMajorAxis: 28000000,
        eccentricity: 0,
        inclination: 0,
        longitudeOfAscendingNode: 90,
        argumentOfPeriapsis: 300,
        meanAnomoloyAtEpoch: 97.4
    })
});
const Ceti = new Body({
    name: 'Ceti',
    radius: 150000,
    mass: 4.46335233913e20,
    highSpaceBorder: 75000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Gael,
        semiMajorAxis: 55000000,
        eccentricity: 0.05,
        inclination: 9,
        longitudeOfAscendingNode: 90,
        argumentOfPeriapsis: 300,
        meanAnomoloyAtEpoch: 180
    })
});
Gael.satellites = [Iota, Ceti];

// Tellumo System
const Tellumo = new Body({
    name: 'Tellumo',
    radius: 1000000,
    mass: 2.7918911751e23,
    atmosphereHeight: 45000,
    highSpaceBorder: 500000,
    rotationalPeriod: 57600,
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 22375000000,
        eccentricity: 0.02,
        inclination: 1.5,
        longitudeOfAscendingNode: 70,
        argumentOfPeriapsis: 20,
        meanAnomoloyAtEpoch: 131.8
    })
});

// Gratian System
const Gratian = new Body({
    name:'Gratian',
    radius: 550000,
    mass: 3.33373847553e22,
    atmosphereHeight: 50000,
    highSpaceBorder: 275000,
    rotationalPeriod: 139245.781338531,
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 39156200000,
        eccentricity: 0.06,
        inclination: 2,
        longitudeOfAscendingNode: 100,
        argumentOfPeriapsis: 50,
        meanAnomoloyAtEpoch: 223.5
    })
});
const Geminus = new Body({
    name: 'Geminus',
    radius: 230000,
    mass: 1.71010681557e21,
    highSpaceBorder: 115000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Gratian,
        semiMajorAxis: 10300000,
        eccentricity: 0.025,
        inclination: 3,
        longitudeOfAscendingNode: 60,
        argumentOfPeriapsis: 30,
        meanAnomoloyAtEpoch: 90
    })
});
Gratian.satellites = [Geminus];

// Otho System
const Otho = new Body({
    name: 'Otho',
    radius: 3500000,
    mass: 1.65603229175e24,
    atmosphereHeight: 600000,
    highSpaceBorder: 1750000,
    rotationalPeriod: 50400, 
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 71718700000,
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
    mass: 6.30012284906e21,
    atmosphereHeight: 60000,
    highSpaceBorder: 175000,
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
    mass: 1.83677050993e20,
    highSpaceBorder: 62500,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Otho,
        semiMajorAxis: 32000000,
        eccentricity: 0.01,
        inclination: 0.5,
        longitudeOfAscendingNode: 100,
        argumentOfPeriapsis: 350,
        meanAnomoloyAtEpoch: 90
    })
});
const Jannah = new Body({
    name: 'Jannah',
    radius: 105000,
    mass: 1.05302053334e20,
    highSpaceBorder: 52500,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Otho,
        semiMajorAxis: 65000000,
        eccentricity: 0.0075,
        inclination: 6,
        longitudeOfAscendingNode: 80,
        argumentOfPeriapsis: 70,
        meanAnomoloyAtEpoch: 180
    })
});
Otho.satellites = [Augustus, Hephaestus, Jannah];

// Gauss System
const Gauss = new Body({
    name: 'Gauss',
    radius: 2500000,
    mass: 9.45936812615e23,
    atmosphereHeight: 400000,
    highSpaceBorder: 1250000,
    rotationalPeriod: 61200,
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 139844000000,
        eccentricity: 0.03,
        inclination: 2,
        longitudeOfAscendingNode: 100,
        argumentOfPeriapsis: 340,
        meanAnomoloyAtEpoch: 143.2
    })
});
const Loki = new Body({
    name: 'Loki',
    radius: 180000,
    mass: 4.76090916174e20,
    highSpaceBorder: 90000,
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
    mass: 1.9043636647e23,
    atmosphereHeight: 280000,
    highSpaceBorder: 600000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Gauss,
        semiMajorAxis: 57000000,
        eccentricity: 0,
        inclination: 1,
        longitudeOfAscendingNode: 90,
        argumentOfPeriapsis: 20,
        meanAnomoloyAtEpoch: 180
    })
});
const Tarsiss = new Body({
    name: 'Tarsiss',
    radius: 320000,
    mass: 2.55796008295e21,
    atmosphereHeight: 130000,
    highSpaceBorder: 160000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Gauss,
        semiMajorAxis: 6000000,
        eccentricity: 0,
        inclination: 0,
        longitudeOfAscendingNode: 90,
        argumentOfPeriapsis: 20,
        meanAnomoloyAtEpoch: 90
    })
});
Catullus.satellites = [Tarsiss];
Gauss.satellites = [Loki, Catullus];

// Nero System
const Nero = new Body({
    name: 'Nero',
    radius: 5000000,
    mass: 3.56333478927e24,
    atmosphereHeight: 560000,
    highSpaceBorder: 2500000,
    rotationalPeriod: 39600,
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 274093000000,
        eccentricity: 0.035,
        inclination: 1,
        longitudeOfAscendingNode: 90,
        argumentOfPeriapsis: 60,
        meanAnomoloyAtEpoch: 143.2
    })
});
const Hadrian = new Body({
    name: 'Hadrian',
    radius: 300000,
    mass: 2.38045458087e21,
    atmosphereHeight: 80000,
    highSpaceBorder: 150000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Nero,
        semiMajorAxis: 30000000,
        eccentricity: 0.01,
        inclination: 10,
        longitudeOfAscendingNode: 90,
        argumentOfPeriapsis: 357,
        meanAnomoloyAtEpoch: 145
    })
});
const Narisse = new Body({
    name: 'Narisse',
    radius: 90000,
    mass: 4.76090916174e19,
    highSpaceBorder: 45000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Nero,
        semiMajorAxis: 48000000,
        eccentricity: 0.015,
        inclination: 10.85,
        longitudeOfAscendingNode: 3,
        argumentOfPeriapsis: 115,
        meanAnomoloyAtEpoch: 180
    })
});
const Muse = new Body({
    name: 'Muse',
    radius: 130000,
    mass: 1.98665098354e20,
    highSpaceBorder: 65000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Nero,
        semiMajorAxis: 80000000,
        eccentricity: 0.005,
        inclination: 10.25,
        longitudeOfAscendingNode: 0,
        argumentOfPeriapsis: 180,
        meanAnomoloyAtEpoch: 90
    })
});
const Minona = new Body({
    name: 'Minona',
    radius: 120000,
    mass: 1.26957577646e20,
    highSpaceBorder: 60000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Nero,
        semiMajorAxis: 135000000,
        eccentricity: 0.02,
        inclination: 11,
        longitudeOfAscendingNode: 6,
        argumentOfPeriapsis: 155,
        meanAnomoloyAtEpoch: 270
    })
});
const Agrippina = new Body({
    name: 'Agrippina',
    radius: 50000,
    mass: 1.10206230596e19,
    highSpaceBorder: 25000,
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
    mass: 1.98371215073e18,
    highSpaceBorder: 15000,
    rotationalPeriod: 36000,
    orbit: new Orbit({
        parentBody: Nero,
        semiMajorAxis: 1625000000,
        eccentricity: 0.28,
        inclination: 170,
        longitudeOfAscendingNode: 0,
        argumentOfPeriapsis: 60,
        meanAnomoloyAtEpoch: 180
    })
});
Nero.satellites = [Hadrian, Narisse, Muse, Minona, Agrippina, Julia];

// Gox System
const Hox = new Body({
    name: 'Hox',
    radius: 250000,
    mass: 1.28573935695e21,
    atmosphereHeight: 40000,
    highSpaceBorder: 125000,
    rotationalPeriod: 64800,
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 139844000000,
        eccentricity: 0.03,
        inclination: 2,
        longitudeOfAscendingNode: 110,
        argumentOfPeriapsis: 340,
        meanAnomoloyAtEpoch: 270
    })
});
const Argo = new Body({
    name: 'Argo',
    radius: 80000,
    mass: 3.2914927538e19,
    highSpaceBorder: 40000,
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
    mass: 7.77615163085e20,
    atmosphereHeight: 35000,
    highSpaceBorder: 105000,
    rotationalPeriod: 21600,
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 419531000000,
        eccentricity: 0.15,
        inclination: 5,
        longitudeOfAscendingNode: 120,
        argumentOfPeriapsis: 90,
        meanAnomoloyAtEpoch: 0
    })
});

// Grannus System
const Grannus = new Body({
    name: 'Grannus',
    radius: 30170000,
    mass: 9.54978770381e27,
    atmosphereHeight: 400000,
    highSpaceBorder: 50000000000,
    rotationalPeriod: 1296000,
    sphereOfInfluence: 500000000000,
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 2000000000000,
        eccentricity: 0.4,
        inclination: 7,
        longitudeOfAscendingNode: 130,
        argumentOfPeriapsis: 20,
        meanAnomoloyAtEpoch: 344.3
    })
});

Ciro.satellites = [Icarus, Thalia, Niven, Gael, Tellumo, Gratian, Otho, Gauss, Nero, Hox, Leto, Grannus];

export default new PlanetPack('Galileo\'s Planet Pack', Ciro, Gael, new Calendar(21600, 9201600));
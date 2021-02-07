import {atmosphere, atmosphereWithOxygen, Body, CalendarDefinition, Orbit, PlanetPack} from '../utils';
import { rescaleDefault } from './rescale';

const Sun = new Body({
    name: 'Sun',
    radius: 696342000,
    mass: 1.9884927e30,
    rotationalPeriod: 0
});

// Mercury System
const Mercury = new Body({
    name: 'Mercury',
    radius: 2439700,
    mass: 3.3022e23,
    highSpaceAltitude: 5000000,
    rotationalPeriod: 5067031.68,
    orbit: new Orbit({
        parentBody: Sun,
        semiMajorAxis: 57908973645.8802,
        eccentricity: 0.2056187266319207,
        inclination: 28.60252108855048,
        longitudeOfAscendingNode: 10.86541167564728,
        argumentOfPeriapsis: 66.90371044151551,
        meanAnomoloyAtEpoch: 318.2162077814089
    })
});

// Venus System
const Venus = new Body({
    name: 'Venus',
    radius: 6049000,
    mass: 4.8676e24,
    atmosphere: atmosphere(145000, 22000),
    highSpaceAltitude: 5000000,
    rotationalPeriod: -20996797.016381,
    orbit: new Orbit({
        parentBody: Sun,
        semiMajorAxis: 108209548790.4671,
        eccentricity: 0.006810339650842032,
        inclination: 24.46397633556437,
        longitudeOfAscendingNode: 7.981603378781639,
        argumentOfPeriapsis: 123.7121294282329,
        meanAnomoloyAtEpoch: 311.2459947553124
    })
});

// Earth System
const Earth = new Body({
    name: 'Earth',
    radius: 6371000,
    mass: 5.9724369e24,
    atmosphere: atmosphereWithOxygen(140000, 50000),
    highSpaceAltitude: 35786000,
    rotationalPeriod: 86164.098903691,
    orbit: new Orbit({
        parentBody: Sun,
        semiMajorAxis: 149598261150.4425,
        eccentricity: 0.01609636160505683,
        inclination: 23.44603795469773,
        longitudeOfAscendingNode: 359.9965004168758,
        argumentOfPeriapsis: 102.9720683296131,
        meanAnomoloyAtEpoch: 357.0607464120944
    })
});
const Moon = new Body({
    name: 'The Moon',
    radius: 1737100,
    mass: 7.34767309e22,
    highSpaceAltitude: 150000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Earth,
        semiMajorAxis: 384308437.7707066,
        eccentricity: 0.05328149353682574,
        inclination: 28.36267790798491,
        longitudeOfAscendingNode: 2.296616161126016,
        argumentOfPeriapsis: 199.7640930160823,
        meanAnomoloyAtEpoch: 222.7012350930954
    })
});
Earth.satellites = [Moon];

// Mars system
const Mars = new Body({
    name: 'Mars',
    radius: 3375800,
    mass: 6.4171876e23,
    atmosphere: atmosphere(125000, 12000),
    highSpaceAltitude: 5000000,
    rotationalPeriod: 88642.6848,
    orbit: new Orbit({
        parentBody: Sun,
        semiMajorAxis: 227949699961.9763,
        eccentricity: 0.09326110278323557,
        inclination: 24.69272426910055,
        longitudeOfAscendingNode: 3.351911063089117,
        argumentOfPeriapsis: 332.1022655295414,
        meanAnomoloyAtEpoch: 169.3913127942378
    })
});
const Phobos = new Body({
    name: 'Phobos',
    radius: 7250,
    mass: 1.072e16,
    highSpaceAltitude: 5000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Mars,
        semiMajorAxis: 9378492.209088314,
        eccentricity: 0.01539938155583979,
        inclination: 36.32433410471867,
        longitudeOfAscendingNode: 46.48212553464923,
        argumentOfPeriapsis: 357.7759243021914,
        meanAnomoloyAtEpoch: 7.185120835598890
    })
});
const Deimos = new Body({
    name: 'Deimos',
    radius: 5456,
    mass: 1.48e15,
    highSpaceAltitude: 5000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Mars,
        semiMajorAxis: 23458112.01759387,
        eccentricity: 0.0003294680798661700,
        inclination: 38.2773701383231,
        longitudeOfAscendingNode: 47.51893570799763,
        argumentOfPeriapsis: 263.8963868784089,
        meanAnomoloyAtEpoch: 47.51893570799763
    })
});
Mars.satellites = [Phobos, Deimos];

// Asteroid belt objects
const Vesta = new Body({
    name: 'Vesta',
    radius: 262700,
    mass: 2.59e20,
    highSpaceAltitude: 300000,
    rotationalPeriod: 19231.2,
    orbit: new Orbit({
        parentBody: Sun,
        semiMajorAxis: 353346223803.158,
        eccentricity: 0.0902068412255369,
        inclination: 22.7696439720361,
        longitudeOfAscendingNode: 18.1671232653234,
        argumentOfPeriapsis: 236.445369158826,
        meanAnomoloyAtEpoch: 61.0607001442198
    })
});
const Ceres = new Body({
    name: 'Ceres',
    radius: 473000,
    mass: 9.39e20, 
    highSpaceAltitude: 300000,
    rotationalPeriod: 32666.4,
    orbit: new Orbit({
        parentBody: Sun,
        semiMajorAxis: 413738762313.173,
        eccentricity: 0.079363494880566,
        inclination: 27.1273394923134,
        longitudeOfAscendingNode: 23.4501727740666,
        argumentOfPeriapsis: 129.19102663711,
        meanAnomoloyAtEpoch: 60.1624710451615
    })
});

// Jupiter System
const Jupiter = new Body({
    name: 'Jupiter',
    radius: 69373000,
    mass: 1.8981872e27,
    atmosphere: atmosphere(1550000, 186000),
    highSpaceAltitude: 40000000,
    rotationalPeriod: 35730,
    orbit: new Orbit({
        parentBody: Sun,
        semiMajorAxis: 778188938659.7554,
        eccentricity: 0.04872660654702194,
        inclination: 23.25313306947884,
        longitudeOfAscendingNode: 3.262077289923354,
        argumentOfPeriapsis: 10.75642751202877,
        meanAnomoloyAtEpoch: 302.5812396096649
    })
});
const Io = new Body({
    name: 'Io',
    radius: 1811300,
    mass: 8.9319e22,
    highSpaceAltitude: 500000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Jupiter,
        semiMajorAxis: 422018294.5236953,
        eccentricity: 0.003545858426216978,
        inclination: 25.46409538664874,
        longitudeOfAscendingNode: 358.0466431678460,
        argumentOfPeriapsis: 231.2703460977786,
        meanAnomoloyAtEpoch: 195.3274089855250
    })
});
const Europa = new Body({
    name: 'Europa',
    radius: 1550800,
    mass: 4.7998E22,
    highSpaceAltitude: 500000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Jupiter,
        semiMajorAxis: 671253637.5417169,
        eccentricity: 0.009511727119926178,
        inclination: 25.70364276471991,
        longitudeOfAscendingNode: 358.9360081847504,
        argumentOfPeriapsis: 53.13210737539627,
        meanAnomoloyAtEpoch: 276.2652038284650
    })
});
const Ganymede = new Body({
    name: 'Ganymede',
    radius: 2624100,
    mass: 1.4819E23,
    highSpaceAltitude: 500000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Jupiter,
        semiMajorAxis: 1070823468.894524,
        eccentricity: 0.001190086418361844,
        inclination: 25.27071366962049,
        longitudeOfAscendingNode: 358.0125219248113,
        argumentOfPeriapsis: 139.2992571342065,
        meanAnomoloyAtEpoch: 232.6753228788302
    })
});
const Calisto = new Body({
    name: 'Calisto',
    radius: 69373000,
    mass: 1.89821e27,
    highSpaceAltitude: 500000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Jupiter,
        semiMajorAxis: 1883812366.573522,
        eccentricity: 0.007973319796896609,
        inclination: 25.44080019822134,
        longitudeOfAscendingNode: 358.5022563372704,
        argumentOfPeriapsis: 320.7359683492656,
        meanAnomoloyAtEpoch: 15.81614025483249
    })
});
Jupiter.satellites = [Io, Europa, Ganymede, Calisto];

// Saturn system
const Saturn = new Body({
    name: 'Saturn',
    radius: 57216000,
    mass: 5.6833582e26,
    atmosphere: atmosphere(2000000, 410000),
    highSpaceAltitude: 30000000,
    rotationalPeriod: 38052,
    orbit: new Orbit({
        parentBody: Sun,
        semiMajorAxis: 1424838758613.269,
        eccentricity: 0.05347166506749872,
        inclination: 22.56992281132335,
        longitudeOfAscendingNode: 5.970845343832233,
        argumentOfPeriapsis: 85.04661202834268,
        meanAnomoloyAtEpoch: 67.46885226487360
    })
});
const Mimas = new Body({
    name: 'Mimas',
    radius: 198200,
    mass: 3.7493E+19,
    highSpaceAltitude: 7000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Saturn,
        semiMajorAxis: 186009285.9220490,
        eccentricity: 0.01776275223147744,
        inclination: 1.572,
        longitudeOfAscendingNode: 139.7604722490289,
        argumentOfPeriapsis: 222.2172789396715,
        meanAnomoloyAtEpoch: 125.5909781664896
    })
});
const Enceladus = new Body({
    name: 'Enceladus',
    radius: 252100,
    mass: 1.08022e20, 
    highSpaceAltitude: 14000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Saturn,
        semiMajorAxis: 238413699.4838728,
        eccentricity: 0.006227897999957464,
        inclination: 0.009,
        longitudeOfAscendingNode: 128.4244161601446,
        argumentOfPeriapsis: 115.5615886062458,
        meanAnomoloyAtEpoch: 346.6301476573209
    })
});
const Tethys = new Body({
    name: 'Tethys',
    radius: 531100,
    mass: 6.17449e20,
    highSpaceAltitude: 50000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Saturn,
        semiMajorAxis: 294973462.3804425,
        eccentricity: 0.001064868868083566,
        inclination: 1.091,
        longitudeOfAscendingNode: 119.2518388332899,
        argumentOfPeriapsis: 215.9196892523803,
        meanAnomoloyAtEpoch: 349.8231217220438
    })
});
const Dione = new Body({
    name: 'Dione',
    radius: 561400,
    mass: 1.095452e21,
    highSpaceAltitude: 50000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Saturn,
        semiMajorAxis: 377650651.5017090,
        eccentricity: 0.001679230905502774,
        inclination: 0.028,
        longitudeOfAscendingNode: 128.5606071129818,
        argumentOfPeriapsis: 123.6717156049260,
        meanAnomoloyAtEpoch: 167.9272784830226
    })
});
const Rhea = new Body({
    name: 'Rhea',
    radius: 763800,
    mass: 2.306518e21,
    highSpaceAltitude: 50000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Saturn,
        semiMajorAxis: 527212645.7071990,
        eccentricity: 0.001168269515756326,
        inclination: 0.331,
        longitudeOfAscendingNode: 130.3670574820431,
        argumentOfPeriapsis: 172.7367089889645,
        meanAnomoloyAtEpoch: 13.48887718956405
    })
});
const Titan = new Body({
    name: 'Titan',
    radius: 2573300,
    mass: 1.3452241e23,
    atmosphere: atmosphere(600000, 80000),
    highSpaceAltitude: 750000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Saturn,
        semiMajorAxis: 1221966238.511425,
        eccentricity: 0.02891936561555365,
        inclination: 6.460492679775526,
        longitudeOfAscendingNode: 126.4945233702913,
        argumentOfPeriapsis: 182.0886765021483,
        meanAnomoloyAtEpoch: 75.16117358815676
    })
});
const Iapetus = new Body({
    name: 'Iapetus',
    radius: 734500,
    mass: 1.805e21,
    highSpaceAltitude: 10000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Saturn,
        semiMajorAxis: 3560162593.022970,
        eccentricity: 0.02880286281969610,
        inclination: 7.489,
        longitudeOfAscendingNode: 50.29392880240187,
        argumentOfPeriapsis: 314.3819081366686,
        meanAnomoloyAtEpoch: 139.5683324894335
    })
});
Saturn.satellites = [Mimas, Enceladus, Tethys, Dione, Rhea, Titan, Iapetus];

// Uranus System
const Uranus = new Body({
    name: 'Uranus',
    radius: 24702000,
    mass: 8.6812549e25,
    atmosphere: atmosphere(1400000, 191000),
    highSpaceAltitude: 30000000,
    rotationalPeriod: 62063.712,
    orbit: new Orbit({
        parentBody: Sun,
        semiMajorAxis: 2866832853163.975,
        eccentricity: 0.04620653158718433,
        inclination: 23.67256993343676,
        longitudeOfAscendingNode: 1.846089669223938,
        argumentOfPeriapsis: 169.6876790522249,
        meanAnomoloyAtEpoch: 286.8267359944493
    })
});
const Miranda = new Body({
    name: 'Miranda',
    radius: 235700,
    mass: 6.6e19,
    highSpaceAltitude: 200000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Uranus,
        semiMajorAxis: 129880047.634175,
        eccentricity: 0.00118741261963413,
        inclination: 78.5887546839913,
        longitudeOfAscendingNode: 169.0642120548280,
        argumentOfPeriapsis: 326.7575256535064,
        meanAnomoloyAtEpoch: 253.0006290232421
    })
});
const Ariel = new Body({
    name: 'Ariel',
    radius: 578900,
    mass: 1.29e21,
    highSpaceAltitude: 200000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Uranus,
        semiMajorAxis: 190944364.477622,
        eccentricity: 0.00190951361476287,
        inclination: 74.8989043025419,
        longitudeOfAscendingNode: 166.5671084714081,
        argumentOfPeriapsis: 169.9966404991910,
        meanAnomoloyAtEpoch: 46.46367954654207
    })
});
const Umbriel = new Body({
    name: 'Umbriel',
    radius: 584700,
    mass: 1.22e21,
    highSpaceAltitude: 200000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Uranus,
        semiMajorAxis: 265992360.127656,
        eccentricity: 0.0038334454580725,
        inclination: 74.9939984108702,
        longitudeOfAscendingNode: 166.5601075193709,
        argumentOfPeriapsis: 207.7259222157362,
        meanAnomoloyAtEpoch: 114.3251464012079
    })
});
const Titania = new Body({
    name: 'Titania',
    radius: 788900,
    mass: 3.42e21,
    highSpaceAltitude: 200000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Uranus,
        semiMajorAxis: 436292682.967703,
        eccentricity: 0.002486916,
        inclination: 75.045766393,
        longitudeOfAscendingNode: 166.6555214910122,
        argumentOfPeriapsis: 165.7455424030838,
        meanAnomoloyAtEpoch: 212.6552821835342
    })
});
const Oberon = new Body({
    name: 'Oberon',
    radius: 761400,
    mass: 2.88e21,
    highSpaceAltitude: 200000,
    tidallyLocked: true,
    orbit:new Orbit({
        parentBody: Uranus,
        semiMajorAxis: 583435328.340603,
        eccentricity: 0.00110558297330948,
        inclination: 74.9349049752716,
        longitudeOfAscendingNode: 166.6887328903476,
        argumentOfPeriapsis: 274.4599570542317,
        meanAnomoloyAtEpoch: 266.5149396374048
    })
});
Uranus.satellites = [Miranda, Ariel, Umbriel, Titania, Oberon];

// Neptune System
const Neptune = new Body({
    name: 'Neptune',
    radius: 24085000,
    mass: 1.0243403e26,
    atmosphere: atmosphere(1250000, 191000),
    highSpaceAltitude: 3000000,
    rotationalPeriod: 58000.32,
    orbit: new Orbit({
        parentBody: Sun,
        semiMajorAxis: 4497455832811.736,
        eccentricity: 0.008090397688364061,
        inclination: 22.30735942964904,
        longitudeOfAscendingNode: 3.512610711801178,
        argumentOfPeriapsis: 29.81485402991322,
        meanAnomoloyAtEpoch: 162.0995481888285
    })
});
const Triton = new Body({
    name: 'Triton',
    radius: 1353400,
    mass: 2.1394709e22,
    atmosphere: atmosphere(110000, 7000),
    highSpaceAltitude: 80000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Neptune,
        semiMajorAxis: 354767243.5406647,
        eccentricity: 0.0001688014359763687,
        inclination: 156.834,
        longitudeOfAscendingNode: 197.1953239788069,
        argumentOfPeriapsis: 220.4523286895169,
        meanAnomoloyAtEpoch: 358.6561877626771
    })
});
Neptune.satellites = [Triton];

// Pluto System
const Pluto = new Body({
    name: 'Pluto',
    radius: 1187000,
    mass: 1.305e22,
    atmosphere: atmosphere(110000, 18000),
    highSpaceAltitude: 100000,
    rotationalPeriod: 551856.672,
    orbit: new Orbit({
        parentBody: Sun,
        semiMajorAxis: 5845670624078.223,
        eccentricity: 0.2462772488425983,
        inclination: 23.61236405752844,
        longitudeOfAscendingNode: 44.36099836994975,
        argumentOfPeriapsis: 184.4945352163909,
        meanAnomoloyAtEpoch: 300.1297304812811
    })
});
const Charon = new Body({
    name: 'Charon',
    radius: 603500,
    mass: 1.52e21,
    highSpaceAltitude: 5000,
    tidallyLocked: true,
    orbit: new Orbit({
        parentBody: Pluto,
        semiMajorAxis: 19596193.83540397,
        eccentricity: 0.00005082225659448947,
        inclination: 0.001,
        longitudeOfAscendingNode: 222.4053735570010,
        argumentOfPeriapsis: 188.4738646852448,
        meanAnomoloyAtEpoch: 30.89989240060877
    })
});
Pluto.satellites = [Charon];

Sun.satellites = [Mercury, Venus, Earth, Mars, Vesta, Ceres, Jupiter, Saturn, Uranus, Neptune, Pluto];

export default new PlanetPack('RSS', Sun, Earth, new CalendarDefinition({customDay: 86400, customYear: 31536000}), [rescaleDefault]);
import Body from '../body.js';
import Orbit from '../orbit.js';
import PlanetPack from '../planetpack.js';
import Calendar from '../calendar.js';

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
    highSpaceBorder: 5000000,
    rotationalPeriod: 5067031.68,
    orbit: new Orbit(Sun, 57908973645.8802, 0.2056187266319207, 28.60252108855048, 10.86541167564728, 66.90371044151551, 318.2162077814089)
});

// Venus System
const Venus = new Body({
    name: 'Venus',
    radius: 6049000,
    mass: 4.8676e24,
    atmosphereHeight: 145000,
    highSpaceBorder: 5000000,
    rotationalPeriod: -20996797.016381,
    orbit: new Orbit(Sun, 108209548790.4671, 0.006810339650842032, 24.46397633556437, 7.981603378781639, 123.7121294282329, 311.2459947553124)
});

// Earth System
const Earth = new Body({
    name: 'Earth',
    radius: 6371000,
    mass: 5.9724369e24,
    atmosphereHeight: 140000,
    highSpaceBorder: 35786000,
    rotationalPeriod: 86164.098903691,
    orbit: new Orbit(Sun, 149598261150.4425, 0.01609636160505683, 23.44603795469773, 359.9965004168758, 102.9720683296131, 357.0607464120944)
});
const Moon = new Body({
    name: 'The Moon',
    radius: 1737100,
    mass: 7.34767309e22,
    highSpaceBorder: 150000,
    tidallyLocked: true,
    orbit: new Orbit(Earth, 384308437.7707066, 0.05328149353682574, 28.36267790798491, 2.296616161126016, 199.7640930160823, 222.7012350930954)
});
Earth.satellites = [Moon];

// Mars system
const Mars = new Body({
    name: 'Mars',
    radius: 3375800,
    mass: 6.4171876e23,
    atmosphereHeight: 125000,
    highSpaceBorder: 5000000,
    rotationalPeriod: 88642.6848,
    orbit: new Orbit(Sun, 227949699961.9763, 0.09326110278323557, 24.69272426910055, 3.351911063089117, 332.1022655295414, 169.3913127942378)
});
const Phobos = new Body({
    name: 'Phobos',
    radius: 7250,
    mass: 1.072e16,
    highSpaceBorder: 5000,
    tidallyLocked: true,
    orbit: new Orbit(Mars, 9378492.209088314, 0.01539938155583979, 36.32433410471867, 46.48212553464923, 357.7759243021914, 7.185120835598890)
});
const Deimos = new Body({
    name: 'Deimos',
    radius: 5456,
    mass: 1.48e15,
    highSpaceBorder: 5000,
    tidallyLocked: true,
    orbit: new Orbit(Mars, 23458112.01759387, 0.0003294680798661700, 38.2773701383231, 47.51893570799763, 263.8963868784089, 47.51893570799763)
});
Mars.satellites = [Phobos, Deimos];

// Asteroid belt objects
const Vesta = new Body({
    name: 'Vesta',
    radius: 262700,
    mass: 2.59e20,
    highSpaceBorder: 300000,
    rotationalPeriod: 19231.2,
    orbit: new Orbit(Sun, 353346223803.158, 0.0902068412255369, 22.7696439720361, 18.1671232653234, 236.445369158826, 61.0607001442198)
});
const Ceres = new Body({
    name: 'Ceres',
    radius: 473000,
    mass: 9.39e20, 
    highSpaceBorder: 300000,
    rotationalPeriod: 32666.4,
    orbit: new Orbit(Sun, 413738762313.173, 0.079363494880566, 27.1273394923134, 23.4501727740666, 129.19102663711, 60.1624710451615)
});

// Jupiter System
const Jupiter = new Body({
    name: 'Jupiter',
    radius: 69373000,
    mass: 1.8981872e27,
    atmosphereHeight: 1550000,
    highSpaceBorder: 100000000,
    rotationalPeriod: 35730,
    orbit: new Orbit(Sun, 778188938659.7554, 0.04872660654702194, 23.25313306947884, 3.262077289923354, 10.75642751202877, 302.5812396096649)
});
const Io = new Body({
    name: 'Io',
    radius: 1811300,
    mass: 8.9319e22,
    highSpaceBorder: 2000000,
    tidallyLocked: true,
    orbit: new Orbit(Jupiter, 422018294.5236953, 0.003545858426216978, 25.46409538664874, 358.0466431678460, 231.2703460977786, 195.3274089855250)
});
const Europa = new Body({
    name: 'Europa',
    radius: 1550800,
    mass: 4.7998E22,
    highSpaceBorder: 2000000,
    tidallyLocked: true,
    orbit: new Orbit(Jupiter, 671253637.5417169, 0.009511727119926178, 25.70364276471991, 358.9360081847504, 53.13210737539627, 276.2652038284650)
});
const Ganymede = new Body({
    name: 'Ganymede',
    radius: 2624100,
    mass: 1.4819E23,
    highSpaceBorder: 2000000,
    tidallyLocked: true,
    orbit: new Orbit(Jupiter, 1070823468.894524, 0.001190086418361844, 25.27071366962049, 358.0125219248113, 139.2992571342065, 232.6753228788302)
});
const Calisto = new Body({
    name: 'Calisto',
    radius: 69373000,
    mass: 1.89821e27,
    highSpaceBorder: 2000000,
    tidallyLocked: true,
    orbit: new Orbit(Jupiter, 1883812366.573522, 0.007973319796896609, 25.44080019822134, 358.5022563372704, 320.7359683492656, 15.81614025483249)
});
Jupiter.satellites = [Io, Europa, Ganymede, Calisto];

// Saturn system
const Saturn = new Body({
    name: 'Saturn',
    radius: 57216000,
    mass: 5.6833582e26,
    atmosphereHeight: 2000000,
    highSpaceBorder: 100000000,
    rotationalPeriod: 38052,
    orbit: new Orbit(Sun, 1424838758613.269, 0.05347166506749872, 22.56992281132335, 5.970845343832233, 85.04661202834268, 67.46885226487360)
});
const Mimas = new Body({
    name: 'Mimas',
    radius: 3375800,
    mass: 6.4171876e23,
    atmosphereHeight: 125000,
    highSpaceBorder: 2000000,
    tidallyLocked: true,
    orbit: new Orbit(Saturn, 186009285.9220490, 0.01776275223147744, 1.572, 139.7604722490289, 222.2172789396715, 125.5909781664896)
});
const Enceladus = new Body({
    name: 'Enceladus',
    radius: 252100,
    mass: 1.08022e20, 
    highSpaceBorder: 2000000,
    tidallyLocked: true,
    orbit: new Orbit(Saturn, 238413699.4838728, 0.006227897999957464, 0.009, 128.4244161601446, 115.5615886062458, 346.6301476573209)
});
const Tethys = new Body({
    name: 'Tethys',
    radius: 531100,
    mass: 6.17449e20,
    highSpaceBorder: 2000000,
    tidallyLocked: true,
    orbit: new Orbit(Saturn, 294973462.3804425, 0.001064868868083566, 1.091, 119.2518388332899, 215.9196892523803, 349.8231217220438)
});
const Dione = new Body({
    name: 'Dione',
    radius: 561400,
    mass: 1.095452e21,
    highSpaceBorder: 2000000,
    tidallyLocked: true,
    orbit: new Orbit(Saturn, 377650651.5017090, 0.001679230905502774, 0.028, 128.5606071129818, 123.6717156049260, 167.9272784830226)
});
const Rhea = new Body({
    name: 'Rhea',
    radius: 763800,
    mass: 2.306518e21,
    highSpaceBorder: 2000000,
    tidallyLocked: true,
    orbit: new Orbit(Saturn, 527212645.7071990, 0.001168269515756326, 0.331, 130.3670574820431, 172.7367089889645, 13.48887718956405)
});
const Titan = new Body({
    name: 'Titan',
    radius: 2573300,
    mass: 1.3452241e23,
    atmosphereHeight: 600000,
    highSpaceBorder: 2000000,
    tidallyLocked: true,
    orbit: new Orbit(Saturn, 1221966238.511425, 0.02891936561555365, 6.460492679775526, 126.4945233702913, 182.0886765021483, 75.16117358815676)
});
const Iapetus = new Body({
    name: 'Iapetus',
    radius: 734500,
    mass: 1.805e21,
    highSpaceBorder: 2000000,
    tidallyLocked: true,
    orbit: new Orbit(Saturn, 3560162593.022970, 0.02880286281969610, 7.489, 50.29392880240187, 314.3819081366686, 139.5683324894335)
});
Saturn.satellites = [Mimas, Enceladus, Tethys, Dione, Rhea, Titan, Iapetus];

// Uranus System
const Uranus = new Body({
    name: 'Uranus',
    radius: 24702000,
    mass: 8.6812549e25,
    atmosphereHeight: 1400000,
    highSpaceBorder: 100000000,
    rotationalPeriod: 62063.712,
    orbit: new Orbit(Sun, 2866832853163.975, 0.04620653158718433, 23.67256993343676, 1.846089669223938, 169.6876790522249, 286.8267359944493)
});
const Miranda = new Body({
    name: 'Miranda',
    radius: 235700,
    mass: 6.6e19,
    highSpaceBorder: 200000,
    tidallyLocked: true,
    orbit: new Orbit(Uranus, 129880047.634175, 0.00118741261963413, 78.5887546839913, 169.0642120548280, 326.7575256535064, 253.0006290232421)
});
const Ariel = new Body({
    name: 'Ariel',
    radius: 578900,
    mass: 1.29e21,
    highSpaceBorder: 200000,
    tidallyLocked: true,
    orbit: new Orbit(Uranus, 190944364.477622, 0.00190951361476287, 74.8989043025419, 166.5671084714081, 169.9966404991910, 46.46367954654207)
});
const Umbriel = new Body({
    name: 'Umbriel',
    radius: 584700,
    mass: 1.22e21,
    highSpaceBorder: 200000,
    tidallyLocked: true,
    orbit: new Orbit(Uranus, 265992360.127656, 0.0038334454580725, 74.9939984108702, 166.5601075193709, 207.7259222157362, 114.3251464012079)
});
const Titania = new Body({
    name: 'Titania',
    radius: 788900,
    mass: 3.42e21,
    highSpaceBorder: 200000,
    tidallyLocked: true,
    orbit: new Orbit(Uranus, 436292682.967703, 0.002486916, 75.045766393, 166.6555214910122, 165.7455424030838, 212.6552821835342)
});
const Oberon = new Body({
    name: 'Oberon',
    radius: 761400,
    mass: 2.88e21,
    highSpaceBorder: 200000,
    tidallyLocked: true,
    orbit:new Orbit(Uranus, 583435328.340603, 0.00110558297330948, 74.9349049752716, 166.6887328903476, 274.4599570542317, 266.5149396374048)
});
Uranus.satellites = [Miranda, Ariel, Umbriel, Titania, Oberon];

// Neptune System
const Neptune = new Body({
    name: 'Neptune',
    radius: 24085000,
    mass: 1.0243403e26,
    atmosphereHeight: 1250000,
    highSpaceBorder: 100000000,
    rotationalPeriod: 58000.32,
    orbit: new Orbit(Sun, 4497455832811.736, 0.008090397688364061, 22.30735942964904, 3.512610711801178, 29.81485402991322, 162.0995481888285)
});
const Triton = new Body({
    name: 'Triton',
    radius: 1353400,
    mass: 2.1394709e22,
    atmosphereHeight: 110000,
    highSpaceBorder: 2000000,
    tidallyLocked: true,
    orbit: new Orbit(Neptune, 354767243.5406647, 0.0001688014359763687, 156.834, 197.1953239788069, 220.4523286895169, 358.6561877626771)
});
Neptune.satellites = [Triton];

// Pluto System
const Pluto = new Body({
    name: 'Pluto',
    radius: 1187000,
    mass: 1.305e22,
    atmosphereHeight: 110000,
    highSpaceBorder: 2000000,
    rotationalPeriod: 551856.672,
    radius: new Orbit(Sun, 5845670624078.223, 0.2462772488425983, 23.61236405752844, 44.36099836994975, 184.4945352163909, 300.1297304812811)
});
const Charon = new Body({
    name: 'Charon',
    radius: 603500,
    mass: 1.52e21,
    highSpaceBorder: 2000000,
    tidallyLocked: true,
    orbit: new Orbit(Pluto, 19596193.83540397, 0.00005082225659448947, 0.001, 222.4053735570010, 188.4738646852448, 30.89989240060877)
});
Pluto.satellites = [Charon];

Sun.satellites = [Mercury, Venus, Earth, Mars, Vesta, Ceres, Jupiter, Saturn, Uranus, Neptune, Pluto];

export default new PlanetPack('Real Solar System', Sun, Earth, new Calendar(86400, 31536000));
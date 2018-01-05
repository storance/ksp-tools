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
    orbit: new Orbit(Ciro, 3496090000, 0.1, 6, 50, 340, 270)
});

// Thalia System
const Thalia = new Body({
    name: 'Thalia',
    radius: 270000,
    mass: 3.21361368418e21,
    highSpaceBorder: 135000,
    rotationalPeriod: 72000,
    orbit: new Orbit(Ciro, 6992180000, 0.01, 3, 80, 10, 68.7549)
});
const Eta = new Body({
    name: 'Eta',
    radius: 60000,
    mass: 2.6449495343e19,
    highSpaceBorder: 30000,
    tidallyLocked: true,
    orbit: new Orbit(Thalia, 11300000, 0.06, 2, 180, 350, 270)
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
    orbit: new Orbit(Ciro, 10488300000, 0.03, 1, 60, 0, 186.2113)
});

// Gael System
const Gael = new Body({
    name: 'Gael',
    radius: 600000,
    mass: 5.2915158e22,
    atmosphereHeight: 70000,
    highSpaceBorder: 300000,
    rotationalPeriod: 21600,
    orbit: new Orbit(Ciro, 13982766706.4122, 0, 0, 90, 300, 0)
});
const Iota = new Body({
    name: 'Iota',
    radius: 100000,
    mass: 1.24900394675e20,
    highSpaceBorder: 50000,
    tidallyLocked: true,
    orbit: new Orbit(Gael, 28000000, 0, 0, 90, 300, 97.4028279043159)
});
const Ceti = new Body({
    name: 'Ceti',
    radius: 150000,
    mass: 4.46335233913e20,
    highSpaceBorder: 75000,
    tidallyLocked: true,
    orbit: new Orbit(Gael, 55000000, 0.05, 9, 90, 300, 180)
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
    orbit: new Orbit(Ciro, 22375000000, 0.02, 1.5, 70, 20, 131.78)
});

// Gratian System
const Gratian = new Body({
    name:'Gratian',
    radius: 550000,
    mass: 3.33373847553e22,
    atmosphereHeight: 50000,
    highSpaceBorder: 275000,
    rotationalPeriod: 139245.781338531,
    orbit: new Orbit(Ciro, 39156200000, 0.06, 2, 100, 50, 223.454)
});
const Geminus = new Body({
    name: 'Geminus',
    radius: 230000,
    mass: 1.71010681557e21,
    highSpaceBorder: 115000,
    tidallyLocked: true,
    orbit: new Orbit(Gratian, 10300000, 0.025, 3, 60, 30, 90)
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
    orbit: new Orbit(Ciro, 71718700000, 0.04, 1.5, 80, 40, 0)
});
const Augustus = new Body({
    name: 'Augustus',
    radius: 350000,
    mass: 6.30012284906e21,
    atmosphereHeight: 60000,
    highSpaceBorder: 175000,
    tidallyLocked: true,
    orbit: new Orbit(Otho, 20000000, 0.005, 1, 60, 60, 0)
});
const Hephaestus = new Body({
    name: 'Hephaestus',
    radius: 125000,
    mass: 1.83677050993e20,
    highSpaceBorder: 62500,
    tidallyLocked: true,
    orbit: new Orbit(Otho, 32000000, 0.01, 0.5, 100, 350, 90)
});
const Jannah = new Body({
    name: 'Jannah',
    radius: 105000,
    mass: 1.05302053334e20,
    highSpaceBorder: 52500,
    tidallyLocked: true,
    orbit: new Orbit(Otho, 65000000, 0.075, 6, 80, 70, 180)
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
    orbit: new Orbit(Ciro, 139844000000, 0.03, 2, 110, 340, 143.239)
});
const Loki = new Body({
    name: 'Loki',
    radius: 180000,
    mass: 4.76090916174e20,
    highSpaceBorder: 90000,
    tidallyLocked: true,
    orbit: new Orbit(Gauss, 18500000, 0.02, 4, 130, 300, 0)
});
const Catullus = new Body({
    name: 'Catullus',
    radius: 1200000,
    mass: 1.9043636647e23,
    atmosphereHeight: 280000,
    highSpaceBorder: 600000,
    tidallyLocked: true,
    orbit: new Orbit(Gauss, 57000000, 0, 1, 90, 20, 180)
});
const Tarsiss = new Body({
    name: 'Tarsiss',
    radius: 320000,
    mass: 2.55796008295e21,
    atmosphereHeight: 130000,
    highSpaceBorder: 160000,
    tidallyLocked: true,
    orbit: new Orbit(Catullus, 6000000, 0, 0, 90, 20, 90)
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
    orbit: new Orbit(Ciro, 274093000000, 0.035, 1, 90, 60, 143.239)
});
const Hadrian = new Body({
    name: 'Hadrian',
    radius: 300000,
    mass: 2.38045458087e21,
    atmosphereHeight: 80000,
    highSpaceBorder: 150000,
    tidallyLocked: true,
    orbit: new Orbit(Nero, 30000000, 0.01, 10, 357, 145, 0)
});
const Narisse = new Body({
    name: 'Narisse',
    radius: 90000,
    mass: 4.76090916174e19,
    highSpaceBorder: 45000,
    tidallyLocked: true,
    orbit: new Orbit(Nero, 48000000, 0.015, 10.85, 3, 115, 180)
});
const Muse = new Body({
    name: 'Muse',
    radius: 130000,
    mass: 1.98665098354e20,
    highSpaceBorder: 65000,
    tidallyLocked: true,
    orbit: new Orbit(Nero, 80000000, 0.005, 10.25, 0, 180, 90)
});
const Minona = new Body({
    name: 'Minona',
    radius: 120000,
    mass: 1.26957577646e20,
    highSpaceBorder: 60000,
    tidallyLocked: true,
    orbit: new Orbit(Nero, 135000000, 0.02, 11, 6, 155, 270)
});
const Agrippina = new Body({
    name: 'Agrippina',
    radius: 50000,
    mass: 1.10206230596e19,
    highSpaceBorder: 25000,
    rotationalPeriod: 28800,
    orbit: new Orbit(Nero, 800000000, 0.16, 18, 150, 60, 0)
});
const Julia = new Body({
    name: 'Julia',
    radius: 30000,
    mass: 1.98371215073e18,
    highSpaceBorder: 15000,
    rotationalPeriod: 36000,
    orbit: new Orbit(Nero, 1625000000, 0.28, 170, 0, 60, 180)
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
    orbit: new Orbit(Ciro, 139844000000, 0.03, 2, 110, 340, 270)
});
const Argo = new Body({
    name: 'Argo',
    radius: 80000,
    mass: 3.2914927538e19,
    highSpaceBorder: 40000,
    tidallyLocked: true,
    orbit: new Orbit(Hox, 12500000, 0, 40, 90, 90, 0)
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
    orbit: new Orbit(Ciro, 419531000000, 0.15, 5, 120, 90, 0)
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
    orbit: new Orbit(Ciro, 2000000000000, 0.4, 7, 130, 20, 344.3009564)
});

Ciro.satellites = [Icarus, Thalia, Niven, Gael, Tellumo, Gratian, Otho, Gauss, Nero, Hox, Leto, Grannus];

export default new PlanetPack('Galileo\'s Planet Pack', Ciro, Gael, new Calendar(21600, 9201600));
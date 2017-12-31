import Body from './body.js';
import Orbit from './orbit.js';

export class PlanetPack {
    constructor(name, sun, homeworld, calendar) {
        this.name = name;
        this.sun = sun;
        this.homeworld = homeworld;
        this.calendar = calendar;
    }
}

const stock = (function () {
    const Kerbol = new Body('Sun', 261600000, 1.7565459e28, 0, 0, false);

    const Moho = new Body('Moho', 250000, 2.5263314e21,  0, 1210000, false,
        new Orbit(Kerbol, 5263138304, 0.2, 7, 70, 15, 180));

    const Eve = new Body('Eve', 700000, 1.2243980e23, 90000, 80500, false,
        new Orbit(Kerbol, 9832684544, 0.01, 2.1, 15, 0, 180));
    const Gilly = new Body('Gilly', 13000, 1.2420363e17, 0, 28255,
        new Orbit(Eve, 9832684544, 0.01, 2.1, 15, 0, 180));

    const Kerbin = new Body('Kerbin', 600000, 5.2915158e22, 250000, 21549.425, false,
        new Orbit(Kerbol, 13599840256, 0, 0, 0, 0, 180));
    const Mun = new Body('Mun', 200000, 9.7599066e20, 0, 138984.38, true,
        new Orbit(Kerbin, 12000000, 0, 0, 0, 0, 97.4));
    const Minmus = new Body('Minmus', 60000, 2.6457580e19, 0, 40400, false, 
        new Orbit(Kerbin, 47000000, 0, 6, 78, 38, 51.6));

    const Duna = new Body('Duna', 320000, 4.5154270e21, 50000, 65517.859, false,
        new Orbit(Kerbol, 20726155264, 0.051, 0.06, 135.5, 0, 180));
    const Ike = new Body('Ike', 130000, 2.7821615e20, 0, 65517.862, true,
        new Orbit(Duna, 3200000, 0.03, 0.2, 0, 0, 97.4));

    const Dres = new Body('Dres', 138000, 3.2190937e20, 0, 34800, false,
        new Orbit(Kerbol, 40839348203, 0.145, 5, 280, 90, 180));

    const Jool = new Body('Jool', 6000000, 4.2332127e24, 200000, 36000, false,
        new Orbit(Kerbol, 68773560320, 0.05, 1.304, 52, 0, 5.7));
    const Laythe = new Body('Laythe', 500000, 2.9397311e22, 50000, 52980.879, true,
        new Orbit(Jool, 27184000, 0, 0, 0, 0, 180));
    const Vall = new Body('Vall', 300000, 3.1087655e21, 0, 105962.09, true,
        new Orbit(Jool, 43152000, 0, 0, 0, 0, 51.6));
    const Tylo = new Body('Tylo', 600000, 4.2332127e22, 0, 211926.36, true,
        new Orbit(Jool, 68500000, 0, 0.025, 0, 0, 180));
    const Bop = new Body('Bop', 65000, 3.7261090e19, 0, 544507.43, true,
        new Orbit(Jool, 128500000, 0.235, 15, 10, 25, 51.6));
    const Pol = new Body('Pol', 44000, 1.0813507e19, 0, 901902.62, true,
        new Orbit(Jool, 179890000, 0.171, 4.25, 2, 15, 51.6));

    const Eeloo = new Body('Eeloo', 210000, 1.1149224e21, 0, 19460, false,
        new Orbit(Kerbol, 90118820000, 0.26, 6.15, 50, 260, 180));

    return new PlanetPack('Stock', Kerbol, Kerbin, new Calendar(21600, 9201600));
})();

const gpp = (function () {
    const Ciro = new Body('Ciro', 70980000, 1.91001413387e28, 1600000, 540000, false);

    const Icarus = new Body('Icarus', 160000, 6.01872960694e20, 0, 766931.065512794, false,
        new Orbit(Ciro, 3496090000, 0.1, 6, 50, 340, 270));

    const Thalia = new Body('Thalia', 270000, 3.21361368418e21, 0, 72000, false,
        new Orbit(Ciro, 6992180000, 0.01, 3, 80, 10, 68.7549));
    const Eta = new Body('Eta', 60000, 2.6449495343e19, 0, null, true,
        new Orbit(Thalia, 11300000, 0.06, 2, 180, 350, 270));

    const Niven = new Body('Niven', 400000, 1.17553312636e22, 65000, 43200, false,
        new Orbit(Ciro, 10488300000, 0.03, 1, 60, 0, 186.2113));

    const Gael = new Body('Gael', 600000, 5.2915158e22, 70000, 21600, false,
        new Orbit(Ciro, 13982766706.4122, 0, 0, 90, 300, 0));
    const Iota = new Body('Iota', 100000, 1.24900394675e20, 0, null, true,
        new Orbit(Gael, 28000000, 0, 0, 90, 300, 97.4028279043159));
    const Ceti = new Body('Ceti', 150000, 4.46335233913e20, 0, null, true,
        new Orbit(Gael, 55000000, 0.05, 9, 90, 300, 180));

    const Tellumo = new Body('Tellumo', 1000000, 2.7918911751e23, 45000, 57600, false,
        new Orbit(Ciro, 22375000000, 0.02, 1.5, 70, 20, 131.78));

    const Gratian = new Body('Gratian', 550000, 3.33373847553e22, 50000, 139245.781338531, false,
        new Orbit(Ciro, 39156200000, 0.06, 2, 100, 50, 223.454));
    const Geminus = new Body('Geminus', 230000, 1.71010681557e21, 0, null, true,
        new Orbit(Gratian, 10300000, 0.025, 3, 60, 30, 90));

    const Otho = new Body('Otho', 3500000, 1.65603229175e24, 600000, 50400, false,
        new Orbit(Ciro, 71718700000, 0.04, 1.5, 80, 40, 0));
    const Augustus = new Body('Augustus', 350000, 6.30012284906e21, 60000, null, true,
        new Orbit(Otho, 20000000, 0.005, 1, 60, 60, 0));
    const Hephaestus = new Body('Hephaestus', 125000, 1.83677050993e20, 0, null, true,
        new Orbit(Otho, 32000000, 0.01, 0.5, 100, 350, 90));
    const Jannah = new Body('Jannah', 105000, 1.05302053334e20, 0, null, true,
        new Orbit(Otho, 65000000, 0.075, 6, 80, 70, 180));

    const Gauss = new Body('Gauss', 2500000, 9.45936812615e23, 400000, 61200, false,
        new Orbit(Ciro, 139844000000, 0.03, 2, 110, 340, 143.239));
    const Loki = new Body('Loki', 180000, 4.76090916174e20, 0, null, true,
        new Orbit(Gauss, 18500000, 0.02, 4, 130, 300, 0));
    const Catullus = new Body('Catullus', 1200000, 1.9043636647e23, 280000, null, true,
        new Orbit(Gauss, 57000000, 0, 1, 90, 20, 180));
    const Tarsiss = new Body('Tarsiss', 320000, 2.55796008295e21, 130000, null, true,
        new Orbit(Catullus, 6000000, 0, 0, 90, 20, 90));

    const Nero = new Body('Nero', 5000000, 3.56333478927e24, 560000, 39600, false,
        new Orbit(Ciro, 274093000000, 0.035, 1, 90, 60, 143.239));
    const Hadrian = new Body('Hadrian', 300000, 2.38045458087e21, 80000, null, true,
        new Orbit(Nero, 30000000, 0.01, 10, 357, 145, 0));
    const Narisse = new Body('Narisse', 90000, 4.76090916174e19, 0, null, true,
        new Orbit(Nero, 48000000, 0.015, 10.85, 3, 115, 180));
    const Muse = new Body('Muse', 130000, 1.98665098354e20, 0, null, true,
        new Orbit(Nero, 80000000, 0.005, 10.25, 0, 180, 90);
    const Minona = new Body('Minona', 120000, 1.26957577646e20, 0, null, true,
        new Orbit(Nero, 135000000, 0.02, 11, 6, 155, 270);
    const Agrippina = new Body('Agrippina', 50000, 1.10206230596e19, 0, 28800, false,
        new Orbit(Nero, 800000000, 0.16, 18, 150, 60, 0);
    const Julia = new Body('Julia', 30000, 1.98371215073e18, 0, 36000, false,
        new Orbit(Nero, 1625000000, 0.28, 170, 0, 60, 180);

    const Hox = new Body('Hox', 250000, 1.28573935695e21, 40000, 64800, false,
        new Orbit(Ciro, 139844000000, 0.03, 2, 110, 340, 270));
    const Argo = new Body('Argo', 80000, 3.2914927538e19, 0, null, true,
        new Orbit(Hox, 12500000, 0, 40, 90, 90, 0));

    const Leto = new Body('Leto', 210000, 7.77615163085e20, 35000, 21600, false,
        new Orbit(Ciro, 419531000000, 0.15, 5, 120, 90, 0));

    const Grannus = new Body('Grannus', 30170000, 9.54978770381e27, 400000, 1296000, false,
        new Orbit(Ciro, 2000000000000, 0.4, 7, 130, 20, 344.3009564));

    return new PlanetPack('Galileo\'s Planet Pack', Ciro, Gael, new Calendar(21600, 9201600));
})();

const rss = (function () {
    const Sun = new Body('Sun', 696342000, 1.9884927e30, 273.69, 0, 0, false);

    const Mercury = new Body('Mercury', 2439700, 3.3022e23, 0, 5067031.68, false,
        new Orbit(Sun, 57908973645.8802, 0.2056187266319207, 28.60252108855048, 10.86541167564728, 66.90371044151551, 318.2162077814089));

    const Venus = new Body('Venus', 6049000, 4.8676e24, 145000, -20996797.016381, false,
        new Orbit(Sun, 108209548790.4671, 0.006810339650842032, 24.46397633556437, 7.981603378781639, 123.7121294282329, 311.2459947553124));

    const Earth = new Body('Earth', 6371000, 5.9724369e24, 140000, 86164.098903691, false,
        new Orbit(Sun, 149598261150.4425, 0.01609636160505683, 23.44603795469773, 359.9965004168758, 102.9720683296131, 357.0607464120944));
    const Moon = new Body('Moon', 1737100, 7.34767309e22, 0, 2360584.68479999, true,
        new Orbit(Earth, 384308437.7707066, 0.05328149353682574, 28.36267790798491, 2.296616161126016, 199.7640930160823, 222.7012350930954));

    const Mars = new Body('Mars', 3375800 , 6.4171876e23, 125000, 88642.6848, false,
        new Orbit(Sun, 227949699961.9763, 0.09326110278323557, 24.69272426910055, 3.351911063089117, 332.1022655295414, 169.3913127942378));
    const Phobos = new Body('Phobos', 7250, 1.072e16, 0, null, true,
        new Orbit(Mars, 9378492.209088314, 0.01539938155583979, 36.32433410471867, 46.48212553464923, 357.7759243021914, 7.185120835598890);
    const Deimos = new Body('Deimos', 5456, 1.48e15, 0, null, true,
        new Orbit(Mars, 23458112.01759387, 0.0003294680798661700, 38.2773701383231, 47.51893570799763, 263.8963868784089, 47.51893570799763));

    // Asteroid belt objects
    const Vesta = new Body('Vesta', 262700 , 2.59e20, 0, 19231.2, false,
        new Orbit(Sun, 353346223803.158, 0.0902068412255369, 22.7696439720361, 18.1671232653234, 236.445369158826, 61.0607001442198));
    const Ceres = new Body('Ceres', 473000, 9.39e20, 0, 32666.4, false,
        new Orbit(Sun, 413738762313.173, 0.079363494880566, 27.1273394923134, 23.4501727740666, 129.19102663711, 60.1624710451615));

    const Jupiter = new Body('Jupiter', 69373000, 1.8981872e27, 1550000, 35730, false,
        new Orbit(Sun, 778188938659.7554, 0.04872660654702194, 23.25313306947884, 3.262077289923354, 10.75642751202877, 302.5812396096649));
    const Io = new Body('Io', 1811300, 8.9319e22, 0, null, true,
        new Orbit(Jupiter, 422018294.5236953, 0.003545858426216978, 25.46409538664874, 358.0466431678460, 231.2703460977786, 195.3274089855250));
    const Europa = new Body('Europa', 1550800, 4.7998E22, 0, null, true,
        new Orbit(Jupiter, 671253637.5417169, 0.009511727119926178, 25.70364276471991, 358.9360081847504, 53.13210737539627, 276.2652038284650));
    const Ganymede = new Body('Ganymede', 2624100, 1.4819E23, 0, null, true,
        new Orbit(Jupiter, 1070823468.894524, 0.001190086418361844, 25.27071366962049, 358.0125219248113, 139.2992571342065, 232.6753228788302));
    const Calisto = new Body('Calisto', 69373000, 1.89821e27, 0, null, true,
        new Orbit(Jupiter, 1883812366.573522, 0.007973319796896609, 25.44080019822134, 358.5022563372704, 320.7359683492656, 15.81614025483249));

    const Saturn = new Body('Saturn', 57216000, 5.6833582e26, 2000000, 38052, false,
        new Orbit(Sun, 1424838758613.269, 0.05347166506749872, 22.56992281132335, 5.970845343832233, 85.04661202834268, 67.46885226487360));
    const Mimas = new Body('Mimas', 3375800 , 6.4171876e23, 125000, null, true,
        new Orbit(Saturn, 186009285.9220490, 0.01776275223147744, 1.572, 139.7604722490289, 222.2172789396715, 125.5909781664896));
    const Enceladus = new Body('Enceladus', 252100, 1.08022e20, 0, null, true,
        new Orbit(Saturn, 238413699.4838728, 0.006227897999957464, 0.009, 128.4244161601446, 115.5615886062458, 346.6301476573209));
    const Tethys = new Body('Tethys', 531100 , 6.17449e20, 0, null, true,
        new Orbit(Saturn, 294973462.3804425, 0.001064868868083566, 1.091, 119.2518388332899, 215.9196892523803, 349.8231217220438));
    const Dione = new Body('Dione', 561400 , 1.095452e21, 0, null, true,
        new Orbit(Saturn, 377650651.5017090, 0.001679230905502774, 0.028, 128.5606071129818, 123.6717156049260, 167.9272784830226);
    const Rhea = new Body('Rhea', 763800 , 2.306518e21, 0, null, true,
        new Orbit(Saturn, 527212645.7071990, 0.001168269515756326, 0.331, 130.3670574820431, 172.7367089889645, 13.48887718956405));
    const Titan = new Body('Titan', 2573300, 1.3452241e23, 600000, null, true,
        new Orbit(Saturn, 1221966238.511425, 0.02891936561555365, 6.460492679775526, 126.4945233702913, 182.0886765021483, 75.16117358815676));
    const Iapetus = new Body('Iapetus', 734500 , 1.805e21, 0, null, true,
        new Orbit(Saturn, 3560162593.022970, 0.02880286281969610, 7.489, 50.29392880240187, 314.3819081366686, 139.5683324894335));

    const Uranus = new Body('Uranus', 24702000, 8.6812549e25, 1400000, 62063.712, false,
        new Orbit(Sun, 2866832853163.975, 0.04620653158718433, 23.67256993343676, 1.846089669223938, 169.6876790522249, 286.8267359944493));
    const Miranda = new Body('Miranda', 235700, 6.6e19, 0, null, true,
        new Orbit(Uranus, 129880047.634175, 0.00118741261963413, 78.5887546839913, 169.0642120548280, 326.7575256535064, 253.0006290232421));
    const Ariel = new Body('Ariel', 578900, 1.29e21, 0, null, true,
        new Orbit(Uranus, 190944364.477622, 0.00190951361476287, 74.8989043025419, 166.5671084714081, 169.9966404991910, 46.46367954654207));
    const Umbriel = new Body('Umbriel', 584700, 1.22e21, 0, null, true,
        new Orbit(Uranus, 265992360.127656, 0.0038334454580725, 74.9939984108702, 166.5601075193709, 207.7259222157362, 114.3251464012079));
    const Titania = new Body('Titania', 788900, 3.42e21, 0, null, true,
        new Orbit(Uranus, 436292682.967703, 0.002486916, 75.045766393, 166.6555214910122, 165.7455424030838, 212.6552821835342));
    const Oberon = new Body('Oberon', 761400, 2.88e21, 0, null, true,
        new Orbit(Uranus, 583435328.340603, 0.00110558297330948, 74.9349049752716, 166.6887328903476, 274.4599570542317, 266.5149396374048));

    const Neptune = new Body('Neptune', 24085000, 1.0243403e26, 1250000, 58000.32, false,
        new Orbit(Sun, 4497455832811.736, 0.008090397688364061, 22.30735942964904, 3.512610711801178, 29.81485402991322, 162.0995481888285));
    const Triton = new Body('Triton', 1353400, 2.1394709e22, 110000, null, true,
        new Orbit(Neptune, 354767243.5406647, 0.0001688014359763687, 156.834, 197.1953239788069, 220.4523286895169, 358.6561877626771));

    const Pluto = new Body('Pluto', 1187000, 1.305e22, 110000, 551856.672, false,
        new Orbit(Sun, 5845670624078.223, 0.2462772488425983, 23.61236405752844, 44.36099836994975, 184.4945352163909, 300.1297304812811));
    const Charon = new Body('Charon', 603500, 1.52e21, 0, null, true,
        new Orbit(Pluto, 19596193.83540397, 0.00005082225659448947, 0.001, 222.4053735570010, 188.4738646852448, 30.89989240060877));

    return new PlanetPack('Real Solar System', Sun, Earth, new Calendar(86400, 31536000));
})();

export planetpacks = [stock, gpp, rss];
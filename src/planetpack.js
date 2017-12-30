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
	const Kerbol = new Body('Sun', 261600000, 1.7565459e28, 0, 0);
	const Moho = new Body('Moho', 250000, 2.5263314e21,  0, 1210000,
	    new Orbit(Kerbol, 5263138304, 0.2, 7, 70, 15, 3.14));
	const Eve = new Body('Eve', 700000, 1.2243980e23, 90000, 80500,
	    new Orbit(Kerbol, 9832684544, 0.01, 2.1, 15, 0, 3.14));
	const Gilly = new Body('Gilly', 13000, 1.2420363e17, 0, 28255,
	    new Orbit(Eve, 9832684544, 0.01, 2.1, 15, 0, 3.14));
	const Kerbin = new Body('Kerbin', 600000, 5.2915158e22, 250000, 21549.425,
	    new Orbit(Kerbol, 13599840256, 0, 0, 0, 0, 3.14));
	const Mun = new Body('Mun', 200000, 9.7599066e20, 0, 138984.38,
	    new Orbit(Kerbin, 12000000, 0, 0, 0, 0, 1.7));
	const Minmus = new Body('Minmus', 60000, 2.6457580e19, 0, 40400, 
	    new Orbit(Kerbin, 47000000, 0, 6, 78, 38, 0.9));
	const Duna = new Body('Duna', 320000, 4.5154270e21, 50000, 65517.859,
	    new Orbit(Kerbol, 20726155264, 0.051, 0.06, 135.5, 0, 3.14));
	const Ike = new Body('Ike', 130000, 2.7821615e20, 0, 65517.862,
	    new Orbit(Duna, 3200000, 0.03, 0.2, 0, 0, 1.7));
	const Dres = new Body('Dres', 138000, 3.2190937e20, 0, 34800,
	    new Orbit(Kerbol, 40839348203, 0.145, 5, 280, 90, 3.14));
	const Jool = new Body('Jool', 6000000, 4.2332127e24, 200000, 36000,
	    new Orbit(Kerbol, 68773560320, 0.05, 1.304, 52, 0, 0.1));
	const Laythe = new Body('Laythe', 500000, 2.9397311e22, 50000, 52980.879,
	    new Orbit(Jool, 27184000, 0, 0, 0, 0, 3.14));
	const Vall = new Body('Vall', 300000, 3.1087655e21, 0, 105962.09,
	    new Orbit(Jool, 43152000, 0, 0, 0, 0, 0.9));
	const Tylo = new Body('Tylo', 600000, 4.2332127e22, 0, 211926.36,
	    new Orbit(Jool, 68500000, 0, 0.025, 0, 0, 3.14));
	const Bop = new Body('Bop', 65000, 3.7261090e19, 0, 544507.43,
	    new Orbit(Jool, 128500000, 0.235, 15, 10, 25, 0.9));
	const Pol = new Body('Pol', 44000, 1.0813507e19, 0, 901902.62,
	    new Orbit(Jool, 179890000, 0.171, 4.25, 2, 15, 0.9));
	const Eeloo = new Body('Eeloo', 210000, 1.1149224e21, 0, 19460,
	    new Orbit(Kerbol, 90118820000, 0.26, 6.15, 50, 260, 3.14));

	return new PlanetPack('Stock', Kerbol, Kerbin, new Calendar(21600, 9201600));
})();

const gpp = (function () {
	const Ciro = new Body('Ciro', 261600000, 1.7565459e28, 0, 0);

	return new PlanetPack('Galileo\'s Planet Pack', Ciro, Gale, new Calendar(21600, 9201600));
})();

const rss = (function () {
	const Sun = new Body('Sun', 696342000, 1.9884927e30, 273.69, 0, 0);
	const Mercury = new Body('Mercury', 2439700, 3.3022e23, 0, 5067031.68,
	    new Orbit(Sun, 57908973645.8802, 0.2056187266319207, 28.60252108855048, 10.86541167564728, 66.90371044151551, 318.2162077814089));
	const Venus = new Body('Venus', 700000, 1.2243980e23, 16.7, 90000, 400000, 80500,
	    new Orbit(Sun, 9832684544, 0.01, 2.1, 15, 0, 3.14));
	const Earth = new Body('Earth', 600000, 5.2915158e22, 9.81, 70000, 250000, 21549.425,
	    new Orbit(Sun, 13599840256, 0, 0, 0, 0, 3.14));
	const Moon = new Body('Moon', 200000, 9.7599066e20, 1.63, 0, 60000, 138984.38,
	    new Orbit(Earth, 12000000, 0, 0, 0, 0, 1.7));
	const Mars = new Body('Mars', 320000, 4.5154270e21, 2.94, 50000, 140000, 65517.859,
	    new Orbit(Sun, 20726155264, 0.051, 0.06, 135.5, 0, 3.14));

	return new PlanetPack('Real Solar System', Sun, Earth, new Calendar(86400, 31536000));
})();

export planetpacks = [stock, gpp, rss];
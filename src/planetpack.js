import Body from './body.js';
import Orbit from './orbit.js';
import Calendar from './calendar.js';

export default class PlanetPack {
    constructor(name, sun, homeworld, calendar, rescales) {
        this.name = name;
        this.sun = sun;
        this.homeworld = homeworld;
        this.calendar = calendar;
        this.rescales = rescales;
    }

    findByName(name) {
        return this.sun.findByName(name);
    }

    findRescale(name) {
	    return this.rescales.find(r => r.name === name);
	}
};
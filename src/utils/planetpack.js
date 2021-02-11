import Body from './body';
import Orbit from './orbit';
import { Calendar } from './calendar';

export default class PlanetPack {
    constructor(name, sun, homeworld, calendarDefinition, rescales) {
        this.name = name;
        this.sun = sun;
        this.homeworld = homeworld;

        let dayLength = calendarDefinition.customDay;
        let yearLength = calendarDefinition.customYear;
        
        if (calendarDefinition.useHomeDay) {
            dayLength = homeworld.solarDayLength;
        }

        if (calendarDefinition.useHomeYear) {
            yearLength = homeworld.orbit.period;
        }

        this.calendar = new Calendar(dayLength, yearLength, calendarDefinition.useLeapYears);
        this.rescales = rescales;
    }

    findByName(name) {
        return this.sun.findByName(name);
    }

    findRescale(name) {
        return this.rescales.find(r => r.name === name);
    }
};
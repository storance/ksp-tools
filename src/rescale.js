import Calendar from './calendar.js';
import PlanetPack from './planetpack.js';
import {GRAVITATIONAL_CONSTANT} from './consts.js';

export class Rescale {
    constructor(name, resize, rescale, atmosphereHeightMultiplier, dayLengthMultiplier, overrides) {
    	this.name = name;
    	this.resize = resize;
    	this.rescale = rescale;
    	this.atmosphereHeightMultiplier = atmosphereHeightMultiplier;
    	this.dayLengthMultiplier = dayLengthMultiplier;
    	this.overrides = overrides;
    }

    rescale(planetpack) {
        if (this.rescale == 1 && this.resize == 1) {
            return planetpack;
        }

        const rescaledSun = this.rescaleBody(planetpack.sun.clone());
        const homeworld = rescaledSun.findByName(planetpack.homeworld.name);
        
        let calendar = null;
        if (homeworld.name in this.overrides && 'calendar' in this.overrides[homeworld.name]) {
            // use the explicit calendar if it was defined
            calendar = this.overrides[homeworld.name].calendar;
        } else {
            const dayLength = Math.abs(homeworld.rotationalPeriod);
            const yearLength = homeworld.orbit.period;
            const daysInYear = Math.floor(yearLength / dayLength);

            calendar = new Calendar(dayLength, daysInYear * dayLength);
        }

        let rescaledPlanetPack = new PlanetPack(planetpack.name + ' ' + this.name, rescaledSun, homeworld, calendar);
    }

    rescaleBody(body) {
        let {
            resizeFactor : this.resizeFactor,
            rescaleFactor : this.rescaleFactor,
            atmosphereHeightMultiplier : this.atmosphereHeightMultiplier,
            dayLengthMultiplier : this.dayLengthMultiplier,
            semiMajorAxis} = this.overrides[body.name] || {};

        body.radius *= resizeFactor;
        // update the body's mass to keep the same aslGravity with it's new radius
        body.mass = Math.pow(body.radius, 2) * body.aslGravity / GRAVITATIONAL_CONSTANT;
        body.atmosphereHeight *= atmosphereHeightMultiplier;
        body.orbit.semiMajorAxis = semiMajorAxis ? semiMajorAxis : body.orbit.semiMajorAxis * rescaleFactor;

        if (!body.tidallyLocked) {
            body.rotationalPeriod *= dayLengthMultiplier;
        } else {
            // for tidally locked bodies, set it's rotational period to it's orbital period
            const rotationSign = body.rotationalPeriod < 0 ? -1 : 1; // negative rotationPeriod means it orbits westward instead of eastward
            body.rotationalPeriod = body.orbit.period * rotationSign;
        }

        body.satellites.forEach(satellite => this.rescaleBody(satellite));

        return body;
    }
}

export const rescales = [
    new Rescale('Stock', 1, 1, 1, 1, 1, {}),
    new Rescale('2.5x', 2.5, 2.5, 1.3000000002, 1.25, {
        'Gael' : {
            'semiMajorAxis' :  34948895994.9601,
            'dayLengthMultiplier' : 1.66666666666667,
            'calendar' : new Calendar(36000, 14544000)
        },
        'Icarus' : {
            'dayLengthMultiplier' : 1.58113883008419
        },
        'Gratian' : {
            'dayLengthMultiplier' : 1.58113883008419
        },
        'Otho' : {
            'dayLengthMultiplier' : 1
        },
        'Gauss' : {
            'dayLengthMultiplier' : 1
        },
        'Nero' : {
            'dayLengthMultiplier' : 1
        },
        'Ciro' : {
            'dayLengthMultiplier' : 1.66666666666667
        },
        'Grannus' : {
            'dayLengthMultiplier' : 1.66666666666667
        }
    }),
    new Rescale('3.2x', 3.2, 3.2, 1.5, 1.5, {
        'Gael' : {
            'semiMajorAxis' :  44742819242.0888,
            'dayLengthMultiplier' : 2,
            'calendar' : new Calendar(43200, 16459200)
        },
        'Icarus' : {
            'dayLengthMultiplier' : 1.78885438199983
        },
        'Gratian' : {
            'dayLengthMultiplier' : 1.78885438199983
        },
        'Otho' : {
            'dayLengthMultiplier' : 1
        },
        'Gauss' : {
            'dayLengthMultiplier' : 1
        },
        'Nero' : {
            'dayLengthMultiplier' : 1
        },
        'Ciro' : {
            'dayLengthMultiplier' : 2
        },
        'Grannus' : {
            'dayLengthMultiplier' : 2
        }
    }),
    new Rescale('6.4x', 6.4, 6.4, 1.5999999996, 1.75, {
        'Gael' : {
            'semiMajorAxis' :  89450717932.7214,
            'dayLengthMultiplier' : 3,
            'calendar' : new Calendar(64800, 23263200), 
        },
        'Icarus' : {
            'dayLengthMultiplier' : 2.5298221281347
        },
        'Gratian' : {
            'dayLengthMultiplier' : 2.5298221281347
        },
        'Otho' : {
            'dayLengthMultiplier' : 1
        },
        'Gauss' : {
            'dayLengthMultiplier' : 1
        },
        'Nero' : {
            'dayLengthMultiplier' : 1
        },
        'Ciro' : {
            'dayLengthMultiplier' : 3
        },
        'Grannus' : {
            'dayLengthMultiplier' : 3
        }
    }),
    new Rescale('10x', 10, 10, 1.728, 2, {
        'Gael' : {
            'semiMajorAxis' :  139887843072.6100,
            'dayLengthMultiplier' : 4,
            'calendar' : new Calendar(86400, 29116800), 
        },
        'Icarus' : {
            'dayLengthMultiplier' : 3.16227766016838
        },
        'Gratian' : {
            'dayLengthMultiplier' : 3.16227766016838
        },
        'Otho' : {
            'dayLengthMultiplier' : 1
        },
        'Gauss' : {
            'dayLengthMultiplier' : 1
        },
        'Nero' : {
            'dayLengthMultiplier' : 1
        },
        'Ciro' : {
            'dayLengthMultiplier' : 4
        },
        'Grannus' : {
            'dayLengthMultiplier' : 4
        }
    }),
    new Rescale('10.625x', 10.625, 10.625, 1.728, 2, {
        'Gael' : {
            'semiMajorAxis' : 148524802065.2240,
            'dayLengthMultiplier' : 4,
            'calendar' : new Calendar(86400, 29116800), 
        },
        'Icarus' : {
            'dayLengthMultiplier' : 3.25960120260132
        },
        'Gratian' : {
            'dayLengthMultiplier' : 3.25960120260132
        },
        'Otho' : {
            'dayLengthMultiplier' : 1
        },
        'Gauss' : {
            'dayLengthMultiplier' : 1
        },
        'Nero' : {
            'dayLengthMultiplier' : 1
        },
        'Ciro' : {
            'dayLengthMultiplier' : 4
        },
        'Grannus' : {
            'dayLengthMultiplier' : 4
        }
    })
];
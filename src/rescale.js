import Calendar from './calendar';
import PlanetPack from './planetpack';
import Body from './body';
import Orbit from './orbit';
import { GRAVITATIONAL_CONSTANT } from './consts';
import { Map, fromJS, List} from 'immutable';

export class Rescale {
    constructor({
            name,
            resize=1,
            rescale=1,
            atmosphereHeightMultiplier=1,
            dayLengthMultiplier=1,
            overrides={}}) {
    	this.name = name;
    	this.resize = resize;
    	this.rescale = rescale;
    	this.atmosphereHeightMultiplier = atmosphereHeightMultiplier;
    	this.dayLengthMultiplier = dayLengthMultiplier;
    	this.overrides = fromJS(overrides);
    }

    rescalePlanetPack(planetpack) {
        if (this.rescale == 1 && this.resize == 1) {
            return planetpack;
        }

        const rescaledSun = this.rescaleBody(planetpack.sun);
        const homeworld = rescaledSun.findByName(planetpack.homeworld.name);
        
        let calendar = this.overrides.getIn([homeworld.name, 'calendar']);
        if (!calendar) {
            const dayLength = Math.abs(homeworld.rotationalPeriod);
            const yearLength = homeworld.orbit.period;
            const daysInYear = Math.floor(yearLength / dayLength);

            calendar = new Calendar(dayLength, daysInYear * dayLength);
        }

        return new PlanetPack(planetpack.name + ' ' + this.name, rescaledSun, homeworld, calendar);
    }

    rescaleBody(body, parentBody=null) {
        const rescaleFactor = this.overrides.getIn([body.name, 'rescale'], this.rescale);
        const resizeFactor = this.overrides.getIn([body.name, 'resize'], this.resize);
        const atmosphereHeightMultiplier = this.overrides.getIn([body.name, 'atmosphereHeightMultiplier'],
            this.atmosphereHeightMultiplier);
        const dayLengthMultiplier = this.overrides.getIn([body.name, 'dayLengthMultiplier'],
            this.dayLengthMultiplier);

        let orbit = null;
        if (body.orbit) {
            const semiMajorAxis = this.overrides.getIn([body.name, 'semiMajorAxis'],
                body.orbit.semiMajorAxis * rescaleFactor);
            orbit = new Orbit({
                parentBody: parentBody,
                semiMajorAxis: semiMajorAxis,
                eccentricity: body.orbit.eccentricity,
                inclination: body.orbit.inclination,
                longitudeOfAscendingNode: body.orbit.longitudeOfAscendingNode,
                argumentOfPeriapsis: body.orbit.argumentOfPeriapsis,
                meanAnomoloyAtEpoch: body.orbit.meanAnomoloyAtEpoch
            });
        }

        const rescaledBody = new Body({
            name: body.name,
            radius: body.radius * resizeFactor,
            mass: Math.pow(body.radius * resizeFactor, 2) * body.aslGravity / GRAVITATIONAL_CONSTANT,
            atmosphereHeight: body.atmosphereHeight * atmosphereHeightMultiplier,
            highSpaceBorder: body.highSpaceBorder * resizeFactor,
            rotationalPeriod: body.rotationalPeriod * dayLengthMultiplier,
            tidallyLocked: body.tidallyLocked,
            orbit: orbit,
            sphereOfInfluence: body.sphereOfInfluenceManual !== null ? body.sphereOfInfluenceManual * rescaleFactor : null
        });
        rescaledBody.satellites = body.satellites.map(satellite => this.rescaleBody(satellite, rescaledBody));

        return rescaledBody;
    }
}

export const rescaleDefault = new Rescale({name: 'Default'});

export const rescale2_5x = new Rescale({
    name: '2.5x',
    resize: 2.5,
    rescale: 2.5,
    atmosphereHeightMultiplier: 1.3000000002,
    dayLengthMultiplier: 1.25,
    overrides: {
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
    }
});

export const rescale3_2x = new Rescale({
    name: '3.2x',
    resize: 3.2,
    rescale: 3.2,
    atmosphereHeightMultiplier: 1.5,
    dayLengthMultiplier: 1.5,
    overrides: {
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
    }
});

export const rescale6_4x = new Rescale({
    name: '6.4x',
    resize: 6.4,
    rescale: 6.4,
    atmosphereHeightMultiplier: 1.5999999996,
    dayLengthMultiplier: 1.75,
    overrides: {
        'Gael' : {
            'semiMajorAxis' : 89450717932.7214,
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
    }
});

export const rescale10x = new Rescale({
    name: '10x',
    resize: 10,
    rescale: 10,
    atmosphereHeightMultiplier: 1.728,
    dayLengthMultiplier: 2,
    overrides: {
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
    }
});

export const rescale10_65x = new Rescale({
    name: '10.625x',
    resize: 10.625,
    rescale: 10.625,
    atmosphereHeightMultiplier: 1.728,
    dayLengthMultiplier: 2,
        overrides:  {
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
    }
});

export const allRescales = [rescaleDefault, rescale2_5x, rescale3_2x, rescale6_4x, rescale10x, rescale10_65x];

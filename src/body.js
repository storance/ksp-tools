import {GRAVITATIONAL_CONSTANT} from './consts.js';

export default class Body {
    constructor(name, radius, mass, atmosphereHeight, rotationalPeriod, tidallyLocked = false, orbit=null, satellites=[]) {
        this.name = name;
        this.radius = radius;
        this.mass = mass;
        this.atmosphereHeightMeters = atmosphereHeightMeters;
        this.lowSpaceBorder = lowSpaceBorder;
        this.tidallyLocked = tidallyLocked;
        if (tidallyLocked && orbit) {
            const sign = rotationalPeriod < 0 ? -1 : 1;
            this.rotationalPeriod = orbit.period * sign;
        } else {
            this.rotationalPeriod = rotationalPeriod;
        }
        this.orbit = orbit;
        this.satellites = satellites;

        if (orbit) {
            orbit.parentBody.addSatellite(this);
        }
    }

    get mu() {
        return this.mass * GRAVITATIONAL_CONSTANT;
    }

    get aslGravity() {
        return this.gravityAt(0);
    }

    gravityAt(altitude) {
        return this.mu / Math.pow(this.radius + altitude, 2);   
    }

    get sphereOfInfluence() {
        if (this.orbit === null) {
            return Infinity;
        }

        return Math.pow(this.orbit.semiMajorAxis * (this.mass / this.parentBody.mass), 0.4);
    }

    get parentBody() {
        if (this.orbit === null) {
            return null;
        }

        return this.orbit.parentBody;
    }

    get hasAtmosphere() {
        return this.atmosphereHeight > 0;
    }

    findByName(name) {
        if (this.name === name) {
            return this;
        }

        for (const satellite of this.satellites) {
            const body = satellite.findByName(name);
            if (body) {
                return body;
            }
        }

        return null;
    }

    addSatellite(satellite) {
        if (satellite.orbit) {
            satellite.orbit.parentBody = this;
        }

        this.satellites.push(satellite);
    }

    clone() {
        let clonedBody = new Body(
            this.name,
            this.radius,
            this.mass,
            this.atmosphereHeight,
            this.rotationalPeriod,
            this.tidallyLocked);
        if (this.orbit) {
            clonedBody.orbit = this.orbit.clone();
        }

        this.satellites.forEach(satellite => {
           let clonedSatellite = satellite.clone();
           clonedBody.addSatellite(satellite);
        });

        return clonedBody;
    }
}


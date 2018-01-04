import {GRAVITATIONAL_CONSTANT, PI} from './consts.js';

export default class Body {
    constructor(name, radius, mass, atmosphereHeight, rotationalPeriod, tidallyLocked = false, orbit=null, satellites=[]) {
        this.name = name;
        this.radius = radius;
        this.mass = mass;
        this.atmosphereHeight = atmosphereHeight;
        this.tidallyLocked = tidallyLocked;
        if (tidallyLocked && orbit) {
            const sign = rotationalPeriod < 0 ? -1 : 1;
            this.rotationalPeriod = orbit.period * sign;
        } else {
            this.rotationalPeriod = rotationalPeriod;
        }
        this.orbit = orbit;
        this.satellites = satellites;
    }

    get mu() {
        return this.mass * GRAVITATIONAL_CONSTANT;
    }

    get equitorialCircumference() {
        return 2 * PI * this.radius;
    }

    get surfaceArea() {
        return 4 * PI * Math.pow(this.radius, 2);
    }

    get volume() {
        return 4 / 3 * PI * Math.pow(this.radius, 3);
    }

    get density() {
        return this.mass / this.volume;
    }

    get aslGravity() {
        return this.gravityAt(0);
    }

    gravityAt(altitude) {
        return this.mu / Math.pow(this.radius + altitude, 2);   
    }

    get escapeVelocity() {
        return Math.sqrt(2 * this.aslGravity * this.radius);
    }

    get sphereOfInfluence() {
        if (this.orbit === null) {
            return Infinity;
        }

        return Math.pow(this.orbit.semiMajorAxis * (this.mass / this.parentBody.mass), 0.4);
    }

    get rotationalSpeed() {
        return this.equitorialCircumference / this.rotationalPeriod;
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
        this.satellites.push(satellite);
    }

    clone(parentBody=null) {
        let clonedBody = new Body(
            this.name,
            this.radius,
            this.mass,
            this.atmosphereHeight,
            this.rotationalPeriod,
            this.tidallyLocked,
            this.orbit ? this.orbit.clone(parentBody) : null);

        clonedBody.satellites = this.satellites.map(satellite => satellite.clone(clonedBody));

        return clonedBody;
    }
}


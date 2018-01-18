import { List} from 'immutable';
import {GRAVITATIONAL_CONSTANT, GRAVITY, PI} from './consts';

export default class Body {
    constructor({
            name,
            radius,
            mass=null,
            geeAsl=null,
            mu=null,
            atmosphereHeight = 0,
            highSpaceBorder = 0,
            rotationalPeriod = null,
            tidallyLocked=false,
            orbit=null,
            sphereOfInfluence=null,
            satellites=[]}) {
        this.name = name;
        this.radius = radius;
        if (mass !== null) {
            this.mass = mass;
            this.mu = this.mass * GRAVITATIONAL_CONSTANT;
        } else if (mu !== null) {
            this.mass = mu / GRAVITATIONAL_CONSTANT;
            this.mu = mu;
        } else if (geeAsl !== null) {
            this.mu = geeAsl * GRAVITY * Math.pow(radius, 2);
            this.mass = this.mu / GRAVITATIONAL_CONSTANT;
        }
        this.atmosphereHeight = atmosphereHeight;
        this.highSpaceBorder = highSpaceBorder;
        this.tidallyLocked = tidallyLocked;
        if (tidallyLocked && orbit) {
            const sign = rotationalPeriod < 0 ? -1 : 1;
            this.rotationalPeriod = orbit.period * sign;
        } else {
            this.rotationalPeriod = rotationalPeriod;
        }
        this.orbit = orbit;
        this._satellites = List(satellites);
        this.sphereOfInfluenceManual = sphereOfInfluence;
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

    get rotationalVelocity() {
        return this.equitorialCircumference / this.rotationalPeriod;
    }

    get sphereOfInfluence() {
        if (this.sphereOfInfluenceManual !== null) {
            return this.sphereOfInfluenceManual;
        }

        if (this.orbit === null) {
            return Infinity;
        }

        return this.orbit.semiMajorAxis * Math.pow(this.mass / this.parentBody.mass, 0.4);
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

    get stationaryOrbit() {
        return Math.pow(Math.pow(this.rotationalPeriod / (2 * PI), 2) * this.mu, 1/3) - this.radius;
    }

    get satellites() {
        return this._satellites;
    }

    set satellites(satellites) {
        this._satellites = List(satellites).sortBy(satellite => satellite.orbit.semiMajorAxis);
    }

    findByName(name) {
        if (this.name === name) {
            return this;
        }

        for (const satellite of this._satellites) {
            const body = satellite.findByName(name);
            if (body) {
                return body;
            }
        }

        return null;
    }

    addSatellite(satellite) {
        this._satellites = this._satellites.withMutations(satellites => {
            satellites.push(satellite).sortBy(satellite => satellite.orbit.semiMajorAxis);
        });
    }

    clone(parentBody=null) {
        let clonedBody = new Body({
            name: this.name,
            radius: this.radius,
            mass: this.mass,
            atmosphereHeight: this.atmosphereHeight,
            highSpaceBorder: this.highSpaceBorder,
            rotationalPeriod: this.rotationalPeriod,
            tidallyLocked: this.tidallyLocked,
            orbit: this.orbit ? this.orbit.clone(parentBody) : null,
            sphereOfInfluence: this.sphereOfInfluenceManual
        });

        clonedBody._satellites = this._satellites.map(satellite => satellite.clone(clonedBody));

        return clonedBody;
    }
}


import { List} from 'immutable';
import { GRAVITATIONAL_CONSTANT, GRAVITY, PI } from './consts';
import { noAtmosphere } from './atmosphere';

export default class Body {
    constructor({
            name,
            radius,
            mass=null,
            geeAsl=null,
            mu=null,
            atmosphere=noAtmosphere(),
            highSpaceAltitude=0,
            rotationalPeriod=null,
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
        this.atmosphere = atmosphere;
        this.highSpaceAltitude = highSpaceAltitude;
        this.tidallyLocked = tidallyLocked;
        if (tidallyLocked && orbit) {
            const sign = rotationalPeriod === null || rotationalPeriod >= 0 ? 1 : -1;
            this.rotationalPeriod = orbit.period * sign;
        } else if (orbit) {
            this.rotationalPeriod = rotationalPeriod * orbit.period / (orbit.period  + rotationalPeriod);
        } else {
            this.rotationalPeriod = rotationalPeriod;
        }
        this.orbit = orbit;
        if (this.orbit) {
            this.orbit.mu = this.mu;
        }
        this._satellites = List(satellites);
        this.sphereOfInfluenceManual = sphereOfInfluence;
    }

    get equitorialCircumference() {
        return 2 * PI * this.radius;
    }

    get solarDayLength() {
        if (!this.orbit) {
            return this.rotationalPeriod;
        }
        return  (this.orbit.period * this.rotationalPeriod) / (this.orbit.period - this.rotationalPeriod);
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
            atmosphere: this.atmosphere.clone(),
            highSpaceAltitude: this.highSpaceAltitude,
            rotationalPeriod: this.rotationalPeriod,
            tidallyLocked: this.tidallyLocked,
            orbit: this.orbit ? this.orbit.clone(parentBody) : null,
            sphereOfInfluence: this.sphereOfInfluenceManual
        });

        clonedBody._satellites = this._satellites.map(satellite => satellite.clone(clonedBody));

        return clonedBody;
    }
}


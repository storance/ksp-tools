import {GRAVITATIONAL_CONSTANT, PI} from './consts.js';

export default class Body {
    constructor({
            name,
            radius,
            mass,
            atmosphereHeight = 0,
            highSpaceBorder = 0,
            rotationalPeriod = null,
            tidallyLocked=false,
            orbit=null,
            sphereOfInfluence=null,
            satellites=[]}) {

        if (orbit && !orbit.parentBody) {
            console.log(name + " has no parent body");
        }

        this.name = name;
        this.radius = radius;
        this.mass = mass;
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
        this.satellites = satellites;
        if (sphereOfInfluence !== null) {
            this.sphereOfInfluenceManual = sphereOfInfluence;
        } else {
            this.sphereOfInfluenceManual = null;
        }
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

        clonedBody.satellites = this.satellites.map(satellite => satellite.clone(clonedBody));

        return clonedBody;
    }
}


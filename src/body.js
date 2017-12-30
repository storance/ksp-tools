import {GRAVITATIONAL_CONSTANT} from './consts.js';

export default class Body {
    constructor(name, radius, mass, atmosphereHeight, rotationalPeriod, orbit=null, satellites=[]) {
        this.name = name;
        this.radius = radius;
        this.mass = mass;
        this.atmosphereHeightMeters = atmosphereHeightMeters;
        this.lowSpaceBorder = lowSpaceBorder;
        this.rotationalPeriod = rotationalPeriod;
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
        return this.mu / Math.pow(this.radius, 2);
    }

    get sphereOfInfluence() {
        if (this.isSun) {
            return Infinity;
        }

        return Math.pow(this.orbit.semiMajorAxis * (this.mass / this.parentBody.mass), 0.4);
    }

    get parentBody() {
        if (this.isSun) {
            return null;
        }

        return this.orbit.parentBody;
    }

    get isSun() {
        return this.orbit == null;
    }

    findByName(name) {
        if (this.name == name) {
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
            this.aslGravity,
            this.atmosphereHeight,
            this.lowSpaceBorder,
            this.rotationalPeriod,
            this.orbit ? this.orbit.clone() : null,
            this.isHomeWorld);

        this.satellites.forEach(satellite => {
           let clonedSatellite = satellite.clone();
           clonedBody.addSatellite(satellite); 
        });

        return clonedBody;
    }
}


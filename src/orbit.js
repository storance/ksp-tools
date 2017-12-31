import {PI} from './consts.js';

export default class Orbit {
    constructor(parentBody, semiMajorAxis, eccentricity, inclination, longitudeOfAscendingNode=null, argumentOfPeriapsis=null, meanAnomoloyAtEpoch=null) {
        this.parentBody = parentBody;
        this.semiMajorAxis = semiMajorAxis;
        this.eccentricity = eccentricity;
        this.inclination = inclination;
        this.longitudeOfAscendingNode = longitudeOfAscendingNode;
        this.argumentOfPeriapsis = argumentOfPeriapsis;
        this.meanAnomoloyAtEpoch = meanAnomoloyAtEpoch;
    }

    get radiusOfApoapsis() {
        return this.semiMajorAxis * (1 + this.eccentricity);
    }

    get radiusOfPeriapsis() {
        return this.semiMajorAxis * (1 - this.eccentricity);
    }

    get apoapsis() {
        return this.radiusOfApoapsis - parentBody.radius;
    }

    get periapsis() {
        return this.radiusOfPeriapsis - parentBody.radius;
    }

    get apoapsisVelocity() {
        return this.velocityAtRadius(this.radiusOfApoapsis);
    }

    get periapsisVelocity() {
        return this.velocityAtRadius(this.radiusOfPeriapsis);
    }

    get semiLatusRectum() {
        let ra = this.radiusOfApoapsis;
        let rp = this.radiusOfPeriapsis;

        return (2 * ra * rp) / (ra + rp);
    }

    get semiMinorAxis() {
        let ra = this.radiusOfApoapsis;
        let rp = this.radiusOfPeriapsis;
        return Math.sqrt(ra * rp);
    }

    get specificAngularMomentum() {
        return Math.sqrt(this.semiLatusRectum * this.parentBody.mu);
    }

    get period() {
        return 2 * PI * Math.sqrt( Math.pow(this.semiMajorAxis, 3) / this.parentBody.mu);
    }

    velocityAtAltitude(altitude) {
        return this.velocityAtRadius(altitude + this.radius);
    }

    velocityAtRadius(radius) {
        return Math.sqrt(this.parentBody.mu * ((2 / radius) - (1 / this.semiMajorAxis)));
    }

    clone() {
        return new Orbit(
            this.parentBody,
            this.semiMajorAxis,
            this.eccentricity,
            this.inclination,
            this.longitudeOfAscendingNode,
            this.argumentOfPeriapsis,
            this.meanAnomoloyAtEpoch);
    }
}
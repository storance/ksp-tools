import {PI} from './consts.js';
import { toRadians } from './utils.js';

export default class Orbit {
    constructor(parentBody, semiMajorAxis, eccentricity, inclination=null, longitudeOfAscendingNode=null, argumentOfPeriapsis=null, meanAnomoloyAtEpoch=null) {
        this.parentBody = parentBody;
        this.semiMajorAxis = semiMajorAxis;
        this.eccentricity = eccentricity;
        this.inclination = inclination;
        this.longitudeOfAscendingNode = longitudeOfAscendingNode;
        this.argumentOfPeriapsis = argumentOfPeriapsis;
        this.meanAnomoloyAtEpoch = meanAnomoloyAtEpoch;
    }

    static fromApAndPe(parentBody, ap, pe) {
        const ra = ap + parentBody.radius;
        const rp = pe + parentBody.radius;
        const semiMajorAxis = (ra + rp) / 2;
        const eccentricity = (ra - rp) / (ra + rp);

        return new Orbit(parentBody, semiMajorAxis, eccentricity);
    }

    static fromApAndPeriod(parentBody, ap, period) {
        const semiMajorAxis = Math.pow(Math.pow(period / (2 * PI), 2) * parentBody.mu, 1/3);
        const ra = ap + orbitingBody.radius;
        const rp = (2 * semiMajorAxis) - ra;
        const eccentricity = (ra - rp) / (ra + rp);

        return new Orbit(parentBody, semiMajorAxis, eccentricity);
    }

    static fromPeAndPeriod(parentBody, pe, period) {
        const semiMajorAxis = Math.pow(Math.pow(period / (2 * PI), 2) * parentBody.mu, 1/3);
        const rp = pe + parentBody.radius;
        const ra = (2 * semiMajorAxis) - rp;
        const eccentricity = (ra - rp) / (ra + rp);

        return new Orbit(parentBody, semiMajorAxis, eccentricity);
    }

    get hasInclination() {
        return this.inclination !== null;
    }

    get hasLongitudeOfAscendingNode() {
        return this.longitudeOfAscendingNode !== null;
    }

    get hasArgumentOfPeriapsis() {
        return this.argumentOfPeriapsis !== null;
    }

    get hasMeanAnomoloyAtEpoch() {
        return this.meanAnomoloyAtEpoch !== null;
    }

    get radiusOfApoapsis() {
        return this.semiMajorAxis * (1 + this.eccentricity);
    }

    get radiusOfPeriapsis() {
        return this.semiMajorAxis * (1 - this.eccentricity);
    }

    get apoapsis() {
        return this.radiusOfApoapsis - this.parentBody.radius;
    }

    get periapsis() {
        return this.radiusOfPeriapsis - this.parentBody.radius;
    }

    get apoapsisVelocity() {
        return this.velocityAtRadius(this.radiusOfApoapsis);
    }

    get periapsisVelocity() {
        return this.velocityAtRadius(this.radiusOfPeriapsis);
    }

    get meanAnomoloyAtEpochRadians() {
        if (this.hasMeanAnomoloyAtEpoch) {
            return toRadians(this.meanAnomoloyAtEpoch);
        }

        return null;
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

    clone(parentBody = null) {
        return new Orbit(
            parentBody || this.parentBody,
            this.semiMajorAxis,
            this.eccentricity,
            this.inclination,
            this.longitudeOfAscendingNode,
            this.argumentOfPeriapsis,
            this.meanAnomoloyAtEpoch);
    }
}
export default class Orbit {
    constructor(parentBody, semiMajorAxis, eccentricity, inclination, longitudeAN, argumentPE, meanAnomoloy) {
        this.parentBody = parentBody;
        this.semiMajorAxis = semiMajorAxis;
        this.eccentricity = eccentricity;
        this.inclination = inclination;
        this.longitudeAN = longitudeAN;
        this.argumentPE = argumentPE;
        this.meanAnomoloy = meanAnomoloy;
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
        return Math.sqrt(((1 - this.eccentricity) * this,parentBody.mu) / 
            ((1 + this.eccentricity) * this.semiMajorAxis));
    }

    get periapsisVelocity() {
        return Math.sqrt(((1 + this.eccentricity) * this.parentBody.mu) / 
            ((1 - this.eccentricity) * this.semiMajorAxis));
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
        return 2 * Math.PI * Math.sqrt( Math.pow(this.semiMajorAxis, 3) / this.parentBody.mu);
    }

    clone() {
        return new Orbit(
            this.parentBody,
            this.semiMajorAxis,
            this.eccentricity,
            this.inclination,
            this.longitudeAN,
            this.argumentPE,
            this.meanAnomoloy);
    }
}
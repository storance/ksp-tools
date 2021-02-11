import { PI } from './consts.js';
import { toRadians } from '.';

export default class Orbit {
    constructor({
            parentBody,
            semiMajorAxis,
            eccentricity,
            mu=0,
            inclination=null,
            longitudeOfAscendingNode=null,
            argumentOfPeriapsis=null,
            meanAnomoloyAtEpoch=null,
            meanAnomoloyAtEpochRad=null
        }) {
        this.parentBody = parentBody;
        this.mu = mu;
        this.semiMajorAxis = semiMajorAxis;
        this.eccentricity = eccentricity;
        this.inclination = inclination;
        this.longitudeOfAscendingNode = longitudeOfAscendingNode;
        this.argumentOfPeriapsis = argumentOfPeriapsis;
        if (meanAnomoloyAtEpochRad !== null) {
            this.meanAnomoloyAtEpoch = meanAnomoloyAtEpochRad * 180.0 / PI;
        } else {
            this.meanAnomoloyAtEpoch = meanAnomoloyAtEpoch;
        }
    }

    static from(parentBody, {
        semiMajorAxis=null,
        eccentricity=null,
        apoapsis=null,
        periapsis=null,
        period=null
    }) {
        if (semiMajorAxis != null) {
            if (eccentricity != null) {
                return new Orbit({
                    parentBody,
                    semiMajorAxis,
                    eccentricity
                });
            }

            if (apoapsis != null) {
                const ra = apoapsis + parentBody.radius;
                const rp = (2 * semiMajorAxis) - ra;
                const e = (ra - rp) / (ra + rp);

                return new Orbit({
                    parentBody,
                    semiMajorAxis,
                    eccentricity: e
                });
            }

            if (periapsis != null) {
                const rp = periapsis + parentBody.radius;
                const ra = (2 * semiMajorAxis) - rp;
                const e = (ra - rp) / (ra + rp);

                return new Orbit({
                    parentBody,
                    semiMajorAxis,
                    eccentricity: e
                });
            }
        }

        if (period != null) {
            const sma = Math.pow(Math.pow(period / (2 * PI), 2) * parentBody.mu, 1/3);

            if (eccentricity != null) {
                return new Orbit({
                    parentBody,
                    semiMajorAxis: sma,
                    eccentricity
                });
            }

            if (apoapsis != null) {
                const ra = apoapsis + parentBody.radius;
                const rp = (2 * sma) - ra;
                const e = (ra - rp) / (ra + rp);

                return new Orbit({
                    parentBody,
                    semiMajorAxis: sma,
                    eccentricity: e
                });
            }

            if (periapsis != null) {
                const rp = periapsis + parentBody.radius;
                const ra = (2 * sma) - rp;
                const e = (ra - rp) / (ra + rp);

                return new Orbit({
                    parentBody,
                    semiMajorAxis: sma,
                    eccentricity: e
                });
            }
        }

        if (eccentricity != null) {
            if (apoapsis != null) {
                const ra = apoapsis + parentBody.radius;
                const sma = ra / (1 + e);

                return new Orbit({
                    parentBody,
                    semiMajorAxis: sma,
                    eccentricity
                });
            }

            if (periapsis != null) {
                const rp = periapsis + parentBody.radius;
                const sma = rp / (1 - e);

                return new Orbit({
                    parentBody,
                    semiMajorAxis: sma,
                    eccentricity
                });
            }
        }

        if (apoapsis != null && periapsis != null) {
            const ra = apoapsis + parentBody.radius;
            const rp = periapsis + parentBody.radius;
            const sma = (ra + rp) / 2;
            const e = (ra - rp) / (ra + rp);

            return new Orbit({
                parentBody,
                semiMajorAxis: sma,
                eccentricity: e
            });
        }

        return null;
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
        return 2 * PI * Math.sqrt( Math.pow(this.semiMajorAxis, 3) / (this.parentBody.mu + this.mu));
    }

    velocityAtAltitude(altitude) {
        return this.velocityAtRadius(altitude + this.radius);
    }

    velocityAtRadius(radius) {
        return Math.sqrt(this.parentBody.mu * ((2 / radius) - (1 / this.semiMajorAxis)));
    }

    clone(parentBody = null) {
        return new Orbit({
            parentBody: parentBody || this.parentBody,
            semiMajorAxis: this.semiMajorAxis,
            eccentricity: this.eccentricity,
            inclination: this.inclination,
            longitudeOfAscendingNode: this.longitudeOfAscendingNode,
            argumentOfPeriapsis: this.argumentOfPeriapsis,
            meanAnomoloyAtEpoch: this.meanAnomoloyAtEpoch
        });
    }
}
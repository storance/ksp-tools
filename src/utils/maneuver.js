import Orbit from './orbit.js';

export const PERIAPSIS = "PERIAPSIS";
export const APOAPSIS = "APOAPSIS";

export const RETROGRADE = "RETROGRADE";
export const PROGRADE = "PROGRADE";

export class ManeuverBurn {
    constructor(location, deltav) {
        this.location = location;
        this.direction = deltav < 0 ? RETROGRADE : PROGRADE;
        this.deltav = Math.abs(deltav);
    }
};

export class ManeuverPlan {
    constructor(body, currentAp, currentPe, desiredAp, desiredPe) {
        this.burns = []

        const currentOrbit = Orbit.fromApAndPe(body, currentAp, currentPe);
        const desiredOrbit = Orbit.fromApAndPe(body, desiredAp, desiredPe);
        if (currentPe === desiredPe) {
            // burn at periapsis to change apoapsis
            this.burns.push(new ManeuverBurn(PERIAPSIS, desiredOrbit.periapsisVelocity - currentOrbit.periapsisVelocity));
        } else if (currentAp === desiredAp) {
            // burn at apoapsis to change periapsis
            this.burns.push(new ManeuverBurn(APOAPSIS, desiredOrbit.apoapsisVelocity - currentOrbit.apoapsisVelocity));
        } else if (currentAp === desiredPe) {
            // burn at apoapsis to increase periapsis to be the new apoapsis
            this.burns.push(new ManeuverBurn(APOAPSIS, PROGRADE, desiredOrbit.periapsisVelocity - currentOrbit.apoapsisVelocity));
        } else {
            // two burns
            if (currentPe > desiredAp) {
                const intermediateOrbit = Orbit.fromApAndPe(body, currentPe, desiredAp);
                this.burns.push(new ManeuverBurn(PERIAPSIS, intermediateOrbit.apoapsisVelocity - currentOrbit.periapsisVelocity));
                this.burns.push(new ManeuverBurn(PERIAPSIS, desiredOrbit.periapsisVelocity - intermediateOrbit.periapsisVelocity));
            } else {
                const intermediateOrbit = Orbit.fromApAndPe(body, desiredAp, currentPe);
                this.burns.push(new ManeuverBurn(PERIAPSIS, intermediateOrbit.periapsisVelocity - currentOrbit.periapsisVelocity));
                this.burns.push(new ManeuverBurn(APOAPSIS, desiredOrbit.apoapsisVelocity - intermediateOrbit.apoapsisVelocity));
            }
        }
    }

    get totalDeltaV() {
        return this.burns.map(burn => burn.deltav).reduce((total, burndv) => total + burndv);
    }
};
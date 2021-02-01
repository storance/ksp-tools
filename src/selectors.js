import { lookupBody } from './utils';

export class CoreSelector {
    static getSelectedPlanetPack(state) {
        return state.getIn(['core', 'selectedPlanetpack']);
    }

    static getSelectedRescale(state) {
        return state.getIn(['core', 'selectedRescale']);
    }

    static getPlanetPack(state) {
        return state.getIn(['core', 'planetpack']);
    }
}

class SingleBodySelector extends CoreSelector {
    static reducerName = '';

    static getBody(state) {
        let planetpack = this.getPlanetPack(state);
        let bodyName = state.getIn([this.reducerName, 'body']);

        return lookupBody(bodyName, planetpack);
    }
}

export class BodyInformationSelector extends SingleBodySelector {
    static reducerName = 'bodyInformation';
}

export class OrbitInformationSelector extends SingleBodySelector {
    static reducerName = 'orbitInformation';

    static getApoapsis(state) {
        return state.getIn([this.reducerName, 'apoapsis']);
    }

    static getPeriapsis(state) {
        return state.getIn([this.reducerName, 'periapsis']);
    }

    static getPeriod(state) {
        return state.getIn([this.reducerName, 'period']);
    }

    static getMode(state) {
        return state.getIn([this.reducerName, 'mode']);
    }

    static getOrbit(state) {
        return state.getIn([this.reducerName, 'orbit']);
    }
}

export class DarknessTimeSelector extends SingleBodySelector {
    static reducerName = 'darknessTime';

    static getApoapsis(state) {
        return state.getIn([this.reducerName, 'apoapsis']);
    }

    static getPeriapsis(state) {
        return state.getIn([this.reducerName, 'periapsis']);
    }

    static getDarknessTimeComputed(state) {
        return state.getIn([this.reducerName, 'darknessTimeComputed']);
    }

    static getDarknessTime(state) {
        return state.getIn([this.reducerName, 'darknessTime']);
    }

    static getEnergyUse(state) {
        return state.getIn([this.reducerName, 'energyUse']);
    }

    static getEnergyCapacity(state) {
        return state.getIn([this.reducerName, 'energyCapacity']);
    }
}

export class AscentPlannerSelector extends SingleBodySelector {
    static reducerName = 'ascentPlanner';

    static getAltitude(state) {
        return state.getIn([this.reducerName, 'altitude']);
    }

    static getAscentDeltaV(state) {
        return state.getIn([this.reducerName, 'ascentDeltaV']);
    }
}

export class ManeuverPlannerSelector extends SingleBodySelector {
    static reducerName = 'maneuverPlanner';

    static getCurrentApoapsis(state) {
        return state.getIn([this.reducerName, 'currentApoapsis']);
    }

    static getCurrentPeriapsis(state) {
        return state.getIn([this.reducerName, 'currentPeriapsis']);
    }

    static getDesiredApoapsis(state) {
        return state.getIn([this.reducerName, 'desiredApoapsis']);
    }

    static getDesiredPeriapsis(state) {
        return state.getIn([this.reducerName, 'desiredPeriapsis']);
    }

    static getManeuverPlan(state) {
        return state.getIn([this.reducerName, 'maneuverPlan']);
    }
}

export class ConstellationSingleLaunchSelector extends SingleBodySelector {
    static reducerName = 'constellationSingleLaunch';

    static getApoapsis(state) {
        return state.getIn([this.reducerName, 'apoapsis']);
    }

    static getPeriapsis(state) {
        return state.getIn([this.reducerName, 'periapsis']);
    }

    static getSatelliteCount(state) {
        return state.getIn([this.reducerName, 'satelliteCount']);
    }

    static getTransferOrbits(state) {
        return state.getIn([this.reducerName, 'transferOrbits']);
    }
}

export class ConstellationMultipleLaunchSelector extends SingleBodySelector {
    static reducerName = 'constellationMultipleLaunch';

    static getApoapsis(state) {
        return state.getIn([this.reducerName, 'apoapsis']);
    }

    static getPeriapsis(state) {
        return state.getIn([this.reducerName, 'periapsis']);
    }

    static getSatelliteCount(state) {
        return state.getIn([this.reducerName, 'satelliteCount']);
    }

    static getSeparation(state) {
        return state.getIn([this.reducerName, 'separation']);
    }
}

export class AntennaRangeSelector extends CoreSelector {
    static reducerName = 'antennaRange';
}

export class ConstellationMinOrbitSelector extends SingleBodySelector {
    static reducerName = 'constellationMinOrbit';
}

export class TransferWindowSelector extends CoreSelector {
    static reducerName = 'transferWindow';
}
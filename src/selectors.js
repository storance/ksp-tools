import { Map } from 'immutable';
import { lookupBody } from './utils';

export class ProfilesSelector {
    static reducerName = 'profiles';

    static getAllById(state) {
        return state.getIn([this.reducerName, 'allById']);
    }

    static getActiveId(state) {
        return state.getIn([this.reducerName, 'activeId']);
    }

    static getActive(state) {
        return state.getIn([this.reducerName, 'active']);
    }

    static getForm(state) {
        return new ProfileForm(state.getIn([this.reducerName, 'form']));
    }
}

export class BaseSelector {
    static getPlanetPack(state) {
        return ProfilesSelector.getActive(state).planetpack;
    }

    static getActiveProfile(state) {
        return ProfilesSelector.getActive(state);
    }
}

class SingleBodySelector extends BaseSelector {
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

    static getSemiMajorAxis(state) {
        return state.getIn([this.reducerName, 'semiMajorAxis']);
    }

    static getEccentricity(state) {
        return state.getIn([this.reducerName, 'eccentricity']);
    }

    static getFirstElement(state) {
        return state.getIn([this.reducerName, 'firstElement']);
    }

    static getSecondElement(state) {
        return state.getIn([this.reducerName, 'secondElement']);
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

export class AntennaRangeSelector extends BaseSelector {
    static reducerName = 'antennaRange';

    static getDsnLevel(state) {
        return state.getIn([this.reducerName, 'dsnLevel']);
    }

    static getVesselAntennas(state) {
        return state.getIn([this.reducerName, 'vesselAntennas']);
    }

    static getVesselAntennasForm(state) {
        return new VesselAntennasForm(state.getIn([this.reducerName, 'vesselAntennasForm']));
    }

    static getSignalToBodies(state) {
        return state.getIn([this.reducerName, 'signalToBodies']);
    }
}

export class VesselAntennasForm {
    constructor(state) {
        this.state = state;
    }

    isShow() {
        return this.state.get('show');
    }

    getIndex() {
        return this.state.get('index');
    }

    getAntennaName() {
        return this.state.get('antennaName');
    }

    getAntenna() {
        return this.state.get('antenna');
    }

    getType() {
        return this.state.get('type');
    }

    getPower() {
        return this.state.get('power');
    }

    isCombinable() {
        return this.state.get('combinable');
    }

    getCombinabilityExponent() {
        return this.state.get('combinabilityExponent');
    }

    getFeedScale() {
        return this.state.get('feedScale');
    }

    getReflectorName() {
        return this.state.get('reflectorName');
    }

    getReflector() {
        return this.state.get('reflector');
    }

    getReflectorAddedPower() {
        return this.state.get('reflectorAddedPower');
    }

    getCount() {
        return this.state.get('count');
    }
}

export class ConstellationMinOrbitSelector extends SingleBodySelector {
    static reducerName = 'constellationMinOrbit';

    static getSatelliteCount(state) {
        return state.getIn([this.reducerName, 'satelliteCount']);
    }

    static getMinOrbit(state) {
        return state.getIn([this.reducerName, 'minOrbit']);
    }
}

export class TransferWindowSelector extends BaseSelector {
    static reducerName = 'transferWindow';
}

export class ProfileForm {
    constructor(state) {
        this.state = state || Map({
            'show' : false
        });
    }

    getId() {
        return this.state.get('id');
    }

    getName() {
        return this.state.get('name');
    }

    getPlanetPack() {
        return this.state.get('planetpack');
    }

    getRescale() {
        return this.state.get('rescale');
    }

    getDifficultyPreset() {
        return this.state.get('difficultyPreset');
    }

    getDsnModifier() {
        return this.state.get('dsnModifier');
    }

    getRangeModifier() {
        return this.state.get('rangeModifier');
    }

    isUseCustomDsnLevels() {
        return this.state.get('useCustomDsnLevels');
    }

    getCustomDsnLevels() {
        return this.state.get('customDsnLevels');
    }

    getAtmOcclusion() {
        return this.state.get('atmOcclusion');
    }

    getVacOcclusion() {
        return this.state.get('vacOcclusion');
    }

    isShow() {
        return this.state.get('show');
    }
}
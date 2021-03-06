export function updatePlanetPack(planetpack) {
    return {
        type: 'CORE.UPDATE_PLANET_PACK',
        payload: {
            planetpack
        }
    };
}

export function updateRescale(rescale) {
    return {
        type: 'CORE.UPDATE_RESCALE',
        payload: {
            rescale
        }
    };
}

export function updateBodyInformation(field, value) {
    return {
        type: 'BODY_INFORMATION.FORM_UPDATE',
        payload: {
            field,
            value
        }
    };
}

export function updateOrbitInformation(field, value) {
    return {
        type: 'ORBIT_INFORMATION.FORM_UPDATE',
        payload: {
            field,
            value
        }
    };
}

export function calculateOrbitInformation() {
    return {
        type: 'ORBIT_INFORMATION.CALCULATE'
    };
}

export function updateDarknessTime(field, value) {
    return {
        type: 'DARKNESS_TIME.FORM_UPDATE',
        payload: {
            field,
            value
        }
    };
}

export function calculateDarknessTime() {
    return {
        type: 'DARKNESS_TIME.CALCULATE_DARKNESS_TIME'
    };
}

export function calculateBatteryStorage() {
    return {
        type: 'DARKNESS_TIME.CALCULATE_BATTERY_STORAGE'
    };
}

export function updateAntennaRange(field, value) {
    return {
        type: 'ANTENNA_RANGE.FORM_UPDATE',
        payload: {
            field,
            value
        }
    };
}

export function addVesselAntenna() {
    return {
        type: 'ANTENNA_RANGE.VESSEL.ADD_ANTENNA'
    };
}

export function deleteVesselAntenna(index) {
    return {
        type: 'ANTENNA_RANGE.VESSEL.DELETE_ANTENNA',
        payload: {
            index
        }
    };
}

export function editVesselAntenna(index) {
    return {
        type: 'ANTENNA_RANGE.VESSEL.EDIT_ANTENNA',
        payload: {
            index
        }
    };
}

export function saveVesselAntenna() {
    return {
        type: 'ANTENNA_RANGE.VESSEL.FORM_SAVE'
    };
}

export function cancelVesselAntenna() {
    return {
        type: 'ANTENNA_RANGE.VESSEL.FORM_CANCEL'
    };
}

export function updateVesselAntennaForm(field, value) {
    return {
        type: 'ANTENNA_RANGE.VESSEL.FORM_UPDATE',
        payload: {
            field,
            value
        }
    };
}

export function calculateSignal() {
    return {
        type: 'ANTENNA_RANGE.CALCULATE_SIGNAL',
    };
}

export function updateConstellationSingleLaunch(field, value) {
    return {
        type: 'CONSTELLATION.SINGLE_LAUNCH.FORM_UPDATE',
        payload: {
            field,
            value
        }
    };
}

export function calculateConstellationSingleLaunch() {
    return {
        type: 'CONSTELLATION.SINGLE_LAUNCH.CALCULATE'
    };
}

export function updateConstellationMultipleLaunch(field, value) {
    return {
        type: 'CONSTELLATION.MUTIPLE_LAUNCH.FORM_UPDATE',
        payload: {
            field,
            value
        }
    };
}

export function calculateConstellationMultipleLaunch() {
    return {
        type: 'CONSTELLATION.MUTIPLE_LAUNCH.CALCULATE'
    };
}

export function updateConstellationMinOrbit(field, value) {
    return {
        type: 'CONSTELLATION.MIN_ORBIT.FORM_UPDATE',
        payload: {
            field,
            value
        }
    };
}

export function calculateConstellationMinOrbit() {
    return {
        type: 'CONSTELLATION.MIN_ORBIT.CALCULATE'
    };
}

export function updateAscentDeltaV(field, value) {
    return {
        type: 'ASCENT_PLANNER.FORM_UPDATE',
        payload: {
            field,
            value
        }
    };
}

export function calculateAscentDeltaV() {
    return {
        type: 'ASCENT_PLANNER.CALCULATE'
    };
}

export function updateManeuverDeltaV(field, value) {
    return {
        type: 'MANEUVER_PLANNER.FORM_UPDATE',
        payload: {
            field,
            value
        }
    };
}

export function calculateManeuverDeltaV() {
    return {
        type: 'MANEUVER_PLANNER.CALCULATE'
    };
}

export function selectProfile(id) {
    return {
        type: 'PROFILES.SELECT',
        payload: {
            id
        }
    };
}

export function addProfile() {
    return {
        type: 'PROFILES.ADD'
    };
}

export function editProfile(id) {
    return {
        type: 'PROFILES.EDIT',
        payload: {
            id
        }
    };
}

export function cloneProfile(id) {
    return {
        type: 'PROFILES.CLONE',
        payload: {
            id
        }
    };
}

export function deleteProfile(id) {
    return {
        type: 'PROFILES.DELETE',
        payload: {
            id
        }
    }
}

export function addCustomDsnLevel() {
    return {
        type: 'PROFILES.FORM.ADD_CUSTOM_DSN_LEVEL'
    };
}

export function deleteCustomDsnLevel(index) {
    return {
        type: 'PROFILES.FORM.DELETE_CUSTOM_DSN_LEVEL',
        payload: {
            index
        }
    };
}

export function updateProfileForm(field, value) {
    return {
        type: 'PROFILES.FORM.UPDATE',
        payload: {
            field,
            value
        }
    };
}

export function applyProfileDifficultySettings(field, value) {
    return {
        type: 'PROFILES.FORM.APPLY_PRESET',
        payload: {
            preset: value
        }
    };
}

export function saveProfile() {
    return {
        type: 'PROFILES.FORM.SAVE'
    };
}

export function cancelProfileForm() {
    return {
        type: 'PROFILES.FORM.CANCEL'
    };
}
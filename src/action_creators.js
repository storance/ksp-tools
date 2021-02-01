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
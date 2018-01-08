export function updatePlanetPack(planetpack) {
    return {
        type: 'CELESTIAL_BODY.UPDATE_PLANET_PACK',
        planetpack
    };
}

export function updateRescale(rescale) {
    return {
        type: 'CELESTIAL_BODY.UPDATE_RESCALE',
        rescale
    };
}

export function updateBody(body) {
    return {
        type: 'CELESTIAL_BODY.UPDATE_BODY',
        body
    };
}

export function updateOrbitInformation(field, value) {
    return {
        type: 'ORBIT_INFORMATION.FORM_UPDATE',
        field,
        value
    };
}

export function calculateOrbitInformation(orbitingBody) {
    return {
        type: 'ORBIT_INFORMATION.CALCULATE',
        orbitingBody
    };
}

export function updateManeuverPlanner(field, value) {
    return {
        type: 'MANEUVER_PLANNER.FORM_UPDATE',
        field,
        value
    };
}

export function calculateManeuverPlan(orbitingBody) {
    return {
        type: 'MANEUVER_PLANNER.CALCULATE',
        orbitingBody
    };
}

export function updateDarknessTime(field, value) {
    return {
        type: 'DARKNESS_TIME.FORM_UPDATE',
        field,
        value
    };
}

export function calculateDarknessTime(orbitingBody) {
    return {
        type: 'DARKNESS_TIME.CALCULATE_DARKNESS_TIME',
        orbitingBody
    };
}

export function calculateBatteryStorage() {
    return {
        type: 'DARKNESS_TIME.CALCULATE_BATTERY_STORAGE'
    };
}

export function updateSatelliteSingleLaunch(field, value) {
    return {
        type: 'SATELLITE.SINGLE_LAUNCH.FORM_UPDATE',
        field,
        value
    };
}

export function calculateSatelliteSingleLaunch(orbitingBody) {
    return {
        type: 'SATELLITE.SINGLE_LAUNCH.CALCULATE',
        orbitingBody
    };
}

export function updateSatelliteMultipleLaunch(field, value) {
    return {
        type: 'SATELLITE.MUTIPLE_LAUNCH.FORM_UPDATE',
        field,
        value
    };
}

export function calculateSatelliteMultipleLaunch(orbitingBody) {
    return {
        type: 'SATELLITE.MUTIPLE_LAUNCH.CALCULATE',
        orbitingBody
    };
}

export function updateDeltavMap(field, value) {
    return {
        type: 'DELTAVMAP.FORM_UPDATE',
        field,
        value
    };
}

export function calculateAscentDeltav(orbitingBody) {
    return {
        type: 'DELTAVMAP.CALCULATE',
        orbitingBody
    };
}
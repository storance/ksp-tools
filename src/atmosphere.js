import { List} from 'immutable';
import {GRAVITATIONAL_CONSTANT, GRAVITY, PI} from './consts';

export class Atmosphere {
    constructor({
        enabled = false,
        hasOxygen = null,
        height = null,
        flyingHighAltitude = null
    }) {
        this.enabled = enabled;
        this.hasOxygen = hasOxygen;
        this.height = height;
        this.flyingHighAltitude = flyingHighAltitude;
    }

    clone() {
        return new Atmosphere({
            enabled: this.enabled,
            hasOxygen: this.hasOxygen,
            height: this.height,
            flyingHighAltitude: this.flyingHighAltitude
        });
    }
}

export function noAtmosphere() {
    return new Atmosphere({
        enabled: false,
        hasOxygen: null,
        height: null
    })
}

export function atmosphere(height, flyingHighAltitude) {
    return new Atmosphere({
        enabled: true,
        hasOxygen: false,
        height: height,
        flyingHighAltitude: flyingHighAltitude
    })
}

export function atmosphereWithOxygen(height, flyingHighAltitude) {
    return new Atmosphere({
        enabled: true,
        hasOxygen: true,
        height: height,
        flyingHighAltitude: flyingHighAltitude
    })
}
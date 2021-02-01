import { Map } from 'immutable';
import { Orbit, convertAltitudeToMeters, formUpdate, lookupBody, resetBodyOnPlanetPackUpdate } from '../utils';
import { validatePositiveNumberField } from '../validators';

const initialState = Map({
});

export default function(state = initialState, action) {
    return state;
}
import { Map } from 'immutable';
import { Orbit, convertAltitudeToMeters, formUpdate, lookupBody, resetBodyOnPlanetPackUpdate } from '../utils';
import { validatePositiveNumberField } from '../validators';

const initialState = Map({
    dsnRangeMultiplier: Map({
        value: '1.0',
        error: null
    }),
    antennaRangeMultiplier: Map({
        value: '1.0',
        error: null
    }),
    dsnLevel: 'level1',
    dsnCustomPower: {
        value: '',
        units: 'G',
        error: null
    }
});

export default function(state = initialState, action) {
    switch (action.type) {
        case 'ANTENNA_RANGE.FORM_UPDATE':
            return formUpdate(state, action.payload.field, action.payload.value);
    }
    return state;
}
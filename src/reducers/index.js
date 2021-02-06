import { Map } from 'immutable';
import core from './core';
import antennaRange from './antennaRange';
import ascentPlanner from './ascentPlanner';
import bodyInformation from './bodyInformation';
import constellationMinOrbit from './constellationMinOrbit';
import constellationMultipleLaunch from './constellationMultipleLaunch';
import constellationSingleLaunch from './constellationSingleLaunch';
import darknessTime from './darknessTime';
import maneuverPlanner from './maneuverPlanner';
import transferWindow from './transferWindow';
import profiles from './profiles';

import orbitInformation from './orbitInformation';

const reducers = {
    antennaRange,
    ascentPlanner,
    bodyInformation,
    constellationMinOrbit,
    constellationMultipleLaunch,
    constellationSingleLaunch,
    darknessTime,
    maneuverPlanner,
    orbitInformation,
    profiles,
    transferWindow
}

export default function rootReducer(state = Map(), action) {
    const reducerKeys = Object.keys(reducers);
    const planetpack = state.getIn(['core', 'planetpack']);

    return state.withMutations((tempState) => {
        tempState.set('core', core(tempState.get('core'), action));

        reducerKeys.forEach((reducerName) => {
            const reducer = reducers[reducerName];
            const currentState = tempState.get(reducerName);
            const nextState = reducer(currentState, {...action, planetpack});

            tempState.set(reducerName, nextState);
        });
    });
};
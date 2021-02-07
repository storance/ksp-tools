import { Map } from 'immutable';
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
    const activeProfile = state.getIn(['profiles', 'active']);

    return state.withMutations(tempState => {
        tempState.set('profiles', profiles(tempState.get('profiles'), action));

        reducerKeys.forEach(reducerName => {
            const reducer = reducers[reducerName];
            const currentState = tempState.get(reducerName);
            const nextState = reducer(currentState, {...action, activeProfile});

            tempState.set(reducerName, nextState);
        });
    });
};
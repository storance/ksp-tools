import { Map } from 'immutable';

export function loadState() {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }

        return Map().mergeDeep(JSON.parse(serializedState));
    } catch (err) {
        return undefined;
    }
};

export const saveStateMiddleware = store => next => action => {
    const result = next(action);
    const state = store.getState();

    let persistState = {
        celestialBody : state.get('celestialBody').delete('body').delete('selectedBody').delete('selectedPlanetPack').toJS()
    };

    try {
        const serializedState = JSON.stringify(persistState);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        // ignore
    }

    return result;
};
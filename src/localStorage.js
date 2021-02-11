import { fromJS } from 'immutable';
import { Profile } from './utils';

export function loadState() {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }

        return fromJS(convertProfiles(JSON.parse(serializedState)));
    } catch (err) {
        console.log(err);
        return undefined;
    }
};

function convertProfiles(state) {
    for (var key of Object.keys(state.profiles.allById)) {
        state.profiles.allById[key] = new Profile(state.profiles.allById[key]);
    }

    return state;
}

export const saveStateMiddleware = store => next => action => {
    const result = next(action);
    const state = store.getState();
    const profilesState = state.get('profiles');

    let persistState = {
        profiles: profilesState.withMutations(state => {
            state.delete('form');
            state.delete('active');
        }).toJS()
    };

    try {
        const serializedState = JSON.stringify(persistState);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        console.log(err);
        // ignore
    }

    return result;
};
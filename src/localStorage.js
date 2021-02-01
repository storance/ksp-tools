import { fromJS } from 'immutable';

export function loadState() {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }

        return fromJS(JSON.parse(serializedState));
    } catch (err) {
        return undefined;
    }
};

export const saveStateMiddleware = store => next => action => {
    const result = next(action);
    const state = store.getState();
    const coreState = state.get('core');

    let persistState = {
        core : coreState.withMutations(state => {
                state.delete('planetpack')
            }).toJS()
    };

    try {
        const serializedState = JSON.stringify(persistState);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        // ignore
    }

    return result;
};
import { Map } from 'immutable';
import { planetpacks, findPlanetPack } from '../planetpacks';

const initialPlanetPack = planetpacks[0];
const initialRescale = initialPlanetPack.rescales[0];

const initialState = Map({
    'selectedPlanetpack' : initialPlanetPack.name,
    'selectedRescale' : initialRescale.name,
    'planetpack' : initialPlanetPack
});

function applyPlanetpackRescale(state) {
    return state.withMutations(state => {
        let planetpack = state.get('planetpack');

        if (!planetpack) {
            const selectedPlanetpack = findPlanetPack(state.get('selectedPlanetpack'));
            const selectedRescale = selectedPlanetpack.findRescale(state.get('selectedRescale'));

            planetpack = selectedRescale.rescalePlanetPack(selectedPlanetpack);
            state.set('planetpack', planetpack);
        }
    });
}

function updatePlanetpack(state, planetpackName) {
    const planetpack = findPlanetPack(planetpackName);
    return state.withMutations(state => {
        state.set('selectedPlanetpack', planetpackName)
             .set('selectedRescale', planetpack.rescales[0].name)
             .remove('planetpack');
    });
}

function updateRescale(state, rescaleName) {
    return state.withMutations(state => {
        state.set('selectedRescale', rescaleName)
             .remove('planetpack');
    });
}

export default function(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case 'CORE.UPDATE_PLANET_PACK':
            newState = updatePlanetpack(state, action.payload.planetpack);
            break;
        case 'CORE.UPDATE_RESCALE':
            newState = updateRescale(state, action.payload.rescale);
            break;
    }

    return applyPlanetpackRescale(newState);
}
import { Map } from 'immutable';
import { planetpacks, findPlanetPack } from '../planetpacks';
import { rescales, findRescale } from '../rescale';

const initialPlanetPack = planetpacks[0];
const initialRescale = rescales[0];
const initialBody = initialPlanetPack.homeworld;

const initialState = Map({
    'planetpack' : initialPlanetPack.name,
    'rescale' : initialRescale.name,
    'body' : initialBody.name,
    'selectedPlanetPack' : initialPlanetPack,
    'selectedBody' : initialBody
});

function lookupPlanetPackAndBody(state) {
    return state.withMutations(state => {
        let selectedPlanetPack = state.get('selectedPlanetPack');

        if (!selectedPlanetPack) {
            const planetpack = findPlanetPack(state.get('planetpack'));
            const rescale = findRescale(state.get('rescale'));

            selectedPlanetPack = rescale.rescalePlanetPack(planetpack);
            state.set('selectedPlanetPack', selectedPlanetPack);
        }

        if (!state.has('selectedBody')) {
            const body = selectedPlanetPack.findByName(state.get('body'));
            if (!body) {
                state.set('selectedBody', selectedPlanetPack.homeworld);
                state.set('body', selectedPlanetPack.homeworld.name);
            } else {
                state.set('selectedBody', body);
            }
        }
    });
}

function updatePlanetPack(state, planetpackName) {
    const planetpack = findPlanetPack(planetpackName);
    return state.withMutations(state => {
        state.set('planetpack', planetpackName)
             .set('body', planetpack.homeworld.name)
             .remove('selectedPlanetPack')
             .remove('selectedBody')
    });
}

function updateRescale(state, rescale) {
    return state.withMutations(state => {
        state.set('rescale', rescale)
             .remove('selectedPlanetPack')
             .remove('selectedBody')
    });
}

function updateBody(state, body) {
    return state.withMutations(state => {
            state.set('body', body).remove('selectedBody')
    });
}

export default function(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case 'CELESTIAL_BODY.UPDATE_PLANET_PACK':
            newState = updatePlanetPack(state, action.planetpack);
            break;
        case 'CELESTIAL_BODY.UPDATE_RESCALE':
            newState = updateRescale(state, action.rescale);
            break;
        case 'CELESTIAL_BODY.UPDATE_BODY':
            newState = updateBody(state, action.body);
            break;
    }

    return lookupPlanetPackAndBody(newState);
}
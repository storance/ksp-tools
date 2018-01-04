import { Map } from 'immutable';
import { planetpacks, findPlanetPack } from '../planetpack.js';
import { rescales, findRescale } from '../rescale.js';

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
    let selectedPlanetPack = state.get('selectedPlanetPack');
    let newState = state;
    if (!selectedPlanetPack) {
        const planetpack = findPlanetPack(newState.get('planetpack'));
        const rescale = findRescale(newState.get('rescale'));

        selectedPlanetPack = rescale.rescalePlanetPack(planetpack);
        newState = newState.set('selectedPlanetPack', selectedPlanetPack);
    }

    if (!newState.has('selectedBody')) {
        const body = selectedPlanetPack.findByName(newState.get('body'));
        if (!body) {
            newState = newState.set('selectedBody', selectedPlanetPack.homeworld)
                    .set('body', selectedPlanetPack.homeworld.name)
        } else {
            newState = newState.set('selectedBody', body);
        }
    }

    return newState;
}

function updatePlanetPack(state, planetpackName) {
    const planetpack = findPlanetPack(planetpackName);
    return state.set('planetpack', planetpackName)
                .set('body', planetpack.homeworld.name)
                .remove('selectedPlanetPack')
                .remove('selectedBody');
}

function updateRescale(state, rescale) {
    return state.set('rescale', rescale)
                .remove('selectedPlanetPack')
                .remove('selectedBody');
}

function updateBody(state, body) {
    return state.set('body', body)
                .remove('selectedBody');
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
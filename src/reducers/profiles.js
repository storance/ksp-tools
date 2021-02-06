import { Map, List } from 'immutable';
import { DIFFICULTY_PRESETS, DSN_LEVELS, formUpdate, formatNumber, Profile } from '../utils';
import { validatePositiveNumberField } from '../validators';
import { planetpacks, findPlanetPack } from '../planetpacks';

const initialPlanetPack = planetpacks[0];
const initialRescale = initialPlanetPack.rescales[0];

const initialState = Map({
    allById: Map({
        '716a901b-4ae5-4456-b1f0-40db7667dd13': new Profile({
            id: '716a901b-4ae5-4456-b1f0-40db7667dd13',
            name: 'Stock - Normal',
            planetpack: initialPlanetPack.name,
            rescale: initialRescale.name,
            dsnModifier: 1.0,
            rangeModifier: 1.0,
            atmOcclusion: 0.75,
            vacOcclusion: 0.9,
            editable: false
        })
    }),
    activeId: '716a901b-4ae5-4456-b1f0-40db7667dd13',
    form: Map({
        id: '',
        name: Map({
            value: '',
            error: null
        }),
        difficultyPreset: 'Custom',
        planetpack : '',
        rescale: '',
        dsnModifier: Map({
            value: '',
            error: null
        }),
        rangeModifier: Map({
            value: '',
            error: null
        }),
        useCustomDsnLevels: false,
        customDsnLevels: [],
        atmOcclusion: Map({
            value: '',
            error: null
        }),
        vacOcclusion: Map({
            value: '',
            error: null
        })
    }),
    showFormModal : false
});

function addProfile(state) {
    return state.withMutations((tempState) => {
        tempState.setIn(['form', 'id'], '');
        tempState.setIn(['form', 'name', 'value'], '');
        tempState.setIn(['form', 'name', 'error'], null);
        tempState.setIn(['form', 'difficultyPreset'], 'Custom');
        tempState.setIn(['form', 'planetpack'], initialPlanetPack.name);
        tempState.setIn(['form', 'rescale'], initialRescale.name);
        tempState.setIn(['form', 'dsnModifier', 'value'], '1.0');
        tempState.setIn(['form', 'dsnModifier', 'error'], null);
        tempState.setIn(['form', 'rangeModifier', 'value'], '1.0');
        tempState.setIn(['form', 'rangeModifier', 'error'], null);
        tempState.setIn(['form', 'vacOcclusion', 'value'], '1.0');
        tempState.setIn(['form', 'vacOcclusion', 'error'], null);
        tempState.setIn(['form', 'atmOcclusion', 'value'], '1.0');
        tempState.setIn(['form', 'atmOcclusion', 'error'], null);
        tempState.setIn(['form', 'customDsnLevels', 'value'], []);
        tempState.setIn(['form', 'useCustomDsnLevels'], false);
        tempState.setIn(['form', 'customDsnLevels'], List(DSN_LEVELS.map(power => Map({
            'value': power / 1000000000,
            'units': 'G',
            'error': null
        }))));


        tempState.set('showFormModal', true);
    });
}

function cancelProfile(state) {
    return state.set('showFormModal', false);
}

function applyDifficultyPreset(state, presetName) {
    return state.withMutations((tempState) => {
        tempState.setIn(['form', 'difficultyPreset'], presetName);

        if (presetName !== 'Custom') {
            let preset = DIFFICULTY_PRESETS.find(p => p.name === presetName);

            tempState.setIn(['form', 'dsnModifier', 'value'],
                formatNumber(preset.dsnModifier, {fractionDigits: 2}));
            tempState.setIn(['form', 'rangeModifier', 'value'],
                formatNumber(preset.rangeModifier, {fractionDigits: 2}));
            tempState.setIn(['form', 'vacOcclusion', 'value'],
                formatNumber(preset.vacOcclusion, {fractionDigits: 2}));
            tempState.setIn(['form', 'atmOcclusion', 'value'],
                formatNumber(preset.atmOcclusion, {fractionDigits: 2}));
        }
    });
}

function addCustomDsnLevel(state) {
    const levels = state.getIn(['form', 'customDsnLevels']);

    return state.setIn(['form', 'customDsnLevels'], levels.push(Map({
            'value': '',
            'units': 'G',
            'error': null
        })));
}

function deleteCustomDsnLevel(state, index) {
    const levels = state.getIn(['form', 'customDsnLevels']);

    return state.setIn(['form', 'customDsnLevels'], levels.delete(index));
}

function updateProfileForm(state, field, value) {
    let newState = state.set('form', formUpdate(state.get('form'), field, value));

    if (Array.isArray(field) && (
        field[0] === 'dsnModifier' ||
        field[0] === 'rangeModifier' ||
        field[0] === 'vacOcclusion' || 
        field[0] === 'atmOcclusion')) {
        newState = newState.setIn(['form', 'difficultyPreset'], 'Custom');
    } else if (field === 'planetpack') {
        const planetpack = findPlanetPack(value);
        newState = newState.setIn(['form', 'rescale'], planetpack.rescales[0].name);
    }

    return newState;
}

function saveProfile(state) {
    const id = state.getIn(['form', 'id']);
    let profile = nulll
    if (id) {

    } else {
        profile = new Profile({
            id: '', // TODO: Generate
            name: state.getIn(['form', 'name', 'value']),
            planetpack: state.getIn(['form', 'planetpack']),
            rescale: state.getIn(['form', 'rescale']),
            dsnModifier: parseFloat(state.getIn(['form', 'dsnModifier', 'value'])),
            rangeModifier: 1.0,
            atmOcclusion: 0.75,
            vacOcclusion: 0.9
        })
    }
}

export default function(state = initialState, action) {
    let newState = state;
    switch(action.type) {
        case 'PROFILES.ADD':
            newState = addProfile(newState);
            break;
        case 'PROFILES.EDIT':
            break;
        case 'PROFILES.CLONE':
            break;
        case 'PROFILES.DELETE':
            break;
        case 'PROFILES.FORM.ADD_CUSTOM_DSN_LEVEL':
            newState = addCustomDsnLevel(newState);
            break;
        case 'PROFILES.FORM.DELETE_CUSTOM_DSN_LEVEL':
            newState = deleteCustomDsnLevel(newState, action.payload.index);
            break;
        case 'PROFILES.FORM.APPLY_PRESET':
            newState = applyDifficultyPreset(newState, action.payload.preset);
            break;
        case 'PROFILES.FORM.UPDATE':
            newState = updateProfileForm(newState, action.payload.field, action.payload.value);
            break;
        case 'PROFILES.FORM.SAVE':
            newState = saveProfile(newState);
            break;
        case 'PROFILES.FORM.CANCEL':
            newState = cancelProfile(state);
            break;
    }
    return newState;
}
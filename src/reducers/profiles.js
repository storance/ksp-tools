import { Map, List } from 'immutable';
import { v4 as uuidv4 } from 'uuid';
import { DIFFICULTY_PRESETS,
    DSN_LEVELS,
    ANTENNAS,
    POWER_UNITS,
    POWER_UNITS_MAP,
    formUpdate,
    convertValue,
    createValidatedField,
    createValidatedUnitField,
    setValidatedField,
    getValidatedField,
    getValidatedUnitField,
    Profile,
    ActiveProfile } from '../utils';
import { planetpacks, findPlanetPack } from '../planetpacks';
import { validateRequiredField, validatePositiveNumberField } from '../validators';

const initialPlanetPack = planetpacks[0];
const initialRescale = initialPlanetPack.rescales[0];

const DEFAULT_PROFILE = new Profile({
    id: '716a901b-4ae5-4456-b1f0-40db7667dd13',
    name: 'Stock - Normal',
    planetpack: initialPlanetPack.name,
    rescale: initialRescale.name,
    dsnModifier: 1.0,
    rangeModifier: 1.0,
    atmOcclusion: 0.75,
    vacOcclusion: 0.9,
    editable: false
});

const initialState = Map({
    allById: Map([[DEFAULT_PROFILE.id, DEFAULT_PROFILE]]),
    activeId: '716a901b-4ae5-4456-b1f0-40db7667dd13',
    form: Map({
        id: '',
        name: createValidatedField(),
        difficultyPreset: 'Custom',
        planetpack : '',
        rescale: '',
        dsnModifier: createValidatedField(),
        rangeModifier: createValidatedField(),
        useCustomDsnLevels: false,
        customDsnLevels: List(),
        atmOcclusion: createValidatedField(),
        vacOcclusion: createValidatedField(),
        show: false
    }),
});

const DSN_LEVELS_FORM = DSN_LEVELS.map(power => createValidatedUnitField({value: power, allUnits: POWER_UNITS}));

function appInitialized(state) {
    let newState = state;
    const allProfiles = newState.get('allById', Map());
    const activeId = newState.get('activeId');

    let activeProfile = allProfiles.get(activeId);
    if (!activeProfile) {
        activeProfile = DEFAULT_PROFILE;
    }

    if (!Map.isMap(allProfiles)) {
        newState = newState.set('allById', Map());
    }

    return newState.setIn(['allById', DEFAULT_PROFILE.id], DEFAULT_PROFILE)
        .set('activeId', activeProfile.id)
        .set('active', toActiveProfile(activeProfile));
}

function selectProfile(state, id) {
    const allProfiles = state.get('allById');
    let profile = allProfiles.get(id);
    if (!profile) {
        profile = DEFAULT_PROFILE;
    }

    return state.set('activeId', profile.id)
        .set('active', toActiveProfile(profile));
}

function toActiveProfile(profile) {
    const planetpack = findPlanetPack(profile.planetpack);
    const rescale = planetpack.findRescale(profile.rescale);
    const scaledPlanetpack = rescale.rescalePlanetPack(planetpack);

    let dsnLevels = null;
    if (profile.hasCustomDsnLevels) {
        dsnLevels = profile.customDsnLevels;
    } else {
        dsnLevels = DSN_LEVELS.map(power => power * profile.dsnModifier);
    }

    const antennas = ANTENNAS.map(antenna => antenna.applyRangeModifier(profile.rangeModifier));

    return new ActiveProfile({
        id: profile.id,
        name: profile.name,
        planetpack: scaledPlanetpack,
        dsnLevels: dsnLevels,
        antennas: antennas,
        atmOcclusion: profile.atmOcclusion,
        vacOcclusion: profile.vacOcclusion
    })
}

function addProfile(state) {
    return state.withMutations((tempState) => {
        setValidatedField(tempState, ['form', 'name']);
        setValidatedField(tempState, ['form', 'dsnModifier'], '1.0');
        setValidatedField(tempState, ['form', 'rangeModifier'], '1.0');
        setValidatedField(tempState, ['form', 'vacOcclusion'], '1.0');
        setValidatedField(tempState, ['form', 'atmOcclusion'], '1.0');

        tempState.setIn(['form', 'id'], '');
        tempState.setIn(['form', 'difficultyPreset'], 'Custom');
        tempState.setIn(['form', 'planetpack'], initialPlanetPack.name);
        tempState.setIn(['form', 'rescale'], initialRescale.name);
        tempState.setIn(['form', 'useCustomDsnLevels'], false);
        tempState.setIn(['form', 'customDsnLevels'], DSN_LEVELS_FORM);
        tempState.setIn(['form', 'show'], true);
    });
}

function cloneProfile(state, id) {
    const existingProfile = state.getIn(['allById', id]);

    return state.withMutations((tempState) => {
        const hasCustomDsnLevels = existingProfile.customDsnLevels !== null;
        const customDsnLevels = !hasCustomDsnLevels ? DSN_LEVELS_FORM : existingProfile.customDsnLevels.map(
            power => createValidatedUnitField({value: power, allUnits: POWER_UNITS}));

        setValidatedField(tempState, ['form', 'name'], existingProfile.name + ' - Copy');
        setValidatedField(tempState, ['form', 'dsnModifier'], existingProfile.dsnModifier);
        setValidatedField(tempState, ['form', 'rangeModifier'], existingProfile.rangeModifier);
        setValidatedField(tempState, ['form', 'vacOcclusion'], existingProfile.vacOcclusion);
        setValidatedField(tempState, ['form', 'atmOcclusion'], existingProfile.atmOcclusion);

        tempState.setIn(['form', 'id'], '');
        tempState.setIn(['form', 'difficultyPreset'], 'Custom');
        tempState.setIn(['form', 'planetpack'], existingProfile.planetpack);
        tempState.setIn(['form', 'rescale'], existingProfile.rescale);
        tempState.setIn(['form', 'useCustomDsnLevels'], hasCustomDsnLevels);
        tempState.setIn(['form', 'customDsnLevels'], customDsnLevels);

        tempState.setIn(['form', 'show'], true);
    });
}

function editProfile(state, id) {
    const existingProfile = state.getIn(['allById', id]);

    return state.withMutations((tempState) => {
        const hasCustomDsnLevels = existingProfile.customDsnLevels !== null;
        const customDsnLevels = !hasCustomDsnLevels ? DSN_LEVELS_FORM : existingProfile.customDsnLevels.map(
            power => createValidatedUnitField({value: power, allUnits: POWER_UNITS}));

        setValidatedField(tempState, ['form', 'name'], existingProfile.name);
        setValidatedField(tempState, ['form', 'dsnModifier'], existingProfile.dsnModifier);
        setValidatedField(tempState, ['form', 'rangeModifier'], existingProfile.rangeModifier);
        setValidatedField(tempState, ['form', 'vacOcclusion'], existingProfile.vacOcclusion);
        setValidatedField(tempState, ['form', 'atmOcclusion'], existingProfile.atmOcclusion);

        tempState.setIn(['form', 'id'], existingProfile.id);
        tempState.setIn(['form', 'difficultyPreset'], 'Custom');
        tempState.setIn(['form', 'planetpack'], existingProfile.planetpack);
        tempState.setIn(['form', 'rescale'], existingProfile.rescale);
        tempState.setIn(['form', 'useCustomDsnLevels'], hasCustomDsnLevels);
        tempState.setIn(['form', 'customDsnLevels'], customDsnLevels);

        tempState.setIn(['form', 'show'], true);
    });
}

function deleteProfile(state, id) {
    return state.removeIn(['allById', id]);
}

function cancelProfile(state) {
    return state.setIn(['form', 'show'], false);
}

function applyDifficultyPreset(state, presetName) {
    return state.withMutations((tempState) => {
        tempState.setIn(['form', 'difficultyPreset'], presetName);

        if (presetName !== 'Custom') {
            const preset = DIFFICULTY_PRESETS.find(p => p.get('name') === presetName);
            for (var key of preset.keys()) {
                if (key !== 'name') {
                    tempState.setIn(['form', key, 'value'], preset.get(key));
                }
            }
        }
    });
}

function addCustomDsnLevel(state) {
    const levels = state.getIn(['form', 'customDsnLevels']);
    const newLevels = levels.push(createValidatedUnitField({units: 'G'}));

    return state.setIn(['form', 'customDsnLevels'], newLevels);
}

function deleteCustomDsnLevel(state, index) {
    const levels = state.getIn(['form', 'customDsnLevels']);

    if (levels.size <= 1) {
        return state;
    }

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
    let newState = validate(state);
    if (newState.getIn(['form', 'hasErrors'])) {
        return newState;
    }

    const id = newState.getIn(['form', 'id']);
    const useCustomDsnLevels = newState.getIn(['form', 'useCustomDsnLevels']);
    const customDsnLevels = !useCustomDsnLevels ? null : newState.getIn(['form', 'customDsnLevels']).map(dsnLevel => 
        getValidatedUnitField(dsnLevel, '', POWER_UNITS_MAP));

    const profile = new Profile({
        id: id ? id : uuidv4(),
        name: getValidatedField(newState.getIn(['form', 'name'])),
        planetpack: newState.getIn(['form', 'planetpack']),
        rescale: newState.getIn(['form', 'rescale']),
        customDsnLevels : customDsnLevels,
        dsnModifier: getValidatedField(newState.getIn(['form', 'dsnModifier']), parseFloat),
        rangeModifier: getValidatedField(newState.getIn(['form', 'rangeModifier']), parseFloat),
        atmOcclusion: getValidatedField(newState.getIn(['form', 'atmOcclusion']), parseFloat),
        vacOcclusion: getValidatedField(newState.getIn(['form', 'vacOcclusion']), parseFloat)
    });

    return newState.setIn(['allById', profile.id], profile)
        .setIn(['form', 'show'], false);
}

function validate(state) {
    const formState = state.get('form');
    const profiles = List(state.get('allById').values());

    return state.set('form', formState.withMutations(tempState => {
        const id = tempState.get('id');

        let errors = false;
        if (!validateRequiredField(tempState, 'name')) {
            if (validateProfileNameUnique(tempState, profiles, id)) {
                errors = true;
            }
        } else {
            errors = true;
        }

        if (tempState.get('useCustomDsnLevels')) {
            if (validateCustomDsnLevels(tempState)) {
                errors = true;
            }
        } else {
            if (validatePositiveNumberField(tempState, 'dsnModifier')) {
                errors = true;
            }
        }

        if (validatePositiveNumberField(tempState, 'rangeModifier')) {
            errors = true;
        }
        
        if (validatePositiveNumberField(tempState, 'atmOcclusion')) {
            errors = true;
        }

        if (validatePositiveNumberField(tempState, 'vacOcclusion')) {
            errors = true;
        }

        tempState.set('hasErrors', errors);
    }));
}

function validateProfileNameUnique(tempState, profiles, id) {
    const profileName = tempState.getIn(['name', 'value']);
    const existingProfile = profiles.find(profile => profile.name === profileName);

    if (existingProfile && existingProfile.id !== id) {
        tempState.setIn(['name', 'error'], 'Please enter a name that is not used by an existing profile.');
        return true;
    }

    return false;
}

function validateCustomDsnLevels(state) {
    let errors = false;
    let lastPower = null;
    for (var i = 0; i < state.get('customDsnLevels').size; i++) {
        if (!validatePositiveNumberField(state, ['customDsnLevels', i])) {
            let power = getValidatedUnitField(state.getIn(['customDsnLevels', i]), '', POWER_UNITS_MAP);

            if (lastPower !== null && lastPower > power) {
                state.setIn(['customDsnLevels', i, 'error'], 'Please enter a power rating that is ' +
                    'greater than or equal to the power of DSN Level ' + index);
                errors = true;
            }

            lastPower = power;
        } else {
            lastPower = null;
            errors = true;
        }
    }

    return errors;
}

export default function(state = initialState, action) {
    let newState = state;
    switch(action.type) {
        case 'PROFILES.SELECT':
            newState = selectProfile(newState, action.payload.id);
            break;
        case 'PROFILES.ADD':
            newState = addProfile(newState);
            break;
        case 'PROFILES.EDIT':
            newState = editProfile(newState, action.payload.id);
            break;
        case 'PROFILES.CLONE':
            newState = cloneProfile(newState, action.payload.id);
            break;
        case 'PROFILES.DELETE':
            newState = deleteProfile(newState, action.payload.id);
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
            newState = cancelProfile(newState);
            break;
        case 'APP.INITIALIZED':
            newState = appInitialized(newState);
            break;
    }
    return newState;
}
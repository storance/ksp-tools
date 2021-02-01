export function formUpdate(state, field, value) {
	if (Array.isArray(field)) {
		return state.setIn(field, value);
	} else {
		return state.set(field, value);
	}
}

export function resetBodyOnPlanetPackUpdate(state, action, fieldName='body') {
	if (action.type == 'CORE.UPDATE_PLANET_PACK') {
		return state.remove(fieldName);
	}

	return state;
}
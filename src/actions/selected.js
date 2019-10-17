export function setSelected(selected) {
	return {
		type: 'SET_SELECTED',
		payload: {
			selected: selected,
		},
	};
}

export function setSearch(name) {
	return {
		type: 'SET_SEARCH',
		payload: {
			name: name,
		},
	};
}

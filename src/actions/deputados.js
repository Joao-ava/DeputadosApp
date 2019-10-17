export function addDeputados(deputados) {
	return {
		type: 'ADD_DEPUTADOS',
		payload: {
			deputados: deputados,
		},
	};
}

export function setDeputados(deputados) {
	return {
		type: 'SET_DEPUTADOS',
		payload: {
			deputados,
		},
	};
}

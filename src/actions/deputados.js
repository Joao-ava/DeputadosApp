export function addDeputados(deputados) {
	return {
		type: 'ADD_DEPUTADOS',
		payload: {
			deputados: deputados,
		},
	};
}

export function setDeputado(deputado) {
	return {
		type: 'SET_DEPUTADO',
		payload: {
			deputado,
		},
	};
}

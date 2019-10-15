export function addDeputados(deputados) {
	return {
		type: 'ADD_DEPUTADOS',
		payload: {
			deputados,
		},
	}
}

export default function deputados(state={data:[], page:1}, action) {
	switch (action.type) {
		case 'ADD_DEPUTADOS':
			// Adicionar deputados
			return {
				data: [
					...state.data, 
					...action.payload.deputados
				],
				page: state.page+1,
			};

		case 'SET_DEPUTADOS':
			return {
				data: action.payload.deputados,
				page: 2,
			};

		default:
			return state;
	}
}

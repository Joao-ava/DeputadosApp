export default function deputados(state=[], action) {
	switch (action.type) {
		case 'ADD_DEPUTADOS':
			// Adicionar deputados
			return [...state, ...action.payload.deputados];

		default:
			return state;
	}
}

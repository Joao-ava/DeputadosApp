export default function search(state={name:''}, action) {
	switch (action.type) {
		case 'SET_SEARCH':
			return {name: action.payload.name};

		default:
			return state;
	}
}

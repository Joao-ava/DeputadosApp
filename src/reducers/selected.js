export default function selected(state={selected:null}, action) {
	switch (action.type) {
		case 'SET_SELECTED':
			return {id: action.payload.selected};

		default:
			return state;
	}
}

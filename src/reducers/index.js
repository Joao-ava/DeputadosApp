import { combineReducers } from 'redux';

import deputados from './deputados';
import selected from './selected';
import search from './search';

export default combineReducers({
	deputados,
	selected,
	search,
});

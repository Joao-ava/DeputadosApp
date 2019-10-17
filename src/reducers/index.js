import { combineReducers } from 'redux';

import deputados from './deputados';
import selected from './selected';

export default combineReducers({
	deputados,
	selected,
});

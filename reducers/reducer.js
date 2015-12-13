import Immutable from 'immutable';
import combineReducers from 'utils/combineReducers';

import moveReducer from 'reducers/moveReducer';
import dropReducer from 'reducers/dropReducer';
import newBlockReducer from 'reducers/newBlockReducer';
import rotateShapeReducer from 'reducers/rotateShapeReducer';

const reducer = combineReducers({
	coords: [
		moveReducer,
		dropReducer,
	],
	block: [
		newBlockReducer,
		{
			shape: [
				rotateShapeReducer,
			],
		},
	],

}, Immutable.Map());

export default reducer;
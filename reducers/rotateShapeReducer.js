import {rotateAction} from 'constants/actionTypes';
import {rotateClockwise, rotateCounterclockwise, rotateHalfway, rotateNone} from 'gameHelpers/block';
import Immutable from 'immutable';

export const newBlock = (oldShape = Immutable.List(), action = {}) => {
	let shape;

	switch (action.direction) {
		case "clockwise":
			shape = rotateClockwise(oldShape);
			break;

		case "counterclockwise":
			shape = rotateCounterclockwise(oldShape);
			break;

		case "halfway":
			shape = rotateHalfway(oldShape);
			break;

		default:
			shape = rotateNone(oldShape);
			break;
	}

	return shape;
};

const newBlockReducer = [rotateAction, newBlock];

export default newBlockReducer;

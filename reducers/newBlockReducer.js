import {newBlockAction} from 'constants/actionTypes';

export const newBlock = (oldBlock, action = {}) => {
	return action.block || oldBlock;
};

const newBlockReducer = [newBlockAction, newBlock];

export default newBlockReducer;

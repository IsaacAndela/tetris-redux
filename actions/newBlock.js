import {bindAction} from 'store/store';
import {newBlockAction} from 'constants/actionTypes';
import {getRandomBlock} from 'gameHelpers/block';

export const newBlock = () => ({ type: newBlockAction, block: getRandomBlock(), });

export const boundNewBlock = bindAction(newBlock);

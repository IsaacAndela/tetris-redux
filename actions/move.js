import store from 'store/store';
import {moveAction} from 'constants/actionTypes';

export const move = direction => ({ type: moveAction, direction });

export const boundMove = (...args) => store.dispatch(move(...args));

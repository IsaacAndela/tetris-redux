import store from 'store/store';
import {rotateAction} from 'constants/actionTypes';

export const rotate = (direction) => ({ type: rotateAction, direction });

export const boundRotate = (...args) => store.dispatch(rotate(...args));

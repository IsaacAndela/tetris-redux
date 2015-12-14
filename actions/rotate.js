import {bindAction} from 'store/store';
import {rotateAction} from 'constants/actionTypes';

export const rotate = (direction) => ({ type: rotateAction, direction });

export const boundRotate = bindAction(rotate);

import {bindAction} from 'store/store';
import {dropAction} from 'constants/actionTypes';

export const drop = () => ({ type: dropAction });

export const boundDrop = bindAction(drop);
import store from 'store/store';
import {dropAction} from 'constants/actionTypes';

export const drop = () => ({ type: dropAction });

export const boundDrop = (...args) => store.dispatch(drop(...args));
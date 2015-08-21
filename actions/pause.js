import store from 'store/store';
import {pauseAction} from 'constants/actionTypes';

export const pause = () => ({ type: pauseAction });

export const boundPause = (...args) => store.dispatch(pause(...args));
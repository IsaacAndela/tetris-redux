import {bindAction} from 'store/store';
import {pauseAction} from 'constants/actionTypes';

export const pause = () => ({ type: pauseAction });

export const boundPause = bindAction(pause);
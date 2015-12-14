import {createStore} from 'redux';
import reducer from "reducers/reducer";

const store = createStore(reducer);

export const bindAction = (actionDispatcher) => (...args) => store.dispatch(actionDispatcher(...args));

export default store;
import Immutable from 'immutable';
import {reduceObject} from 'utils/loopObject';
import curryOnTop from 'curry-on-top';
const fn = curryOnTop.functional;

let reduceAll;

const reduceSubDomain = (store, domain, reducer, domainStore = Immutable.Map(), action = {}) => store.set(domain, reduceAll(reducer, domainStore, action));

const executeReducer = (store, domain, reducer, domainStore, action) => store.set(domain, reducer(domainStore, action));

const reduce = fn.curry((action, domain, store, reducer) => {
	const domainStore = store.get(domain);
	const reducerIsArray = Array.isArray(reducer);

	if (fn.isObject(reducer) && !reducerIsArray) {
		store = reduceSubDomain(store, domain, reducer, domainStore, action);
	}

	if (reducerIsArray && action.type === reducer[0]) {
		store = executeReducer(store, domain, reducer[1], domainStore, action);
	}

	return store;
});

const reduceDomain = fn.curry((action, store, reducers, domain) => {
	const newStore = reducers.reduce(reduce(action, domain), store);

	return newStore;
});

reduceAll = (domainReducers, store, action) => {
	const newStore = reduceObject(domainReducers, reduceDomain(action), store);
	return newStore;
};

const combineReducers = (reducers = {}, defaultStore = Immutable.Iterable()) => {
	return (store = defaultStore, action = {}) => {
		const newStore = reduceAll(reducers, store, action);

		if (!fn.exists(newStore)) {
			throw new Error("New store is null or undefined");
		}
		return newStore;
	};
};

export default combineReducers;
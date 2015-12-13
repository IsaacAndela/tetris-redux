export const reduceObject = (obj, iterator, initialValue = {}) => {
	const keys = Object.keys(obj);

	return keys.reduce((memo, key) => {
		const val = obj[key];

		return iterator(memo, val, key, obj);
	}, initialValue);
};
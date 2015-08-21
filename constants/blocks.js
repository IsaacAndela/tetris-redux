import Immutable from 'immutable';

const defaultOrigin = {
	x: -2,
	y: 1
};

export const blocks = Immutable.fromJS([
	{
		type: "i",
		origin: defaultOrigin,
		shape: [
			[0, 0, 0, 0],
			[1, 1, 1, 1],
			[0, 0, 0, 0]
		]
	},
	{
		type: "o",
		origin: defaultOrigin,
		shape: [
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0]
		]
	},
	{
		type: "z",
		origin: {
			x: -2,
			y: -2
		},
		shape: [
			[1, 1, 0],
			[0, 1, 1]
		]
	},
	{
		type: "s",
		origin: {
			x: -2,
			y: -2
		},
		shape: [
			[0, 1, 1],
			[1, 1, 0]
		]
	},
	{
		type: "t",
		origin: defaultOrigin,
		shape: [
			[0, 0, 0],
			[1, 1, 1],
			[0, 1, 0]
		]
	},
	{
		type: "l",
		origin: defaultOrigin,
		shape: [
			[0, 0, 0],
			[1, 1, 1],
			[1, 0, 0]
		]
	},
	{
		type: "j",
		origin: defaultOrigin,
		shape: [
			[0, 0, 0],
			[1, 1, 1],
			[0, 0, 1]
		]
	}
]);
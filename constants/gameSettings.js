import Immutable from 'immutable';

export const boardWidth = 10;
export const boardHeight = 20;

export const spawnOrigin = Immutable.Map({
	x: 5,
	y: 0
});

export const defaultOrigin = Immutable.Map({
	x: -2,
	y: 1
});

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
		origin: defaultOrigin.set("y", -2),
		shape: [
			[1, 1, 0],
			[0, 1, 1]
		]
	},
	{
		type: "s",
		origin: defaultOrigin.set("y", -2),
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
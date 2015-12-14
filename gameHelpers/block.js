import {blocks} from 'constants/gameSettings';
import Immutable from 'immutable';


export const rotateHalfway = (shape = Immutable.List()) => shape.map(row => row.reverse()).reverse();



const rotateColumnClockwise = (shape, col, index) => shape.update(index, (oldRow = Immutable.List()) => oldRow.unshift(col));

const rotateRowClockwise = (shape, row) => row.reduce(rotateColumnClockwise, shape);

export const rotateClockwise = (shape = Immutable.List()) => shape.reduce(rotateRowClockwise, Immutable.List());



const rotateColumnCounterclockwise = (shape, col, index, {size}) => shape.update(size - 1 - index, (oldRow = Immutable.List()) => oldRow.push(col));

const rotateRowCounterclockwise = (shape, row) => row.reduceRight(rotateColumnCounterclockwise, shape);

export const rotateCounterclockwise = (shape = Immutable.List()) => shape.reduce(rotateRowCounterclockwise, Immutable.List());



export const rotateNone = (shape = Immutable.List()) => shape;



export const getRandomBlock = () => {
	const size = blocks.size;

	const randomIndex = Math.floor(Math.random() * size);

	const randomBlock = blocks.get(randomIndex);

	return randomBlock;
};
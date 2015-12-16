import Immutable from 'immutable';
import curryOnTop from 'curry-on-top';

const fn = curryOnTop.functional;



const getInternalDotsFromRow = fn.curry((y, dots, val, x) =>  val === 1 ? dots.push(x, y) : dots);

const getInternalDots = (dots, row, y) => row.reduce(getInternalDotsFromRow(y), dots);

const getRelativeDot = fn.curry((origin, dot) => dot.update("x", (x) => x + origin.x).update("y", (y) => y + origin.y));

export const blockToDots = (block) => {
	const shape = block.get("shape");
	const internalDots = shape.reduce(getInternalDots, Immutable.List());

	const origin = block.get("origin");
	const relativeDots = internalDots.map(getRelativeDot(origin));

	return relativeDots;
};

export const blockToBoardDots = (block, boardOrigin) => {
	const relativeDots = blockToDots(block);
	const blockDots = relativeDots.map(getRelativeDot(boardOrigin));
	return blockDots;
};

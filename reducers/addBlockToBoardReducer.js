import {blockToDots} from 'gameHelpers/dots';


const addDotToBoard = (board, {x, y}) => board.setIn([y, x], 1);

export const addBlockToBoard = (board, { block, coords } = {}) => blockToDots(block, coords).reduce(addDotToBoard, board);

import Immutable from 'immutable';
import {boardWidth, boardHeight} from 'constants/gameSettings';

const newRow = (columnCount) => Immutable.Repeat(0, columnCount).toList();

const newRows = (rowCount, columnCount) => Immutable.Repeat(newRow(columnCount), rowCount).toList();

export const newBoard = () => newRows(boardHeight, boardWidth);
import store from 'store/store';
import 'actions/move';
import Immutable from 'immutable';
import {boundMove} from 'actions/move';
import {boundDrop} from 'actions/drop';
import {boundNewBlock} from 'actions/newBlock';
import {boundRotate} from 'actions/rotate';

function logBoard(board = Immutable.List()) {
	const loggableBoard = board.map((row = Immutable.List()) => `|${row.map(cell => cell ? 0 : " ").join(".")}|`).join("\n");

	if (console && console.log) {
		console.log(loggableBoard);
	}

	return loggableBoard;
}

store.subscribe(() => logBoard(store.getState().get("block").get("shape")));
window.Immutable = Immutable;
window.store = store;
window.boundMove = boundMove;
window.boundDrop = boundDrop;
window.boundNewBlock = boundNewBlock;
window.boundRotate = boundRotate;
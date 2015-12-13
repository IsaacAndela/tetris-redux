import {moveAction} from 'constants/actionTypes';
import {boardWidth, boardHeight, spawnOrigin} from 'constants/gameSettings';
import {isOnBoard} from 'gameHelpers/board';



export const move = (oldCoords = spawnOrigin, action = {}) => {
	let coords;

	switch (action.direction) {
		case "left":
			coords = oldCoords.update("x", (old) => old - 1);
			break;

		case "right":
			coords = oldCoords.update("x", (old) => old + 1);
			break;

		case "up":
			coords = oldCoords.update("y", (old) => old - 1);
			break;

		case "down":
			coords = oldCoords.update("y", (old) => old + 1);
			break;
	}

	if (!isOnBoard(coords, boardWidth, boardHeight)) {
		coords = oldCoords;
	}

	return coords;
};

const moveReducer = [moveAction, move];

export default moveReducer;

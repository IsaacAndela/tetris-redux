import {dropAction} from 'constants/actionTypes';
import {move} from 'reducers/moveReducer';



export const drop = (oldCoords) => {
	let coords = oldCoords;
	let nextCoords;

	do {
		coords = nextCoords;
		nextCoords = move(coords, { direction: "down" });

	} while (nextCoords !== coords);

	return coords;
};

const dropReducer = [dropAction, drop];

export default dropReducer;

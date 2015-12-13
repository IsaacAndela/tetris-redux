export const isOnBoard = (coords, boardWidth, boardHeight) => {
	const x = coords.get("x");
	const y = coords.get("y");

	return x >= 0 && x < boardWidth &&
			y >= 0 && y < boardHeight;
};
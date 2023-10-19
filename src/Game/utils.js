export function fenToChessBoard(fen) {
	const rows = fen.split(" ")[0].split("/");
	const board = [];

	for (const row of rows) {
		const rowArray = [];
		for (const char of row) {
			if (!isNaN(char)) {
				for (let i = 0; i < parseInt(char); i++) {
					rowArray.push({
						empty: true,
						type: null,
						color: null,
						squareColor: null,
						highlight: false,
					});
				}
			} else {
				const piece = {
					empty: false,
					type: null,
					color: null,
					squareColor: null,
					highlight: false,
				};

				switch (char) {
					case "p":
						piece.type = "pawn";
						piece.color = "black";
						break;
					case "r":
						piece.type = "rook";
						piece.color = "black";
						break;
					case "n":
						piece.type = "knight";
						piece.color = "black";
						break;
					case "b":
						piece.type = "bishop";
						piece.color = "black";
						break;
					case "q":
						piece.type = "queen";
						piece.color = "black";
						break;
					case "k":
						piece.type = "king";
						piece.color = "black";
						break;
					case "P":
						piece.type = "pawn";
						piece.color = "white";
						break;
					case "R":
						piece.type = "rook";
						piece.color = "white";
						break;
					case "N":
						piece.type = "knight";
						piece.color = "white";
						break;
					case "B":
						piece.type = "bishop";
						piece.color = "white";
						break;
					case "Q":
						piece.type = "queen";
						piece.color = "white";
						break;
					case "K":
						piece.type = "king";
						piece.color = "white";
						break;
				}
				rowArray.push(piece);
			}
		}
		board.push(rowArray);
	}

	return board;
}
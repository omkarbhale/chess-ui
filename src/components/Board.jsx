import React from "react";
import Square from "./Square.jsx";
import styles from "./chess.module.css";

class Board extends React.Component {
	/**
		props.state is a 2D array with each element like this:
		{empty: boolean, type: type, color: black|white, squareColor: null|light|dark, highlight: true|false} 
	*/
	constructor(props) {
		super(props);
		this.state = {};
		this.state.board = props.board;
		this.highlightedSquares = [];
	}

	isSquareHighlighted(i, j) {
		return this.state.board[i][j].highlight;
	}

	highlightSquare(i, j, val) {
		this.state.board[i][j].highlight = val;
		this.setState({ board: this.state.board });
		if (val) {
			this.highlightedSquares.push(this.state.board[i][j]);
		} else {
			this.highlightedSquares =
				this.highlightedSquares.filter(
					(square) => square != this.state.board[i][j]
				);
		}
	}

	onSquareClick(i, j) {
		this.highlightSquare(i, j, !this.isSquareHighlighted(i, j));
	}

	render() {
		return (
			<>
				{this.state.board.map((row, i) => {
					return (
						<div key={i} className={styles.board_row}>
							{row.map((square, j) => {
								return (
									<Square
										key={j}
										onClick={() => this.onSquareClick(i, j)}
										square={square}
										i={i}
										j={j}
									></Square>
								);
							})}
						</div>
					);
				})}
			</>
		);
	}
}

export default Board;

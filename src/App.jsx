import { fenToChessBoard } from "./Game/utils.js";
import Board from "./components/Board.jsx";


function App() {
	const board = fenToChessBoard("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");

	return (
		<>
			<Board board={board}></Board>
		</>
	);
}

export default App;

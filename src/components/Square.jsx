import styles from "./chess.module.css";


// square is {empty: boolean, type: type, color: black|white, squareColor: null|light|dark, highlight: true|false}
const Square = (props) => {
    const squareColor = props.square.squareColor || ((props.i + props.j) % 2 == 0 ? "light" : "dark");
	const containerClassName = `${styles.square} ${styles[squareColor]} ${props.square.highlight ? styles.highlight : ""}`;
    const pieceClassName = `${styles.piece} ${styles[props.square.color]} ${styles[props.square.type]}`;

	return <div className={containerClassName} onClick={() => props.onClick(props.i, props.j)}>
        {props.square.empty ? "" : <div className={pieceClassName}></div>}
    </div>;
};

export default Square;

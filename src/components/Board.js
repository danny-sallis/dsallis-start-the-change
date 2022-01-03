import React from "react";
import Square from "./Square";

// Squares is the array containing values of each square
const Board = ({ squares, onClick }) => (
  // TODO: Populate the board with squares
    <div className = "board">
        {squares.map((square, i) => <Square value={ square } onClick={() => onClick(i)} />)}
    </div>
);

export default Board;
  
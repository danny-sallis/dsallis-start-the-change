import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";
import Square from "./Square";

const Game = () => {
  // TODO: Set up states and functions: position of Xs and Os on board,
  // step number, whether X is next, is there a win or tie, etc.

    const squareArray = new Array(9).fill(null);
    const [board, setBoard] = useState(squareArray);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);

    let allFull = () => {
        for (let i = 0; i < 9; i++) {
            if (board[i] === null) {
                return false;
            }
        }

        return true;
    }

    let nextPlayer = (xIsNext) => {
        if (xIsNext) {
            return 'X';
        } else {
            return 'O';
        }
    }

    let updatePlayer = () => {
        if (winner !== null) {
            return null;
        }
        if (stepNumber % 2 === 0) {
            return 'X';
        }
        if (stepNumber % 2 === 1) {
            return 'O';
        }
        return null;
    }
    
    let handleClick = (i) => {
        if (winner === 'X' || winner === 'O') {
            
        } else if (board[i] !== null) {
            
        } else {
            setStepNumber(stepNumber + 1);
            setXIsNext(!xIsNext);

            let boardCopy = [...board];
            boardCopy[i] = nextPlayer(xIsNext);

            setWinner(calculateWinner(boardCopy));
            
            setBoard(boardCopy);
        }
    }

    let jumpToStart = () => {
        for (let i = 0; i < 9; i++) {
            setBoard(board.map(i => null));
        }
        
        setWinner(null);
        nextPlayer = 'X';
        setStepNumber(0);
        setXIsNext(true);
    }

    let result = () => {
        if (winner !== null) {
            return "Winner: " + winner;
        } else if (allFull()) {
            return "Tie Game";
        } else {
            return "Next Player: " + nextPlayer(xIsNext); 
        }
    }

    return (
        <>
            <h1>Tic Tac Toe</h1>
            <Board squares={board} onClick={handleClick} />
            <div className="info-wrapper">
                <div>
                    <button onClick={() => jumpToStart()}>Go to Start</button>
                </div>
                <h3>{result()}</h3>
            </div>
        </>
    );
};

export default Game;

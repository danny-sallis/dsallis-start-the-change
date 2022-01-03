export function calculateWinner(squares) {
  // TODO: Given a game board, calculate the winner.
  // If there is no winner, you can return null.

    if (squares[0] === squares[1] && squares[0] === squares[2] && squares[0] != null) {
        return squares[0];
    } else if (squares[3] === squares[4] && squares[3] === squares[5] && squares[3] != null) {
        return squares[3];
    } else if (squares[6] === squares[7] && squares[6] === squares[8] && squares[6] != null) {
        return squares[6];
    } else if (squares[0] === squares[3] && squares[0] === squares[6] && squares[0] != null) {
        return squares[0];
    } else if (squares[1] === squares[4] && squares[1] === squares[7] && squares[1] != null) {
        return squares[1];
    } else if (squares[2] === squares[5] && squares[2] === squares[8] && squares[2] != null) {
        return squares[2];
    } else if (squares[0] === squares[4] && squares[0] === squares[8] && squares[0] != null) {
        return squares[0];
    } else if (squares[2] === squares[4] && squares[2] === squares[6] && squares[2] != null) {
        return squares[2];
    } else {
        return null;
    }
}

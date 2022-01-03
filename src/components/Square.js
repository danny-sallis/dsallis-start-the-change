import React from "react";

const Square = ({ value, onClick }) => {
    return (
        <button className="squares" onClick={onClick}> { value } </button>
        // TODO: Create a clickable square that can contain an X or O
    );
};

export default Square;

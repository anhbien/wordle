import React from "react";
import Square from "./Square";
import '../App.css';

type RowProps = {
    numberOfSquare: number;
}

function Row(props: RowProps){
    const {numberOfSquare} = props;
    const rowRendered = [];

    for (let index = 0; index < numberOfSquare; index++) {
        rowRendered.push(<Square key={`square${index}`}/>)
    }

    return (
        <div className="row">
            {rowRendered}
        </div>
    );
}

export default Row;
import React from "react";
import Square from "./Square";
import { SquareState } from '../constants/types';
import '../App.css';

type RowProps = {
    row: string[]
}

function Row(prop: RowProps){
    const {row} = prop; 
    return (
        <div className="row">
            {
                row.map((square, squareIndex) => {
                    const state = square? SquareState.ENTERED: SquareState.DEFAULT;
                    return(
                        <Square value={square} state={state} key={squareIndex}/>
                )})
            }
        </div>
    );
}

export default Row;
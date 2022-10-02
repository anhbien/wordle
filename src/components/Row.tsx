import React, { useContext } from "react";
import Square from "./Square";
import { SquareState } from '../constants/types';
import '../App.css';
import { WordleContext } from "../context/WordleContext";

type RowProps = {
    numberOfSquare: number;
}

function Row(props: RowProps){
    const {numberOfSquare} = props;
    const rowRendered = [];
    const {currentValue, currentCell} = useContext(WordleContext);

    for (let index = 0; index < numberOfSquare; index++) {
        if(index === currentCell && currentValue)
            rowRendered.push(<Square key={`square${index}`} value={currentValue} state={SquareState.ENTERED}/>)
        else
            rowRendered.push(<Square key={`square${index}`} value='' state={SquareState.DEFAULT}/>)
    }

    return (
        <div className="row">
            {rowRendered}
        </div>
    );
}

export default Row;
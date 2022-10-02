import React from 'react';
import '../App.css';
import { SquareState } from '../constants/types';

type SquareProps ={
    value: string | undefined;
    state: SquareState;
}
function Square(props: SquareProps){
    const {value, state} =  props;
    let squareClassName = '';

    switch (state) {
        case SquareState.ENTERED:
            squareClassName = '-entered';
            break;
    
        case SquareState.CLOSED:
            squareClassName ='-closed';
            break;
    
        case SquareState.WRONG:
            squareClassName ='-wrong';
            break;

        case SquareState.CORRECT:
            squareClassName ='-correct';
            break;
        default:
            break;
    }

    return (
        <div className={`square ${squareClassName}`}>
            <span>{value}</span>
        </div>
    );
}

export default Square;
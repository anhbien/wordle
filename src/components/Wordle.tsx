import React, { useContext } from 'react';
import Row from './Row';
import '../App.css';
import { WordleContext } from '../context/WordleContext';

function Wordle(){
    const {board} = useContext(WordleContext);

    return (
        <div className='wordle'>
            {board.map((row, index)=> <Row row={row} key={index}/>)}
        </div>
    );
}

export default Wordle;
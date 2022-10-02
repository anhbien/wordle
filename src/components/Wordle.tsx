import React from 'react';
import Row from './Row';
import '../App.css';

type WordleProps = {
    numberOfRow: number;
};
function Wordle(props: WordleProps){
    const {numberOfRow} = props;
    const wordleRender = [];
    
    for (let index = 0; index < numberOfRow; index++) {
        wordleRender.push(<Row numberOfSquare={5} key={`row${index}`}/>)
    }

    return (
        <div className='wordle'>
            {wordleRender}
        </div>
    );
}

export default Wordle;
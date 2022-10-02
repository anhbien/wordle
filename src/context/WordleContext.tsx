import React, {FC, useState} from "react";
import { numberOfRow, numberOfSquare } from "../constants/constant";

type IWordleContext = {
    board: string[][];
    currentRow: number;
    currentCell:  number;
    updateRow: (row: number) => void;
    handleInput: (value: string) =>void;
    handleDelete: () => void;
}

const WordleContext = React.createContext<IWordleContext>((null as unknown) as IWordleContext);

type WordleProviderProps = {
    children: React.ReactNode
}
const WordleProvider: FC<WordleProviderProps> = ({ children }): JSX.Element =>{
    const [board, setBoard] = useState(Array.from({length: numberOfRow},()=> Array.from({length: numberOfSquare}, () => '')));
    const [currentRow, setCurrentRow] = useState(0);
    const [currentCell, setCurrentCell] = useState(0);

    const updateRow = (row: number)=>{
        setCurrentRow(row);
    }

    const handleInput = (value: string) =>{
        // Prevent exceeding the number of square in a row
        updateBoard(currentRow, currentCell, value);
        if(currentCell<numberOfSquare-1)
            setCurrentCell(currentCell+1);
    }

    const handleDelete = () =>{
        // TODO; If delete in the middle of the word, requires an extra click (BUG)
        updateBoard(currentRow, currentCell, '');
        if(currentCell>0)
            setCurrentCell(currentCell-1);
        console.log(currentCell);
    }

    const updateBoard = (row: number, cell: number, value: string)=>{
        const temp = [...board];
        temp[row][cell]=value;
        setBoard(temp);
    }

    return (
        <WordleContext.Provider value={{board, currentRow, currentCell, updateRow, handleInput, handleDelete}}>
            {children}
        </WordleContext.Provider>
        
    )
};

export {WordleContext, WordleProvider};
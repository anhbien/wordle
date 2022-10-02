import React, {FC, useState} from "react";
import { numberOfSquare } from "../constants/constant";

type IWordleContext = {
    currentValue: string;
    currentRow: number;
    currentCell:  number;
    updateRow: (row: number) => void;
    handleKeyClicked: (value: string) =>void;
}

const WordleContext = React.createContext<IWordleContext>((null as unknown) as IWordleContext);

type WordleProviderProps = {
    children: React.ReactNode
}
const WordleProvider: FC<WordleProviderProps> = ({ children }): JSX.Element =>{
    const [currentValue, setCurrentValue] = useState('');
    const [currentRow, setCurrentRow] = useState(0);
    const [currentCell, setCurrentCell] = useState(-1);

    const updateRow = (row: number)=>{
        setCurrentRow(row);
    }

    const handleKeyClicked = (value: string) =>{
        setCurrentValue(value);
        setCurrentCell((currentCell+1) % numberOfSquare);
    }

    return (
        <WordleContext.Provider value={{currentValue, currentRow, currentCell, updateRow, handleKeyClicked}}>
            {children}
        </WordleContext.Provider>
        
    )
};

export {WordleContext, WordleProvider};
import React, {FC, useEffect, useState} from "react";
import { numberOfRow, numberOfSquare } from "../constants/constant";

type IWordleContext = {
    board: string[][];
    currentRow: number;
    currentCell:  number;
    updateRow: (row: number) => void;
    handleInput: (value: string) =>void;
    handleDelete: () => void;
    handleEnter: () => void;
}

type IWord = {
    word: string;
}

const WordleContext = React.createContext<IWordleContext>((null as unknown) as IWordleContext);

type WordleProviderProps = {
    children: React.ReactNode
}
const WordleProvider: FC<WordleProviderProps> = ({ children }): JSX.Element =>{
    const [wordList, setWordList] = useState<IWord[]>([]);
    const [todayWord, setTodayWord] = useState('');
    const [board, setBoard] = useState(Array.from({length: numberOfRow},()=> Array.from({length: numberOfSquare}, () => '')));
    const [currentRow, setCurrentRow] = useState(0);
    const [currentCell, setCurrentCell] = useState(0);
    const [todayWordNum, setTodayWordNum] = useState(0);
    const getWordList = async () => {
        fetch("https://raw.githubusercontent.com/mongodb-developer/bash-wordle/main/words.json")
            .then(res => {return res.json()})
            .then(data => {
                setWordList(data);
            });
    }
        
    useEffect((): void => {
        getWordList();
        if(wordList.length !==0){
            //setTodayWordNum(Math.floor(Math.random() * wordList.length));
            setTodayWord(wordList[todayWordNum].word);
        }
    },[todayWordNum, wordList]);

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
    }

    const handleEnter = ()=>{
        const value = board[currentRow].join('');
        analyze(value);
        if(currentRow<numberOfRow-1){
            setCurrentRow(currentRow+1);
            setCurrentCell(0);
        }
    }

    const analyze = (word: string) =>{
       console.log(wordList[todayWordNum].word);
    }

    const updateBoard = (row: number, cell: number, value: string)=>{
        const temp = [...board];
        temp[row][cell]=value;
        setBoard(temp);
    }

    return (
        <WordleContext.Provider value={{board, currentRow, currentCell, updateRow, handleInput, handleDelete, handleEnter}}>
            {children}
        </WordleContext.Provider>
        
    )
};

export {WordleContext, WordleProvider};
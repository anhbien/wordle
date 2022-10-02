import React, { useContext } from "react";
import '../../App.css';
import { WordleContext } from "../../context/WordleContext";

type KeyProps = {
    name: string;
}

function Key(props: KeyProps){
    const {name} = props;
    const {handleInput, handleDelete, handleEnter} = useContext(WordleContext);

    const handleKeyClicked = (value: string)=>{
        switch (value) {
            case 'DEL':
                handleDelete();
                break;
            case 'ENTER':
                handleEnter();
                break;
            default:
                handleInput(value);
                break;
        }
    }

    return <div className="key" onClick={()=> {handleKeyClicked(name)}}>{name}</div>
};

export default Key;
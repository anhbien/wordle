import React, { useContext } from "react";
import '../../App.css';
import { WordleContext } from "../../context/WordleContext";

type KeyProps = {
    name: string;
}

function Key(props: KeyProps){
    const {name} = props;
    const {handleKeyClicked} = useContext(WordleContext);

    return <div className="key" onClick={()=> {handleKeyClicked(name)}}>{name}</div>
};

export default Key;
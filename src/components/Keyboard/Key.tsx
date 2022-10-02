import React from "react";
import '../../App.css';

type KeyProps = {
    name: string;
}
function Key(props: KeyProps){
    const {name} = props;

    return <div className="key">{name}</div>
};

export default Key;
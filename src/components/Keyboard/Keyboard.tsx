import React from "react";
import Key from "./Key";
import "../../App.css";

function Keyboard(){
    const firstRow = ['Q','W','E','R','T','Y','U','I','O','P'];
    const secondRow = ['A','S','D','F','G','H','J','K','L'];
    const thirdRow = ['ENTER','Z','X','C','V','B','N','M','DEL'];
    const keyboard = [firstRow, secondRow, thirdRow];
    return (
        <div className="keyboard">
            {keyboard.map(row => 
                (
                    <div className="row" key={row.toString()}>
                        {row.map(key=>
                            <Key name={key} key={key}/>
                        )}
                    </div>
                ))}
        </div>
    );
};

export default Keyboard;
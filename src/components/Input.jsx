import React, {useState} from "react"

function Input(props) {

    return(
        <input 
            onChange={props.inpFunction} 
            value= {props.textValue}
        ></input>
    )
}

export default Input
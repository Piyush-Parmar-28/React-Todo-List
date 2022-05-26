import React from "react"

function Button(props) {
    return(
        <button onClick={props.btnFunction}>
            <span>{props.btnName}</span>
        </button>
    )
}

export default Button
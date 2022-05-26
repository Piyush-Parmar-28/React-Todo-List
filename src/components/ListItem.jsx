import React from "react"

function ListItem(props) {
    return (
        <li 
            onClick={ ()=>{ props.handleItem(props.id) } }  
            // i.e., onClick, execute a method that takes back the function from handleItem & sends id property with it.

            style={props.textStyle}
        >{props.task}</li>
    )
}

export default ListItem
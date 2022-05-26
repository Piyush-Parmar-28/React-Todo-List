import React from "react"
import { useState } from "react";

import ListItem from "./ListItem"
import Button from "./Button"
import Input from "./Input"

function Form() {
    // Handling Input
    var [text, setText]= useState("");

    // Handling Input Array
    var [textArray, setTextArray]= useState([]);

    function handleText(event) {
        setText( event.target.value )
    }

    function handleClick() {
        console.log("clicked");
        setTextArray( (prevValue)=>{
            return(
                [...prevValue, text]
            )
        } )

        setText("");
    }

    // Style for List Items
    var [textDecor, setTextDecor]= useState("none");

    // Function to delete the clicked Item
    function deleteItem(id) {
        console.log("here ->" + id);

        setTextArray( (prevValue)=>{
            return(
                prevValue.filter(
                    (item, index)=>{
                        return index != id;
                    }
                )
            )
        } )
    }

    return(
        <div>
            <Input
                type= "text"
                inpFunction= {handleText}
                textValue= {text}
            ></Input>

            <Button
                btnName= "Add Task"
                btnFunction= {handleClick}
            ></Button>

            <div>
                <ul>
                    {
                        textArray.map( (arrayItem, index)=>{
                            return(
                                <ListItem 
                                    key= {index}
                                    id= {index}
                                    handleItem= {deleteItem}    // Here, we are passing deleteItem function in the ListItem props, so that it can be used there whichever way we like.
                                    task= {arrayItem}
                                    textStyle= {{textDecoration: textDecor}}
                                ></ListItem>
                            )
                        } )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Form
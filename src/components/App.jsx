import React, { useState } from "react"

import Form from "./Form"

function App() {

    return (
        <div className="container">

            <div className="heading">
                <h1>To-Do List</h1>
            </div>

            <div className="form">
                <Form></Form>
            </div>

        </div>
    );
}

export default App
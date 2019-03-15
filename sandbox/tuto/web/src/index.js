import React from 'react'
import {render} from "react-dom"
import store from "./redux/store"
import {Provider} from "react-redux"

import App from "./App"
import Box from "./Box"
import Form from "./Form"

import "bulma/css/bulma.css"
import "./index.css"

const box = new Box(1, 50)

const jsx = (
    <div className="padding">
        <Provider store={store}>
            <Form />
            <App />
        </Provider>
    </div>
)

render(jsx, document.getElementById("root"))

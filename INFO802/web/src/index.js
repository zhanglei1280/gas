import React from 'react';
import ReactDOM from 'react-dom';
import "bulma/bulma.sass"
import "@fortawesome/fontawesome-free/css/all.css"
import './index.css';
import App from './App';
import Nav from "./Nav"
import * as serviceWorker from './serviceWorker';

const jsx = (
    <div>
    <Nav />
    <App />
    </div>
)

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

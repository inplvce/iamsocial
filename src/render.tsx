import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import defaultState from "./redux/defaultState";
import {BrowserRouter} from "react-router-dom";


export const renderThree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={defaultState}/>
        </BrowserRouter>, document.getElementById('root')
    );
}


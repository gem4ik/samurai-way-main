import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ActionsType, Store} from "./Data/redux";

export const renderTree =(store: ActionsType)=> {
    ReactDOM.render(
        <App Store={Store.getState()}
             dispatch={Store.dispatch.bind(Store)}
        />
        ,
        document.getElementById('root')
    );
}

Store.subscribe(()=>{
    let state = Store.getState()
    renderTree(state)
})
renderTree(Store.getState());

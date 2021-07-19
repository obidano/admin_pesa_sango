import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TestFn} from "./fn/test-fn";

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <button className='btn' onClick={TestFn.recupererList}>
                    Welcome to Pesa Sango
                </button>
            </header>
        </div>
    );
}

export default App;

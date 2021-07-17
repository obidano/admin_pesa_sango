import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TestFn} from "./fn/test-fn";

function App() {
    console.log(TestFn.calculate());

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Welcome to Pesa Sango
                </p>
            </header>
        </div>
    );
}

export default App;

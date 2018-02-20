import React, {Component} from 'react';
import logo from '../logo.svg';
import MainSector from './MainSector/MainSector';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Blog on React</h1>
                </header>
                <p className="App-intro">
                    Welcome to Blog Maker!
                </p>

                <MainSector/>
            </div>
        );
    }
}

export default App;

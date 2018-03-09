import React, {Component} from 'react';
import logo from '../logo.svg';
import MainSector from './MainSector/MainSector';
import './App.css';

import {Route, Switch} from 'react-router-dom';

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

                <Switch>
                    <Route exact path="/test" children={<div>345</div>}/>
                    <Route exact path="/" component={MainSector}/>
                </Switch>

            </div>
        );
    }
}

export default App;

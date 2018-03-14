// @flow
import React, {Component} from 'react';
import MainSector from './MainSector/MainSector';

// {logo} // TODO : provide logo through SSR
class App extends Component<{}, {}> {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src='' className="App-logo" alt="logo"/>
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

import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import React from 'react';


import {store, history} from './store';

import {Router, Route, Switch} from 'react-router';

// TODO => ConnectedRouter does not work
// import {ConnectedRouter} from 'react-router-redux';

import App from './components/App';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/" component={App}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

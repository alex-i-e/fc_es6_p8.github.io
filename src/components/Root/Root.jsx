import React from 'react';
import {Provider} from 'react-redux';
import App from '../App';
import {history} from '../../store';
import {Router, Route, Switch} from 'react-router';

// TODO => ConnectedRouter does not work
// import {ConnectedRouter} from 'react-router-redux';

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/" component={App}/>
            </Switch>
        </Router>
    </Provider>
);

export default Root;


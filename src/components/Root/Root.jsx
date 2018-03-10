import React from 'react';
import {Provider} from 'react-redux';
import App from '../App';
import {history} from '../../store';
import {Router, Route} from 'react-router';

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}/>
        </Router>
    </Provider>
);

export default Root;


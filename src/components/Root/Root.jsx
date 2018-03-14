import React from 'react';
import {Provider} from 'react-redux';
import App from '../App';
import {history} from '../../store';
import {BrowserRouter} from "react-router-dom";

const Root = ({store}) => (
    <Provider store={store}>
        <BrowserRouter history={history}>
            <App/>
        </BrowserRouter>
    </Provider>
);

export default Root;


import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import {configureStore} from "./configureStore";
import Root from "./components/Root/Root";

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
);

registerServiceWorker();

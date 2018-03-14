// import 'babel-polyfill'; // TODO; add polyfill to project
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import {configureStore} from "./configureStore";
import Root from "./components/Root/Root";

import './components/App.css';
import './components/MainSector/BlogSector/BlogListItem/BlogListItem.css';
import './components/MainSector/NavigatorSector/BlogMakerSector/BlogButton/BlogButton.css';
import './components/MainSector/NavigatorSector/BlogMakerSector/BlogForm/BlogForm.css';
import './components/MainSector/NavigatorSector/BlogMakerSector/BlogMakerSector.css';
import './components/MainSector/NavigatorSector/FilterSector/FilterSector.css';
import './components/MainSector/NavigatorSector/NavigatorSector.css';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

// render / hydrate
ReactDOM.hydrate(
    <Root store={store}/>,
    document.getElementById('root')
);

registerServiceWorker();

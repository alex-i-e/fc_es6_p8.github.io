import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {localStorageMiddleware, promiseMiddleware} from './middleware';
import reducer from './reducer';

import {routerMiddleware} from 'react-router-redux'
// import createHistory from 'history/createBrowserHistory';
// import createMemoryHistory from 'history/createMemoryHistory';
import createMemoryHistory from 'history/createMemoryHistory';
// import {loadState} from "./localStorageState";

export const history = ('' + process.env.BROWSER !== 'false')  // TODO : check why does not work env.BROWSER
    ? createMemoryHistory() // createHistory()
    : createMemoryHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(
            myRouterMiddleware,
            promiseMiddleware,
            localStorageMiddleware
        );
    } else {
        // Enable additional logging in non-production environments.
        return applyMiddleware(
            myRouterMiddleware,
            promiseMiddleware,
            localStorageMiddleware,
            createLogger()
        )
    }
};

const persistedState = ('' + process.env.BROWSER !== 'false') // TODO : check why does not work env.BROWSER
    ? null // loadState()
    : null;


if (typeof window === 'undefined') {
    global.window = {}
}

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

export const store = createStore(
    reducer,
    preloadedState,
    composeWithDevTools(getMiddleware()),
);

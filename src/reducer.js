import home from './reducers/home';
import filters from './reducers/filters';
import blog from './reducers/blog';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    home,
    filters,
    blog,
    router: routerReducer,
});

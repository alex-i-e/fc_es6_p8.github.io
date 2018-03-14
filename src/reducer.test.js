import * as actions from './reducers/home'
import {ADD_NEW_BLOG} from "./constants/actionTypes";
import createStore from "redux/src/createStore";

import configureStore from 'redux-mock-store'
import reducer from "./reducer";
// import thunk from 'redux-thunk'
// import t from './actionTypes'

// const middlewares = [thunk]
const mockStore = createStore(
    actions,

);



describe('home reducers', () => {

/*    let store;
    beforeEach(() => {
        // create a new store instance for each test
        store = createStore(
            actions,
            [],
        )
    });*/


    it('should dispatch action', () => {
        const initialState = {
            actions: {
                blogList: []
            }
        };
        const newBlog = {};
        const addNote = {type: ADD_NEW_BLOG, value: newBlog};

        const store = mockStore(initialState);
        store.dispatch(addNote);

        const actions = store.getActions();

        expect(actions).toEqual([addNote])
    })
});
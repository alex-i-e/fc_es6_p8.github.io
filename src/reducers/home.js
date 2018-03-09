import {ADD_NEW_BLOG, HOME_PAGE_LOADED} from '../constants/actionTypes';
import BlogListMock from './blogListMock.json';

const initState = {
    blogList: BlogListMock.blogList || [],
};

export default (state = initState, action) => {
    switch (action.type) {
        case HOME_PAGE_LOADED:
            return {
                ...state,
                blogList: action.value,
            };
        case ADD_NEW_BLOG:
            return {
                ...state,
                blogList: [
                    action.value,
                    ...state.blogList,
                ],
            };
        default:
            return state;
    }
};

import {Action, ADD_NEW_BLOG, HOME_PAGE_LOADED} from '../constants/actionTypes';
import BlogListMock from './blogListMock.json';
import {BlogType} from "../components/types/blogTypes";

type State = {
    +blogList: Array<BlogType>
}

const initState = {
    blogList: BlogListMock.blogList || [],
};

export default (state: State = initState, action: Action): State => {
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

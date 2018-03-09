import {BLOG_CREATOR_TOGGLE} from '../constants/actionTypes';

const initState = {
    isOpenNewBlogForm: false,
};

export default (state = initState, action) => {
    switch (action.type) {
        case BLOG_CREATOR_TOGGLE:
            return {
                ...state,
                isOpenNewBlogForm: action.value,
            };
        default:
            return state;
    }
};

import {FILTER_BY_AUTHOR_WAS_CHANGED} from '../constants/actionTypes';

const initState = {
    filterByAuthorValue: '',
};

export default (state = initState, action) => {
    switch (action.type) {
        case FILTER_BY_AUTHOR_WAS_CHANGED:
            return {
                ...state,
                filterByAuthorValue: action.value,
            };
        default:
            return state;
    }
};

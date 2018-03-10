// @flow
import type {Action} from '../constants/actionTypes';
import {FILTER_BY_AUTHOR_WAS_CHANGED} from '../constants/actionTypes';

type State = {
    filterByAuthorValue: string,
}

const initState = {
    filterByAuthorValue: '',
};

export default (state: State = initState, action: Action): State => {
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

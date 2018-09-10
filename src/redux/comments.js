import * as ActionTypes from './ActionTypes';

export const Comments = (state = {
    errMess: null,
    comments: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errMess: null, comments:action.payload};

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, comments:[]};

        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            return { ...state, comments: state.comments.concat(comment)};
        default:
            return state;
    }
};
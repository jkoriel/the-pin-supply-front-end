import * as types from "./constants";

const initialState = {
    all: [],
    selectedPost: {},
    err: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ALL_POSTS_PENDING:
        case types.ADD_POST_PENDING:
        case types.REMOVE_POST_PENDING:
        case types.EDIT_POST_PENDING:
        case types.SELECT_POST_PENDING:
            return state;

        case types.FETCH_ALL_POSTS_FAILED:
        case types.ADD_POST_FAILED:
        case types.REMOVE_POST_FAILED:
        case types.EDIT_POST_FAILED:
        case types.SELECT_POST_FAILED:
            return {
                ...state,
                err: action.payload
            };

        case types.FETCH_ALL_POSTS_SUCCESS:
            return {
                ...state,
                all: action.payload
            };

        case types.ADD_POST_SUCCESS:
            return {
                ...state,
                all: [action.payload, ...state.all]
            };

        case types.REMOVE_POST_SUCCESS:
            return {
                ...state,
                all: state.all.filter(post => post.id !== action.payload)
            };

        case types.EDIT_POST_SUCCESS:
            return {
                ...state,
                all: [
                    action.payload,
                    ...state.all.filter(post => post.id !== action.payload.id)
                ]
            };

        case types.SELECT_POST_SUCCESS:
            return {
                ...state,
                selectedPOST: action.payload
            };

        default:
            return state;
    }
};

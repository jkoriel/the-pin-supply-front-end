import * as types from "./constants";

const initialState = {
    all: [],
    selectedPin: {},
    err: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ALL_PINS_PENDING:
        case types.ADD_PIN_PENDING:
        case types.REMOVE_PIN_PENDING:
        case types.EDIT_PIN_PENDING:
        case types.SELECT_PIN_PENDING:
            return state;

        case types.FETCH_ALL_PINS_FAILED:
        case types.ADD_PIN_FAILED:
        case types.REMOVE_PIN_FAILED:
        case types.EDIT_PIN_FAILED:
        case types.SELECT_PIN_FAILED:
            return {
                ...state,
                err: action.payload
            };

        case types.FETCH_ALL_PINS_SUCCESS:
            return {
                ...state,
                all: action.payload
            };

        case types.ADD_PIN_SUCCESS:
            return {
                ...state,
                all: [action.payload, ...state.all]
            };

        case types.REMOVE_PIN_SUCCESS:
            return {
                ...state,
                all: state.all.filter(pin => pin.id !== action.payload)
            };

        case types.EDIT_PIN_SUCCESS:
            return {
                ...state,
                all: [
                    action.payload,
                    ...state.all.filter(pin => pin.id !== action.payload.id)
                ]
            };

        case types.SELECT_PIN_SUCCESS:
            return {
                ...state,
                selectedPin: action.payload
            };

        default:
            return state;
    }
};

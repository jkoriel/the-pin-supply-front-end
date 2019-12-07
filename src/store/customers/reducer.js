import * as types from "./constants";

const initialState = {
    all: [],
    selectedCustomer: {},
    err: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ALL_CUSTOMERS_PENDING:
        case types.ADD_CUSTOMER_PENDING:
        case types.REMOVE_CUSTOMER_PENDING:
        case types.EDIT_CUSTOMER_PENDING:
        case types.SELECT_CUSTOMER_PENDING:
            return state;

        case types.FETCH_ALL_CUSTOMERS_FAILED:
        case types.ADD_CUSTOMER_FAILED:
        case types.REMOVE_CUSTOMER_FAILED:
        case types.EDIT_CUSTOMER_FAILED:
        case types.SELECT_CUSTOMER_FAILED:
            return {
                ...state,
                err: action.payload
            };

        case types.FETCH_ALL_CUSTOMERS_SUCCESS:
            return {
                ...state,
                all: action.payload
            };

        case types.ADD_CUSTOMER_SUCCESS:
            return {
                ...state,
                all: [action.payload, ...state.all]
            };

        case types.REMOVE_CUSTOMER_SUCCESS:
            return {
                ...state,
                all: state.all.filter(customer => customer.id !== action.payload)
            };

        case types.EDIT_CUSTOMER_SUCCESS:
            return {
                ...state,
                all: [
                    action.payload,
                    ...state.all.filter(customer => customer.id !== action.payload.id)
                ]
            };

        case types.SELECT_CUSTOMER_SUCCESS:
            return {
                ...state,
                selectedCUSTOMER: action.payload
            };

        default:
            return state;
    }
};

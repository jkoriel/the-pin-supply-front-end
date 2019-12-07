import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllCustomers = () => async dispatch => {
    dispatch({
        type: types.FETCH_ALL_CUSTOMERS_PENDING
    });
    try {
        let response = await axios.get(BASE_URL);
        dispatch({
            type: types.FETCH_ALL_CUSTOMERS_SUCCESS,
            payload: response.data
        });
    } catch (err) {
        dispatch({
            type: types.FETCH_ALL_CUSTOMERS_FAILED,
            payload: err
        });
    }
};

export const addCustomer = newCustomer => async dispatch => {
    dispatch({
        type: types.ADD_CUSTOMER_PENDING
    });
    try {
        let response = await axios.post(BASE_URL, newCustomer);
        dispatch({
            type: types.ADD_CUSTOMER_SUCCESS,
            payload: response.data
        });
    } catch (err) {
        dispatch({
            type: types.ADD_CUSTOMER_FAILED,
            payload: err
        });
    }
};

export const removeCustomer = id => async dispatch => {
    dispatch({
        type: types.REMOVE_CUSTOMER_PENDING
    });
    try {
        let response = await axios.delete(BASE_URL + `/${id}`);
        dispatch({
            type: types.REMOVE_CUSTOMER_SUCCESS,
            payload: id
        });
        console.log(response.data);
    } catch (err) {
        dispatch({
            type: types.REMOVE_CUSTOMER_FAILED,
            payload: err
        });
    }
};

export const editCustomer = (updatedCustomer, id) => async dispatch => {
    dispatch({
        type: types.EDIT_CUSTOMER_PENDING
    });
    try {
        let response = await axios.patch(BASE_URL + `/${id}`, updatedCustomer);
        dispatch({
            type: types.EDIT_CUSTOMER_SUCCESS,
            payload: response.data
        });
    } catch (err) {
        dispatch({
            type: types.EDIT_CUSTOMER_FAILED,
            payload: err
        });
    }
};

export const selectCustomer = customer => dispatch => {
    dispatch({
        type: types.SELECT_CUSTOMER_PENDING
    });
    try {
        dispatch({
            type: types.SELECT_CUSTOMER_SUCCESS,
            payload: customer
        });
    } catch (err) {
        dispatch({
            type: types.SELECT_CUSTOMER_FAILED,
            payload: err
        });
    }
};

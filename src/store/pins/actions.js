import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllPins = () => async dispatch => {
    dispatch({
        type: types.FETCH_ALL_PINS_PENDING
    });
    try {
        let response = await axios.get(BASE_URL);
        dispatch({
            type: types.FETCH_ALL_PINS_SUCCESS,
            payload: response.data
        });
    } catch (err) {
        dispatch({
            type: types.FETCH_ALL_PINS_FAILED,
            payload: err
        });
    }
};

export const addPin = newPin => async dispatch => {
    dispatch({
        type: types.ADD_PIN_PENDING
    });
    try {
        let response = await axios.post(BASE_URL, newPin);
        dispatch({
            type: types.ADD_PIN_SUCCESS,
            payload: response.data
        });
    } catch (err) {
        dispatch({
            type: types.ADD_PIN_FAILED,
            payload: err
        });
    }
};

export const removePin = id => async dispatch => {
    dispatch({
        type: types.REMOVE_PIN_PENDING
    });
    try {
        let response = await axios.delete(BASE_URL + `/${id}`);
        dispatch({
            type: types.REMOVE_PIN_SUCCESS,
            payload: id
        });
        console.log(response.data);
    } catch (err) {
        dispatch({
            type: types.REMOVE_PIN_FAILED,
            payload: err
        });
    }
};

export const editPin = (updatedPin, id) => async dispatch => {
    dispatch({
        type: types.EDIT_PIN_PENDING
    });
    try {
        let response = await axios.patch(BASE_URL + `/${id}`, updatedPin);
        dispatch({
            type: types.EDIT_PIN_SUCCESS,
            payload: response.data
        });
    } catch (err) {
        dispatch({
            type: types.EDIT_PIN_FAILED,
            payload: err
        });
    }
};

export const selectPin = pin => dispatch => {
    dispatch({
        type: types.SELECT_PIN_PENDING
    });
    try {
        dispatch({
            type: types.SELECT_PIN_SUCCESS,
            payload: pin
        });
    } catch (err) {
        dispatch({
            type: types.SELECT_PIN_FAILED,
            payload: err
        });
    }
};

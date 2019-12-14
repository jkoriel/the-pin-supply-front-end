import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllPosts = () => async dispatch => {
    dispatch({
        type: types.FETCH_ALL_POSTS_PENDING
    });
    try {
        let response = await axios.get(BASE_URL);
        dispatch({
            type: types.FETCH_ALL_POSTS_SUCCESS,
            payload: response.data
        });
    } catch (err) {
        dispatch({
            type: types.FETCH_ALL_POSTS_FAILED,
            payload: err
        });
    }
};

export const fetchOnePost = id => async dispatch => {
    dispatch({
        type: types.FETCH_ONE_POST_PENDING
    });
    try {
        let response = await axios.get(BASE_URL + `/${id}`);
        dispatch({
            type: types.FETCH_ONE_POST_SUCCESS,
            payload: response.data
        });
    } catch (err) {
        dispatch({
            type: types.FETCH_ONE_POST_FAILED,
            payload: err
        });
    }
};

export const addPost = newPost => async dispatch => {
    dispatch({
        type: types.ADD_POST_PENDING
    });
    try {
        let response = await axios.post(BASE_URL, newPost);
        dispatch({
            type: types.ADD_POST_SUCCESS,
            payload: response.data
        });
    } catch (err) {
        dispatch({
            type: types.ADD_POST_FAILED,
            payload: err
        });
    }
};

export const removePost = id => async dispatch => {
    dispatch({
        type: types.REMOVE_POST_PENDING
    });
    try {
        let response = await axios.delete(BASE_URL + `/${id}`);
        dispatch({
            type: types.REMOVE_POST_SUCCESS,
            payload: response.data
        });
    } catch (err) {
        dispatch({
            type: types.REMOVE_POST_FAILED,
            payload: err
        });
    }
};
export const selectPost = post => dispatch => {
    dispatch({
        type: types.SELECT_POST_PENDING
    });
    try {
        dispatch({
            type: types.SELECT_POST_SUCCESS,
            payload: post
        });
    } catch (err) {
        dispatch({
            type: types.SELECT_POST_FAILED,
            payload: err
        });
    }
};


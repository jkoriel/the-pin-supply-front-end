import { createStore, combineReducers, applyMiddleware } from "redux";
import customersReducer from "./customers/reducer";
import pinReducer from "./pins/reducer";
import blogPostsReducer from "./blogPosts/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
    customers: customersReducer,
    pins: pinReducer,
    posts: blogPostsReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));

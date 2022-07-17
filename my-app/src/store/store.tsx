import { createStore,combineReducers,applyMiddleware } from "redux";
import { songReducer } from "./reducer";
import thunk from 'redux-thunk';

export const store = createStore(combineReducers({ songReducer}) ,applyMiddleware(thunk));

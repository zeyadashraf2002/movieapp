import { applyMiddleware, createStore } from "redux";
import CombineReducers from "./Reducers/CombineReducers";
import { thunk } from "redux-thunk";   

const MyStore = createStore(
  CombineReducers,
  applyMiddleware(thunk)
);

export default MyStore;

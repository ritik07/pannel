import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  tabProgress,
  nestedTabProgress,
  pannelData,
} from "./reducers/tabProgress";

const reducer = combineReducers({
  tabProgress,
  nestedTabProgress,
  pannelData,
});

export const store = createStore(reducer, applyMiddleware(thunk));

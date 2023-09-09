import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { tabProgress, nestedTabProgress } from "./reducers/tabProgress";

const reducer = combineReducers({
  tabProgress,
  nestedTabProgress,
});

export const store = createStore(reducer, applyMiddleware(thunk));

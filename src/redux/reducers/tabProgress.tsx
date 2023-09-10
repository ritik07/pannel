import * as actionTypes from "../actions/actionTypes";

const initalState = {
  progress: 1,
  nestedTabProgress: 0,
  userData: {},
};

export const tabProgress = (state = initalState, action: any) => {
  switch (action.type) {
    case actionTypes.setProgress:
      return { progress: action.payload };

    default:
      return state;
  }
};

export const nestedTabProgress = (state = initalState, action: any) => {
  switch (action.type) {
    case actionTypes.setNestedProgress:
      return { nestedTabProgress: action.payload };

    default:
      return state;
  }
};

export const userData = (state = initalState, action: any) => {
  switch (action.type) {
    case actionTypes.setUserData:
      return { userData: action.payload };

    default:
      return state;
  }
};

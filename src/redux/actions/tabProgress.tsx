import * as actionTypes from "./actionTypes";

export const setProgress = (data: number) => {
  return (dispatch: Function) => {
    dispatch({
      type: actionTypes.setProgress, // Use the imported action type as the 'type' property
      payload: data,
    });
  };
};

export const setNestedProgress = (data: number) => {
  return (dispatch: Function) => {
    dispatch({
      type: actionTypes.setNestedProgress, // Use the imported action type as the 'type' property
      payload: data,
    });
  };
};

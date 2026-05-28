import {
  ADDED,
  TOGGLE,
  COLORSELECTED,
  DELETED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
} from "./actionTypes";

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};
export const toggle = (todoID) => {
  return {
    type: TOGGLE,
    payload: todoID,
  };
};
export const colorSelected = (todoID, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoID,
      color,
    },
  };
};
export const deleted = (todoID) => {
  return {
    type: DELETED,
    payload: todoID,
  };
};
export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};
export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};

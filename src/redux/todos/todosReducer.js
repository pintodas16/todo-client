import { initialState } from "./initialState";
import {
  ADDED,
  TOGGLE,
  COLORSELECTED,
  DELETED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
} from "./actionTypes";

function nextTodoID(todos) {
  let currentMaxID = todos.reduce(
    (maxId, todo) => Math.max(todo.id, maxId),
    -1
  );
  return currentMaxID + 1;
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoID(state),
          text: action.payload,
          completed: false,
        },
      ];
    case TOGGLE:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    case COLORSELECTED:
      const { todoID, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoID) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);
    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case CLEARCOMPLETED:
      return state.filter((todo) => todo.completed !== true);
    default:
      return state;
  }
};
export default todosReducer;

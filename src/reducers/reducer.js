import {
  TOGGLE_COMPLETE,
  TOGGLE_IMPORTANT,
  DELETE_TODO,
  ADD_TODO
} from "../actions/todos";

const initialState = [];

export function todos(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_IMPORTANT:
      return console.log("important");
    case TOGGLE_COMPLETE:
      return console.log("complete");
    case DELETE_TODO:
      return console.log("deleted");
    case ADD_TODO:
      return console.log("added");
    default:
      return state;
  }
}

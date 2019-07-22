export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const TOGGLE_IMPORTANT = "TOGGLE_IMPORTANT";
export const DELETE_TODO = "DELETE_TODO";
export const ADD_TODO = "ADD_TODO";

export function toggleComplete(id) {
  return { type: TOGGLE_COMPLETE, id };
}

export function toggleImportant(id) {
  return { type: TOGGLE_IMPORTANT, id };
}

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function deleteTodo() {
  return { type: DELETE_TODO };
}

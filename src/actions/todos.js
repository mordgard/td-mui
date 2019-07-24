export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const TOGGLE_IMPORTANT = "TOGGLE_IMPORTANT";
export const DELETE_TODO = "DELETE_TODO";
export const ADD_TODO = "ADD_TODO";

export function toggleComplete(id) {
  const payload = id;
  return { type: TOGGLE_COMPLETE, payload };
}

export function toggleImportant(id) {
  const payload = id;
  return { type: TOGGLE_IMPORTANT, payload };
}

export function addTodo(text) {
  const payload = text;
  return { type: ADD_TODO, payload };
}

export function deleteTodo() {
  return { type: DELETE_TODO };
}

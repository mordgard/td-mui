import {
  TOGGLE_COMPLETE,
  TOGGLE_IMPORTANT,
  DELETE_TODO,
  ADD_TODO
} from "../actions/todos";
import ID from "../utils/id-generator";

const initialState = [
  {
    id: ID(),
    text: "Lorem ipsum",
    checked: false,
    isImportant: false,
    isLoading: false
  },
  {
    id: ID(),
    text: "Lorem ipsum dolor",
    checked: false,
    isImportant: false,
    isLoading: true
  },
  {
    id: ID(),
    text: "Lorem ipsum dolor uiaos",
    checked: false,
    isImportant: true,
    isLoading: false
  }
];

function todos(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_IMPORTANT:
      return state.map(item =>
        item.id === action.payload
          ? { ...item, isImportant: !item.isImportant }
          : item
      );

    case TOGGLE_COMPLETE:
      return state.map(item =>
        item.id === action.payload ? { ...item, checked: !item.checked } : item
      );

    case DELETE_TODO:
      const newState = state.filter(item => item.checked !== true);
      return [...newState];

    case ADD_TODO:
      return action.payload.text
        ? [
            ...state,
            {
              id: action.payload.id,
              text: action.payload.text,
              checked: false,
              isImportant: false
            }
          ]
        : state;

    default:
      return state;
  }
}

export default todos;
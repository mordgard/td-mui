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
    text: "some text",
    checked: false,
    isImportant: false
  },
  {
    id: ID(),
    text: "some text",
    checked: false,
    isImportant: false
  },
  {
    id: ID(),
    text: "some text",
    checked: false,
    isImportant: true
  },
  {
    id: ID(),
    text: "some text",
    checked: false,
    isImportant: false
  },
  {
    id: ID(),
    text: "some text",
    checked: false,
    isImportant: false
  },
  {
    id: ID(),
    text: "some text",
    checked: false,
    isImportant: false
  },
  {
    id: ID(),
    text: "some text",
    checked: false,
    isImportant: true
  },
  {
    id: ID(),
    text: "some text",
    checked: false,
    isImportant: false
  },
  {
    id: ID(),
    text: "some text",
    checked: false,
    isImportant: false
  },
  {
    id: ID(),
    text: "some text",
    checked: false,
    isImportant: false
  }
];

function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_IMPORTANT:
      return state.map(item =>
        item.id === action.id
          ? { ...item, isImportant: !item.isImportant }
          : item
      );

    case TOGGLE_COMPLETE:
      return state.map(item =>
        item.id === action.id ? { ...item, checked: !item.checked } : item
      );

    case DELETE_TODO:
      const newState = state.filter(item => item.checked !== true);
      return [...newState];

    case ADD_TODO:
      return [
        ...state,
        {
          id: ID(),
          text: action.text,
          isDone: false,
          isImportant: false
        }
      ];

    default:
      return state;
  }
}

export default reducer;

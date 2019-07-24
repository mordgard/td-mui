import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import todos from "./reducers/todos";

const store = createStore(todos, composeWithDevTools(applyMiddleware(thunk)));

export default store;

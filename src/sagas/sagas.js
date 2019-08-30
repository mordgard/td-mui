import { all, put, takeEvery } from "redux-saga/effects";
import { FETCH_TODOS } from "../actions/todos";

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* helloSaga() {
  yield console.log("Hi, I'm saga!");
}

export function* delayedHelloSaga() {
  yield delay(3000);
  yield console.log("Delayed Saga 3s");
}

export function* delayedFetchTodos() {
  yield delay(1488);
  yield put({ type: FETCH_TODOS });
  yield console.log("fetchTodos");
}

export function* watchDelayedFetchTodos() {
  yield takeEvery(FETCH_TODOS, delayedFetchTodos);
}

export function* rootSaga() {
  yield all([helloSaga(), delayedHelloSaga(), watchDelayedFetchTodos()]);
}

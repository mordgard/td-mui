import { all } from "redux-saga/effects";

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* helloSaga() {
  yield console.log("Hi, I'm saga!");
}

export function* delayedHelloSaga() {
  yield delay(3000);
  yield console.log("Delayed Saga 3s");
}

export function* rootSaga() {
  yield all([helloSaga(), delayedHelloSaga()]);
}

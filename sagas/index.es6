// import 'babel-polyfill' // index.htmlでUMD
import { takeEvery, takeLatest } from 'redux-saga'
import { take, call, put, fork } from 'redux-saga/effects'

function* members() {
  while (true) {
    const action = yield take('SAGA_GET');
  }
}

export default function* rootSaga() {
  yield fork(members);
}

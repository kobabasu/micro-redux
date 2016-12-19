// import 'babel-polyfill' // index.htmlでUMD
import { takeEvery, takeLatest } from 'redux-saga'
import { take, call, put, fork } from 'redux-saga/effects'

function* api() {
  while (true) {
    const action = yield take('API_GET');
  }
}

export default function* rootSaga() {
  yield fork(api);
}

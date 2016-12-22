// import 'babel-polyfill' // index.htmlでUMD
import { takeEvery, takeLatest } from 'redux-saga'
import { take, call, put, fork } from 'redux-saga/effects'

import fetch from 'isomorphic-fetch'
import { init } from '../lib/Fetch'

import * as mastersActions from '../actions/Masters'
import * as apiActions from '../actions/Api'

function mastersGet() {
  return fetch(mastersActions.URL, init.GET() )
    .then((response) => response.json() )
    .then((json) => json)
}

function apiGet() {
  return fetch(apiActions.URL, init.GET() )
    .then((response) => response.json() )
    .then((json) => json)
}

function* masters() {
    const payload = yield call(mastersGet);
    yield put(mastersActions.receive(payload));
}

function* api() {
  while(true) {
    const action = yield take('API_GET');
    const payload = yield call(apiGet);
    yield put(apiActions.receive(payload));
  }
}

export default function* rootSaga() {
  yield masters();
  yield fork(api);
}

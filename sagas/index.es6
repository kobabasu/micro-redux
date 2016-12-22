// import 'babel-polyfill' // index.htmlでUMD
import { takeEvery, takeLatest } from 'redux-saga'
import { take, call, put, fork } from 'redux-saga/effects'

import fetch from 'isomorphic-fetch'
import { init } from '../lib/Fetch'

import * as actions from '../actions/Api'

const URL = '/admin/api/users/';

function apiGet() {
  return fetch(URL, init.GET() )
    .then((response) => response.json() )
    .then((json) => json)
}

function* api() {
  while(true) {
    const action = yield take('API_GET');
    const payload = yield call(apiGet);
    yield put(actions.receive(payload));
  }
}

export default function* rootSaga() {
  yield [
    api()
  ]
}

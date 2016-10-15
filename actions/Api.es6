import ES6Promise from 'es6-promise'
ES6Promise.polyfill();
import fetch from 'isomorphic-fetch'
import { init } from '../lib/Fetch'

const URL = '/admin/api/users/';

// actions
export const GET = 'GET';
export const RECEIVE = 'RECEIVE';

// action creators
export const get = (dispatch, value) => {
  dispatch(_get());
  return {
    type: GET,
    value
  }; 
};

export const del = (dispatch, id) => {
  dispatch(_del(id));
  return {
    type: 'DEL',
    id
  };
};

export const receive = (value) => {
  return {
    type: RECEIVE,
    value
  }; 
};

// private
const _get = () => (dispatch) => {
  return fetch(URL, init.GET() )
    .then((response) => response.json() )
    .then((json) => {
      dispatch(receive(json));
    })
};

const _del = (id) => (dispatch) => {
  return fetch(URL, init.DELETE({ id: id }) )
    .then((response) => response.json() )
    .then((json) => {
      dispatch(_get());
    })
};

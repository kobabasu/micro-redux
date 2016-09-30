import ES6Promise from 'es6-promise'
ES6Promise.polyfill();
import fetch from 'isomorphic-fetch'

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

export const receive = (value) => {
  return {
    type: RECEIVE,
    value
  }; 
};

// private
const _get = () => (dispatch) => {
  return fetch(URL, { mode: 'cors' })
    .then( (response) => response.json() )
    .then( (json) => dispatch( receive(json[0])) )
};

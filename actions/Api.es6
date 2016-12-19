import fetch from 'isomorphic-fetch'
import { init } from '../lib/Fetch'

const URL = '/admin/api/users/';

// actions
export const GET = 'API_GET';
export const DEL = 'API_DEL';
export const RECEIVE = 'API_RECEIVE';

// action creators
export const get = (value) => {
  return {
    type: GET,
    value
  }; 
};

export const del = (id) => {
  return {
    type: DEL,
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

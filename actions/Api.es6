import fetch from 'isomorphic-fetch'

const URL = '/admin/api/users/';

// actions
export const API_GET = 'API_GET';
export const API_RECEIVE = 'API_RECEIVE';

// action creators
export const get = () => {
  return {
    type: API_GET
  }; 
};

export const receive = (value) => {
  return {
    type: API_RECEIVE,
    payload: value
  }; 
};

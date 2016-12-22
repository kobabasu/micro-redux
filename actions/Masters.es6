import fetch from 'isomorphic-fetch'

export const URL = '/admin/api/masters/';

// actions
export const MASTERS_GET = 'MASTERS_GET';
export const MASTERS_RECEIVE = 'MASTERS_RECEIVE';

// action creators
export const get = () => {
  return {
    type: MASTERS_GET
  }; 
};

export const receive = (value) => {
  return {
    type: MASTERS_RECEIVE,
    payload: value[0].name
  }; 
};

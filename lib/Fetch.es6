import { auth } from '../config/settings'

const headers = new Headers();
const USER = auth.user;
const PASS = auth.pass;
const base64 = new Buffer(USER + ':' + PASS)
  .toString('base64');

headers.append(
  'Content-Type', 'application/json;charset=utf-8'
);
headers.append(
  'Authorization', 'BASIC ' + base64
);

export const init = {
  GET: () => {
    return {
      mode: 'cors',
      method: 'GET',
      headers
    };
  },

  POST: (body = null) => {
    return {
      mode: 'cors',
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    };
  },

  PUT: (body = null) => {
    return {
      mode: 'cors',
      method: 'PUT',
      headers,
      body: JSON.stringify(body)
    };
  },

  DELETE: (body = null) => {
    return {
      mode: 'cors',
      method: 'DELETE',
      headers,
      body: JSON.stringify(body)
    };
  }
}

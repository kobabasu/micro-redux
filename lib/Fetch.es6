export const init = {
  GET: () => {
    return {
      mode: 'cors',
      method: 'GET'
    };
  },

  POST: (body = null) => {
    return {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(body)
    };
  },

  PUT: (body = null) => {
    return {
      mode: 'cors',
      method: 'PUT',
      body: JSON.stringify(body)
    };
  },

  DELETE: (body = null) => {
    return {
      mode: 'cors',
      method: 'DELETE',
      body: JSON.stringify(body)
    };
  }
}

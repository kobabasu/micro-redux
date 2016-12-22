import '../actions/Api'

const obj = {
  value: {}
}

const reducer = (state = obj, action) => {
  switch (action.type) {
    case 'API_GET':
      return state;

    case 'API_RECEIVE':
      return Object.assign({}, state, {
          value: action.payload
      });

    default:
      return state;
  };
};

export default reducer

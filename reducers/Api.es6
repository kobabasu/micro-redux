import '../actions/Api'

const obj = {
  value: null
}

const reducer = (state = obj, action) => {
  switch (action.type) {
    case 'API_GET':
    case 'API_DEL':
      return Object.assign({}, state, {
          value: action.value
      });

    case 'API_RECEIVE':
      return Object.assign({}, state, {
          value: action.value.name
      });

    default:
      return state;
  };
};

export default reducer

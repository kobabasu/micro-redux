import '../actions/Masters'

const obj = {
  name: ''
}

const reducer = (state = obj, action) => {
  switch (action.type) {
    case 'MASTERS_GET':
      return state;

    case 'MASTERS_RECEIVE':
      return Object.assign({}, state, {
          name: action.payload
      });

    default:
      return state;
  };
};

export default reducer

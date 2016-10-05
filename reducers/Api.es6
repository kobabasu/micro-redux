import ES6ObjectAssign from 'es6-object-assign'
ES6ObjectAssign.polyfill();
import '../actions/Api'

const obj = {
  value: null
}

const reducer = (state = obj, action) => {
  switch (action.type) {
    case 'GET':
      return Object.assign({}, state, {
          value: action.value
      });

    case 'RECEIVE':
      return Object.assign({}, state, {
          value: action.value.name
      });

    default:
      return state;
  };
};

export default reducer

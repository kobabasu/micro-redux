import ES6ObjectAssign from 'es6-object-assign'
ES6ObjectAssign.polyfill();
import '../actions/Form'

const obj = {
  value: null
}

const reducer = (state = obj, action) => {
  switch (action.type) {
    case 'SEND':
      return Object.assign({}, state, {
          value: action.value
      });

    default:
      return state;
  };
};

export default reducer

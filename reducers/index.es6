import { combineReducers } from 'redux'
import form from './Form'
import api from './Api'

const rootReducer = combineReducers({
  form,
  api
});

export default rootReducer

import { combineReducers } from 'redux'
import form from './Form'
import masters from './Masters'
import api from './Api'

const rootReducer = combineReducers({
  form,
  masters, 
  api
});

export default rootReducer

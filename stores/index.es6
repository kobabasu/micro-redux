import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import example from '../middleware/Example'

const middleware = [ thunk ];
// middleware.push(example);

export default createStore(
  reducer,
  applyMiddleware(...middleware)
);

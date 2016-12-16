import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import example from '../middleware/Example'

const middleware = [];
// middleware.push(example);

export default createStore(
  reducer,
  applyMiddleware(...middleware)
);

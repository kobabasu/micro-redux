import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'

import createSagaMiddleware  from 'redux-saga'
import rootSaga from '../sagas/index'
import sagaMonitor from '../lib/sagaMonitor'

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor
});

const middleware = [ sagaMiddleware ];

export default createStore(
  reducer,
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

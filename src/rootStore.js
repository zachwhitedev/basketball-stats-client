import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from './rootReducer.js';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, promise, sagaMiddleware))
);

sagaMiddleware.run(rootSaga)

export default rootStore;
// src/store.js

import { createStore} from 'redux';
import rootReducer from "./reducer";
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from 'redux';
import rootSaga from './sagas';
// Combine reducers

// Create store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store

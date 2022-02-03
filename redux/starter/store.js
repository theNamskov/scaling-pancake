
import { createStore, applyMiddleware } from 'redux';

import logMiddleware from './middlewares/log'

import rootReducer from './reducers/root'

const store = createStore(rootReducer, applyMiddleware(logMiddleware))

window.store = store

export default store
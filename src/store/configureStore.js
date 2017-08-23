import { createStore, compose, applyMiddleware } from 'redux';
import {autoRehydrate} from 'redux-persist'
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const logger = createLogger();

export default store = createStore(rootReducer, compose(
    applyMiddleware(thunk, logger),
    autoRehydrate()
));
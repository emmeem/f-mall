import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from './reducer/reducer';
import {createLogger} from 'redux-logger';

const logger = createLogger();

let store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
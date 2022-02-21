import { combineReducers, createStore } from 'redux';
import { successReducer } from './sucessReducer';

export const rootReducer = combineReducers({
    success: successReducer
});

export const store = createStore(rootReducer);

window.store = store;
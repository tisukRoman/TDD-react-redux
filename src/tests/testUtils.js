import { createStore } from 'redux';
import { rootReducer } from '../reducers/rootReducer';

/* 
* Returns node(s) with the given data-test attribute 
* @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
* @param {String} val - Value of data-test attribute
* @returns {ShallowWrapper}
*/
export const findByTestAttr = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`);
}

/* 
* Returns redux store 
* @param {object} initialState
* @returns {ReduxStore}
*/
export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState);
}

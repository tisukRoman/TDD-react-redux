import { PropTypes } from 'prop-types';

/* 
* Returns node(s) with the given data-test attribute 
* @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
* @param {String} val - Value of data-test attribute
* @returns {ShallowWrapper}
*/
export const findByTestAttr = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`);
}

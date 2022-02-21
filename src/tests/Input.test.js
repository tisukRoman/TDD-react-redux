/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './testUtils';
import Input from '../components/Input/Input';



const setup = (initialState = {}) => {
    return shallow(<Input {...initialState} />);
}


describe('<Input/>', () => {
    describe('Rendering:', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = setup();
        })
        it('renders without an error', () => {
            let inputComponent = findByTestAttr(wrapper, 'input-component');
            expect(inputComponent.length).toBe(1);
        });
        it('renders input box', () => {
            let inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.length).toBe(1);
        });
        it('renders submit button', () => {
            let submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(1);
        })
    });

})
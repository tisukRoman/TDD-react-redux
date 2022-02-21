/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr, storeFactory } from '../testUtils';
import Input from '../../components/Input/Input';
import { Provider } from 'react-redux';

const setup = (initialState = {}) => {
    let store = storeFactory({ success: false });
    return mount(
        <Provider store={store}>
            <Input {...initialState} />
        </Provider>
    )
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
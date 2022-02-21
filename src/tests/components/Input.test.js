/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr, storeFactory } from '../testUtils';
import Input from '../../components/Input/Input';
import { Provider } from 'react-redux';

const setup = (initialState = {}) => {
    let store = storeFactory(initialState);
    return mount(
        <Provider store={store}>
            <Input />
        </Provider>
    )
}

describe('<Input/>', () => {
    describe('Rendering when success="false"', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup({ success: false });
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
    describe('Rendering when success="true"', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup({ success: true });
        })
        it('renders without an error', () => {
            let inputComponent = findByTestAttr(wrapper, 'input-component');
            expect(inputComponent.length).toBe(1);
        });
        it('does not render input box', () => {
            let inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.length).toBe(0);
        });
        it('does not render submit button', () => {
            let submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(0);
        })
    });

})
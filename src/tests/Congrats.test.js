/* eslint-disable testing-library/await-async-query */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { findByTestAttr } from './testUtils';
import Congrats from '../components/Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
    const wrapper = shallow(<Congrats {...props} />);
    return wrapper;
}

describe('<Congrats/>', () => {
    it('renders without an error', () => {
        const wrapper = setup();
        const congratsComponent = findByTestAttr(wrapper, "congrats-component");
        expect(congratsComponent.length).toBe(1);
    });
    it('renders no text if "success" prop is false', () => {
        const wrapper = setup({ success: false });
        const congratsComponent = findByTestAttr(wrapper, "congrats-component");
        expect(congratsComponent.text()).toBe('');
    });
    it('renders non-empty congrats message is "success" prop is true', () => {
        const wrapper = setup({ success: true });
        const congratsComponent = findByTestAttr(wrapper, "congrats-component");
        expect(congratsComponent.text()).toBe('Congrats! You have guessed the word!');
    })
})
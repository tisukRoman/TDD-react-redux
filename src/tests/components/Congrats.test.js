/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../testUtils';
import Congrats from '../../components/Congrats/Congrats';


const defaultProps = { success: false };

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    const wrapper = shallow(<Congrats {...setupProps} />);
    return wrapper;
}

describe('<Congrats/>', () => {
    it('renders without an error', () => {
        const wrapper = setup();
        const congratsComponent = findByTestAttr(wrapper, "congrats-component");
        expect(congratsComponent.length).toBe(1);
    });
    it('renders no text if "success" prop is false', () => {
        const wrapper = setup();
        const congratsComponent = findByTestAttr(wrapper, "congrats-component");
        expect(congratsComponent.text()).toBe('');
    });
    it('renders non-empty congrats message is "success" prop is true', () => {
        const wrapper = setup({ success: true });
        const congratsComponent = findByTestAttr(wrapper, "congrats-component");
        expect(congratsComponent.text()).toBe('Congrats! You have guessed the word!');
    });
})
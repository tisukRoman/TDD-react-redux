/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './testUtils';
import GuessedWords from '../components/GuessedWords/GuessedWords';

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />);
}

describe('<GuessedWords/> component', () => {
    it('renders without an error', () => {
        const wrapper = setup();
        const guessedWordsComponent = findByTestAttr(wrapper, "guessed-words-component");
        expect(guessedWordsComponent.length).toBe(1);
    });

    it('should render instruction only if no attemps were made', () => {
        let wrapper = setup({ guessedWords: [] });
        let instruction = findByTestAttr(wrapper, "instruction");
        expect(instruction.length).toBe(1);
        expect(instruction.text().length).not.toBe(0);

        wrapper = setup();
        wrapper.update();
        instruction = findByTestAttr(wrapper, "instruction");
        expect(instruction.length).toBe(0);
    });

    it('renders a table if some attempts was made', () => {
        const wrapper = setup();
        const table = findByTestAttr(wrapper, "guessed-words-table");
        expect(table.length).toBe(1);
    });

    it('renders as many rows in the table as many attempts were made', () => {
        let wrapper = setup();
        let rows = findByTestAttr(wrapper, "guessed-words-row");
        expect(rows.length).toBe(1);

        wrapper = setup({ guessedWords: [
            { guessedWord: 'train', letterMatchCount: 3 },
            { guessedWord: 'seven', letterMatchCount: 1 },
            { guessedWord: 'hello', letterMatchCount: 1 },
        ] });
        wrapper.update();
        rows = findByTestAttr(wrapper, "guessed-words-row");
        expect(rows.length).toBe(3);
    });



})
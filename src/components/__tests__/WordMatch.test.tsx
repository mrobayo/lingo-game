import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/testUtil';
import WordMatch, { WordMatchProps } from '../WordMatch';

const defaultProps: WordMatchProps = { letterAttempts: [] };

const setup = (props: WordMatchProps = { letterAttempts: [] }) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<WordMatch {...setupProps} />);
};

describe('renders wordmatch component', () => {
    test('renders wordmatch', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-wordmatch');
        expect(component.length).toBe(1);
    });
    test('renders wordmatch no word', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-wordmatch').children();
        expect(component.length).toBe(1);
    });
    test('renders wordmatch with word', () => {
        const wrapper = setup({ word: 'WINNER', letterAttempts: [] });
        const component = findByTestAttr(wrapper, 'component-wordmatch').children();
        expect(component.length).toBe(6);
    });
});

import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/testUtil';
import SingleLetter, { LetterProps } from '../SingleLetter';

const defaultProps: LetterProps = {};

const setup = (props: LetterProps = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<SingleLetter {...setupProps} />);
};

describe('renders singleletter component', () => {
    test('renders singleletter', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-singleletter');
        expect(component.length).toBe(1);
    });
    test('renders singleletter no letter', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-singleletter');
        expect(component.text()).toBe('_');
    });
    test('renders singleletter with letter', () => {
        const wrapper = setup({ letter: 'A', show: true });
        const component = findByTestAttr(wrapper, 'component-singleletter');
        expect(component.text()).toBe('A');
    });
});

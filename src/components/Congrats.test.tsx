import React from 'react';
import { shallow } from 'enzyme';
import Congrats, { CongratsProps } from './Congrats';
import { findByTestAttr } from '../test/test-util';

const defaultProps: CongratsProps = {};

const setup = (props: CongratsProps = { success: false }) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Congrats {...setupProps} />);
};

describe('renders congrats component', () => {
    test('renders congrats', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-congrats');
        expect(component.text()).toBe('');
    });

    test('renders no text when success prop is false', () => {
        const wrapper = setup({ success: false });
        const component = findByTestAttr(wrapper, 'component-congrats');
        expect(component.text()).toBe('');
    });
    test('renders no text when success prop is true', () => {
        const wrapper = setup({ success: true });
        const congratsMessage = findByTestAttr(wrapper, 'congrats-message');
        expect(congratsMessage.text().length).not.toBe(0);
    });
});

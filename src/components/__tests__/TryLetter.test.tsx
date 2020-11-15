import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/testUtil';
import TryLetter, { TryLetterProps } from '../TryLetter';

const defaultProps: TryLetterProps = { isDisabled: true, letterAttempts: [] };

const setup = (props: TryLetterProps = { isDisabled: true, letterAttempts: [] }) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<TryLetter {...setupProps} />);
};

describe('check tryletter', () => {
    test('check is disabled', () => {
        const wrapper = setup({ isDisabled: true, letterAttempts: ['C'] });
        const component = findByTestAttr(wrapper, 'component-tryletter');
        expect(component.length).toBe(1);
    });
    /*test('check is enabled', () => {
        const wrapper = setup({ isDisabled: false });
        wrapper.setState({ text: '1' });
        const component = findByTestAttr(wrapper, 'text-input');
        expect(component.getDOMNode<HTMLInputElement>().value).toEqual('1');
    });*/
});

import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/testUtil';
import GuessWord, { GuessWordProps } from '../GuessWord';

const defaultProps: GuessWordProps = { isDisabled: true };

const setup = (props: GuessWordProps = { isDisabled: true }) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessWord {...setupProps} />);
};

describe('check GuessWord', () => {
    test('check is disabled', () => {
        const wrapper = setup({ isDisabled: true });
        const component = findByTestAttr(wrapper, 'component-tryguess-input');
        expect(component.length).toBe(1);
    });
    test('check is enabled', () => {
        const wrapper = setup({ isDisabled: false });
        const component = findByTestAttr(wrapper, 'component-tryguess-input');
        expect(component.length).toBe(1);
    });
    /*test('check is enabled', () => {
        const wrapper = setup({ isDisabled: false });
        wrapper.setState({ text: '1' });
        const component = findByTestAttr(wrapper, 'text-input');
        expect(component.getDOMNode<HTMLInputElement>().value).toEqual('1');
    });*/
});

import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/testUtil';
import AttemptHistory, { AttemptHistoryProps } from '../AttemptHistory';

const defaultProps: AttemptHistoryProps = { attemptHistory: [] };

const setup = (props: AttemptHistoryProps = { attemptHistory: [] }) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<AttemptHistory {...setupProps} />);
};

describe('renders attemptHistory', () => {
    test('renders component', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-attempt-history');
        expect(component.length).toBe(1);
    });
    test('renders no letters', () => {
        const wrapper = setup({ attemptHistory: [] });
        const component = findByTestAttr(wrapper, 'component-try-message');
        expect(component.length).toBe(1);
    });
    test('renders letters', () => {
        const wrapper = setup({
            attemptHistory: [
                { attemptLetter: 'A', matchCount: 3 },
                { attemptLetter: 'C', matchCount: 2 },
            ],
        });
        const component = findByTestAttr(wrapper, 'component-attempt-letter');
        expect(component.length).toBe(2);
    });
});

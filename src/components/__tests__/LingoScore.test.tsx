import { shallow } from 'enzyme';
import LingoScore, { LingoScoreProps } from '../LingoScore';
import SingleLetter from '../SingleLetter';
import React from 'react';
import { findByTestAttr } from '../../test/testUtil';

const defaultProps: LingoScoreProps = {};

const setup = (props: LingoScoreProps = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<LingoScore {...setupProps} />);
};

describe('renders lingoscore component', () => {
    test('renders lingoscore', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-lingoscore');
        expect(component.length).toBe(1);
    });
});

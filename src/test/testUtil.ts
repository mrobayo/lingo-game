import { ShallowWrapper } from 'enzyme';

//
export const findByTestAttr = (wrapper: ShallowWrapper<JSX.Element>, val: string): ShallowWrapper => {
    return wrapper.find(`[data-test='${val}']`);
};

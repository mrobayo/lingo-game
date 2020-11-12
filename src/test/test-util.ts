//
export const findByTestAttr = (wrapper: any, val: string): any => {
    return wrapper.find(`[data-test='${val}']`);
};

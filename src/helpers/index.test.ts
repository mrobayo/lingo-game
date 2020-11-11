import { checkWordFound, checkContainsLetter } from "./index";

describe('Checking Helper Functions', () => {
    const secret: string = 'SAMPLE';

    const emptyWord: string = '';
    const wrongWord: string = 'WHATEVER';
    const correctButSmall: string = 'sample';

    test('empty word', () => {
        expect(checkWordFound(emptyWord, secret)).toBe(false);
    });
    test('wrong word', () => {
        expect(checkWordFound(wrongWord, secret)).toBe(false);
    });
    test('correct word but smallcase', () => {
        expect(checkWordFound(correctButSmall, secret)).toBe(true)
    });
});

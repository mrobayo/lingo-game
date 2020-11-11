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
        expect(checkWordFound(correctButSmall, secret)).toBe(true);
    });
});

describe('Checking checkContainsLetter Functions', () => {
    const secret: string = 'SAMPLE';

    const emptyLetter: string = '';
    const wrongLetter: string = 'w';
    const correctLetter: string = 'e';

    test('empty letter', () => {
        expect(checkContainsLetter(emptyLetter, secret)).toBe(false);
    });
    test('wrong letter', () => {
        expect(checkContainsLetter(wrongLetter, secret)).toBe(false);
    });
    test('correct letter', () => {
        expect(checkContainsLetter(correctLetter, secret)).toBe(true)
    });
});

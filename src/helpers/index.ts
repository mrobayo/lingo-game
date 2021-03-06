// Check if word matches
export const checkWordFound = (word: string, secret: string): boolean => {
    return word !== '' && secret.toUpperCase() == word.toUpperCase();
};

// Check contains the secret
export const checkContainsLetter = (letter: string, secret: string): boolean => {
    return letter !== '' && secret.indexOf(letter.toUpperCase()) !== -1;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const updateState = (oldState: object, updatedProperties: object): object => {
    return {
        ...oldState,
        ...updatedProperties,
    };
};

export const isVowelLetter = (letter: string): boolean => 'AEIOU'.indexOf(letter.toUpperCase()) !== -1;

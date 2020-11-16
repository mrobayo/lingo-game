import { LETTER_ATTEMPT, LetterAttempt, LingoActionTypes, WORD_GUESSED, WordGuessed } from './types';

export function tryLetter(letterAttempt: LetterAttempt): LingoActionTypes {
    return {
        type: LETTER_ATTEMPT,
        payload: letterAttempt,
    };
}

export function guessWord(wordGuessed: WordGuessed): LingoActionTypes {
    return {
        type: WORD_GUESSED,
        payload: wordGuessed,
    };
}

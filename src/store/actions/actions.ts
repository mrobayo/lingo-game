import {
    LETTER_ATTEMPT,
    LetterAttempt,
    LingoActionTypes,
    START_NEW_GAME,
    NewGame,
    WORD_GUESSED,
    WordGuessed,
} from './types';

export function startNewGame(newGame: NewGame): LingoActionTypes {
    return {
        type: START_NEW_GAME,
        payload: newGame,
    };
}

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

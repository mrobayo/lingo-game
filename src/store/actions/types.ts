export const WORD_GUESSED = 'WORD_GUESSED';
export const LETTER_ATTEMPT = 'LETTER_ATTEMPT';
export const REQUEST_HINT = 'REQUEST_HINT';

export interface LingoState {
    lingoScore: number;
    secretWord: string;
    letterAttempts: string[];
    wordGuessed: string;
    gameStatus: string;
}

export interface LetterAttempt {
    letter: string;
}

export interface WordGuessed {
    word: string;
}

interface LetterAttemptAction {
    type: typeof LETTER_ATTEMPT;
    payload: LetterAttempt;
}

interface WordGuessedAction {
    type: typeof WORD_GUESSED;
    payload: WordGuessed;
}

interface RequestHintAction {
    type: typeof REQUEST_HINT;
    payload: never;
}

export type LingoActionTypes = LetterAttemptAction | WordGuessedAction | RequestHintAction;

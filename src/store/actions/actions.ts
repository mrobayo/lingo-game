import { LETTER_ATTEMPT, LetterAttempt, LingoActionTypes } from './types';

export function letterAttempt(letterAttempt: LetterAttempt): LingoActionTypes {
    return {
        type: LETTER_ATTEMPT,
        payload: letterAttempt,
    };
}

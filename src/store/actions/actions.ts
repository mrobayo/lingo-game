import { action, createAction } from 'typesafe-actions';
import { LETTER_ATTEMPT, LetterAttempt, START_NEW_GAME, NewGame, WORD_GUESSED, WordGuessed } from './types';
import { isVowelLetter } from '../../helpers';

// With Typesafe-actions
export const startNewGame = createAction(START_NEW_GAME, (newGame: NewGame) => newGame)();

export const tryLetter = createAction(LETTER_ATTEMPT, (letterAttempt: LetterAttempt) => {
    return { letter: letterAttempt.letter, lostPoints: isVowelLetter(letterAttempt.letter) ? 10 : 5 };
})();

export const guessWord = createAction(WORD_GUESSED, (wordGuessed: WordGuessed) => wordGuessed)();

// Old way
/* -----------------------------------
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
* -----------------------------------
*/

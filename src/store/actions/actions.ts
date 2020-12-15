import { action, createAction } from 'typesafe-actions';
import {
    LETTER_ATTEMPT,
    LetterAttempt,
    SET_SECRET,
    SetSecret,
    START_NEW_GAME,
    NewGame,
    WORD_GUESSED,
    WordGuessed,
    GameStatus,
} from './types';
import { isVowelLetter } from '../../helpers';

// With Typesafe-actions
export const startNewGame = createAction(START_NEW_GAME, (newGame: NewGame) => newGame)();

export const setSecret = createAction(SET_SECRET, (secret: SetSecret) => secret)();

export const tryLetter = createAction(LETTER_ATTEMPT, (letterAttempt: LetterAttempt) => {
    const lostPoints = isVowelLetter(letterAttempt.letter) ? 10 : 5;
    return { letter: letterAttempt.letter, lostPoints: lostPoints };
})();

export const guessWord = createAction(WORD_GUESSED, (wordGuessed: WordGuessed) => wordGuessed)();

export const gameOver = createAction(GameStatus.GAME_OVER)();

/*export const letterAttempted = (letterAttempt: LetterAttempt) => {
    return (dispatch: Dispatch) => {
        dispatch(tryLetter(letterAttempt));
        dispatch(gameOver());
    };
};*/

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

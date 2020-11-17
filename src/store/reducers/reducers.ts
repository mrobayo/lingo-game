import { createReducer, ActionType } from 'typesafe-actions';
import { GameStatus, LingoState } from '../actions/types';

import * as actions from '../actions/actions';

export type LingoActionTypes = ActionType<typeof actions>;

export const initialState: LingoState = {
    lingoScore: 0,
    secretWord: '',
    letterAttempts: [],
    wordGuessed: '',
    gameStatus: GameStatus.NEW_GAME,
};

export const lingoReducer = createReducer<LingoState, LingoActionTypes>(initialState)
    .handleAction(actions.startNewGame, (state, action) => ({
        ...state,
        gameStatus: GameStatus.PLAYING,
        wordGuessed: '',
        letterAttempts: [],
        lingoScore: action.payload.lingoScore,
        secretWord: action.payload.secretWord,
    }))
    .handleAction(actions.tryLetter, (state, action) => {
        const lingoScore = state.lingoScore - action.payload.lostPoints;
        const newState = {
            letterAttempts: [...state.letterAttempts, action.payload.letter],
            lingoScore: lingoScore > 0 ? lingoScore : 0,
            gameStatus: lingoScore <= 0 ? GameStatus.GAME_OVER : state.gameStatus,
        };

        return {
            ...state,
            ...newState,
        };
    })
    .handleAction(actions.guessWord, (state, action) => ({
        ...state,
        wordGuessed: action.payload.word,
    }))
    .handleAction(actions.gameOver, (state, action) => ({
        ...state,
        gameStatus: GameStatus.GAME_OVER,
    }));

/*
const startNewGame = (state: LingoState, newGame: NewGame): LingoState => {
    return {
        ...state,
        gameStatus: GameStatus.PLAYING,
        wordGuessed: '',
        letterAttempts: [],
        lingoScore: newGame.lingoScore,
        secretWord: newGame.secretWord,
    };
};

const letterAttempt = (state: LingoState, letterAttempt: LetterAttempt): LingoState => {
    return {
        ...state,
        letterAttempts: [...state.letterAttempts, letterAttempt.letter],
    };
};

const wordGuessed = (state: LingoState, wordGuessed: WordGuessed): LingoState => {
    return {
        ...state,
        wordGuessed: wordGuessed.word,
    };
};

export function lingoReducer(state = initialState, action: LingoActionTypes): LingoState {
    switch (action.type) {
        case LETTER_ATTEMPT:
            return letterAttempt(state, action.payload);
        case WORD_GUESSED:
            return wordGuessed(state, action.payload);
        case START_NEW_GAME:
            return startNewGame(state, action.payload);
        default:
            return state;
    }
}*/

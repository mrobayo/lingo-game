export const WORD_GUESSED = 'WORD_GUESSED';
export const LETTER_ATTEMPT = 'LETTER_ATTEMPT';
export const REQUEST_HINT = 'REQUEST_HINT';
export const START_NEW_GAME = 'START_NEW_GAME';
export const SET_SECRET = 'SET_SECRET';

export enum GameStatus {
    NEW_GAME = 'NEW_GAME',
    PLAYING = 'PLAYING',
    GAME_OVER = 'GAME_OVER',
}

// Lingo App State (Redux)
export interface LingoState {
    lingoScore: number;
    secretWord: string;
    letterAttempts: string[];
    wordGuessed: string;
    gameStatus: GameStatus;
}

export interface NewGame {
    lingoScore: number;
    secretWord: string;
}

export interface SetSecret {
    secretWord: string;
}

export interface LetterAttempt {
    letter: string;
    lostPoints?: number;
}

export interface WordGuessed {
    word: string;
}

/*
// Start new Game
interface StartNewGameAction {
    type: typeof START_NEW_GAME;
    payload: NewGame;
}

//
interface LetterAttemptAction {
    type: typeof LETTER_ATTEMPT;
    payload: LetterAttempt;
}

//
interface WordGuessedAction {
    type: typeof WORD_GUESSED;
    payload: WordGuessed;
}

interface RequestHintAction {
    type: typeof REQUEST_HINT;
    payload: never;
}

export type LingoActionTypes = LetterAttemptAction | WordGuessedAction | RequestHintAction | StartNewGameAction;
*/

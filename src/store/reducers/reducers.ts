import {
    LETTER_ATTEMPT,
    LetterAttempt,
    LingoActionTypes,
    LingoState,
    WORD_GUESSED,
    WordGuessed,
} from '../actions/types';

export const initialState: LingoState = {
    lingoScore: 100,
    secretWord: '',
    letterAttempts: [],
    wordGuessed: '',
    gameStatus: 'NEW',
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
        default:
            return state;
    }
}

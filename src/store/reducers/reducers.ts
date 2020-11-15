import { LETTER_ATTEMPT, LetterAttempt, LingoActionTypes, LingoState } from '../actions/types';

const initialState: LingoState = {
    lingoScore: 100,
    secretWord: '',
    letterAttempts: [],
    wordGuessed: '',
};

const letterAttempt = (state: LingoState, letterAttempt: LetterAttempt): LingoState => {
    return {
        ...state,
        letterAttempts: [...state.letterAttempts, letterAttempt.letter],
    };
};

export function lingoReducer(state = initialState, action: LingoActionTypes): LingoState {
    switch (action.type) {
        case LETTER_ATTEMPT:
            return letterAttempt(state, action.payload);
        default:
            return state;
    }
}

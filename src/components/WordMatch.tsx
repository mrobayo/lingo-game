import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { GameStatus, LingoActionTypes } from '../store/actions/types';
import { guessWord } from '../store/actions/actions';
import { RootState } from '../store';
import SingleLetter from './SingleLetter';

const mapStateToProps = (state: RootState) => ({
    word: state.lingo.secretWord,
    letterAttempts: state.lingo.letterAttempts,
});

const mapDispatchToProps = (dispatch: Dispatch<LingoActionTypes>) => {
    return {
        onGuessWord: (word: string) => dispatch(guessWord({ word: word })),
    };
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
export type WordMatchProps = StateProps & DispatchProps; //{ isDisabled: boolean };

const WordMatch = ({ word, letterAttempts }: WordMatchProps): JSX.Element => {
    let contents;
    if (!word || word.length === 0) {
        contents = 'no word to guess';
    } else {
        contents = word
            .split('')
            .map((letter, index) => (
                <SingleLetter key={index} letter={letter} show={letterAttempts.includes(letter)} />
            ));
    }

    return (
        <div className="row justify-content-md-center display-4 my-3" data-test="component-wordmatch">
            {contents}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(WordMatch);

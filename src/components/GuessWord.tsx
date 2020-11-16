import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../store';
import { GameStatus, LingoActionTypes } from '../store/actions/types';
import { guessWord } from '../store/actions/actions';

const mapStateToProps = (state: RootState) => ({
    isDisabled: state.lingo.gameStatus !== GameStatus.PLAYING,
});

const mapDispatchToProps = (dispatch: Dispatch<LingoActionTypes>) => {
    return {
        onGuessWord: (word: string) => dispatch(guessWord({ word: word })),
    };
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
export type GuessWordProps = StateProps & DispatchProps; //{ isDisabled: boolean };

const GuessWord: React.VFC<GuessWordProps> = ({ isDisabled, onGuessWord }: GuessWordProps) => {
    const [text, setText] = useState('');

    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setText(e.currentTarget.value);
    };
    const handleGuessWord = (): void => {
        // e: React.MouseEvent<HTMLButtonElement>
        console.log('guess word', text);
        onGuessWord(text);
    };

    return (
        <div data-test="component-tryguess-input" className="container">
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                    <span className={text.length <= 1 ? 'text-muted' : 'display-4'}>Word</span>:
                </label>
                <input
                    data-test="text-input"
                    onChange={handleChange}
                    disabled={isDisabled}
                    value={text}
                    className="form-control text-uppercase form-control-lg"
                />
            </div>
            <div>
                <button
                    data-test="btn-guessword"
                    disabled={text.length <= 1}
                    onClick={handleGuessWord}
                    className="btn btn-primary mb-2 btn-lg"
                >
                    Guess Word
                </button>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(GuessWord);

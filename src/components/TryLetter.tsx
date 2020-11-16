import React, { useState } from 'react';
import { RootState } from '../store';
import { connect } from 'react-redux';
import { tryLetter } from '../store/actions/actions';
import { Dispatch } from 'redux';
import { LingoActionTypes } from '../store/actions/types';

const mapStateToProps = (state: RootState) => ({
    letterAttempts: state.lingo.letterAttempts,
    isDisabled: !state.lingo.secretWord,
});

const mapDispatchToProps = (dispatch: Dispatch<LingoActionTypes>) => {
    return {
        onTryLetter: (letter: string) => dispatch(tryLetter({ letter: letter })),
    };
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export type TryLetterProps = StateProps & DispatchProps;

const TryLetter: React.VFC<TryLetterProps> = (props: TryLetterProps) => {
    const handleTryLetter = (e: React.MouseEvent<HTMLButtonElement>): void => {
        const letter = e.currentTarget.innerText;
        props.onTryLetter(letter);
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const letters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((letter, index) => (
        <button
            key={index}
            onClick={handleTryLetter}
            className="col-md-1 col btn btn-info m-1"
            disabled={props.letterAttempts.includes(letter)}
        >
            {letter}
        </button>
    ));

    return (
        <div data-test="component-tryletter" className="container">
            <div className="form-group">
                <label className="col-sm-2 col-form-label">
                    <span className="display-4">Letter</span>
                </label>
                <div className="row mb-3">{letters}</div>
            </div>
            <div></div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(TryLetter);

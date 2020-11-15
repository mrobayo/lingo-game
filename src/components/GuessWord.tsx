import React, { useState } from 'react';

export type GuessWordProps = { isDisabled: boolean };

const GuessWord: React.VFC<GuessWordProps> = ({ isDisabled }: GuessWordProps) => {
    const [text, setText] = useState('');

    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setText(e.currentTarget.value);
    };
    const handleGuessWord = (): void => {
        console.log('guess word');
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

export default GuessWord;

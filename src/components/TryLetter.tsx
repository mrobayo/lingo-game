import React, { useState } from 'react';

export type TryLetterProps = { isDisabled: boolean; letterAttempts: string[] };

const TryLetter: React.VFC<TryLetterProps> = ({ isDisabled, letterAttempts = ['A', 'C'] }: TryLetterProps) => {
    const handleTryLetter = (): void => {
        console.log('try letter');
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const letters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((letter, index) => (
        <button
            key={index}
            onClick={handleTryLetter}
            className="col-md-1 col btn btn-info m-1"
            disabled={letterAttempts.includes(letter)}
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

export default TryLetter;

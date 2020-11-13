import React from 'react';

export type LetterProps = { letter?: string; show?: boolean };

const SingleLetter = ({ letter, show }: LetterProps): JSX.Element => {
    return (
        <span
            className={`col mx-3 shadow-sm p-3 text-center ${show ? 'bg-primary text-white' : 'bg-light'}`}
            data-test="component-singleletter"
        >
            {show && letter && letter.length > 0 ? letter : '_'}
        </span>
    );
};
export default SingleLetter;

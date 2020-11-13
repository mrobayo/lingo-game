import React from 'react';
import SingleLetter from './SingleLetter';

export type WordMatchProps = { word?: string; letterAttempts: string[] };

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

export default WordMatch;

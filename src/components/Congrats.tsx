import React from 'react';

export type CongratsProps = { success?: boolean };

const Congrats = ({ success }: CongratsProps) => {
    if (!success) {
        return <div data-test="component-congrats" />;
    }
    return (
        <div data-test="component-congrats" className="alert alert-success">
            <span data-test="congrats-message">Congratulations! You guessed the word.</span>
        </div>
    );
};

export default Congrats;

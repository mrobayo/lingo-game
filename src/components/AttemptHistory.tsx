import React from 'react';

export type AttemptLetterType = { attemptLetter: string; matchCount: number };

export type AttemptHistoryProps = {
    attemptHistory: Array<AttemptLetterType>;
};

const AttemptHistory = ({ attemptHistory }: AttemptHistoryProps): JSX.Element => {
    let contents;
    if (attemptHistory.length === 0) {
        contents = <span data-test="component-try-message">Try a letter!</span>;
    } else {
        contents = (
            <table data-test="component-try-letters">
                <thead>
                    <tr>
                        <th>Letter</th>
                        <th>Match</th>
                    </tr>
                </thead>
                <tbody>
                    {attemptHistory.map((attempt, index) => {
                        return (
                            <tr data-test="component-attempt-letter" key={index}>
                                <td>{attempt.attemptLetter}</td>
                                <td>{attempt.matchCount}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
    return <div data-test="component-attempt-history">{contents}</div>;
};

export default AttemptHistory;

import React from 'react';
import './App.css';

import Congrats from './components/Congrats';
import WordMatch from './components/WordMatch';
import GuessWord from './components/GuessWord';
import TryLetter from './components/TryLetter';

function App(): JSX.Element {
    const letterAttempts = ['T', 'R', 'C', 'A', 'F', 'Y'];
    return (
        <div className="container">
            <header>
                <h1 className="display-2">Lingo</h1>
            </header>
            <section>
                <WordMatch word="TYPESCRIPT" letterAttempts={letterAttempts} />
                <hr />
                <Congrats success={true} />
                <hr />
                <GuessWord isDisabled={false} />
                <hr />
                <TryLetter isDisabled={false} letterAttempts={letterAttempts} />
                <hr />
            </section>
        </div>
    );
}

export default App;

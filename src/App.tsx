import React from 'react';
import logo from './logo.svg';
import './App.css';

import Congrats from './components/Congrats';
import WordMatch from './components/WordMatch';

function App(): JSX.Element {
    return (
        <div className="container">
            <Congrats success={true} />
            <WordMatch word="TYPESCRIPT" letterAttempts={['T', 'R']} />
        </div>
    );
}

export default App;

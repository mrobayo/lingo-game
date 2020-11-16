import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { RootState } from './store';
import './App.css';

import Congrats from './components/Congrats';
import WordMatch from './components/WordMatch';
import GuessWord from './components/GuessWord';
import TryLetter from './components/TryLetter';
import { GameStatus, LingoActionTypes } from './store/actions/types';
import { startNewGame } from './store/actions/actions';
import LingoScore from './components/LingoScore';

const mapState = (state: RootState) => ({
    success: state.lingo.gameStatus === GameStatus.GAME_OVER,
});
const mapDispatch = (dispatch: Dispatch<LingoActionTypes>) => {
    return {
        startGame: (word: string, score: number) =>
            dispatch(
                startNewGame({
                    lingoScore: 100,
                    secretWord: 'TYPES',
                }),
            ),
    };
};

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;

export type AppProps = StateProps & DispatchProps;

function App(props: AppProps): JSX.Element {
    const letterAttempts = ['T', 'R', 'C', 'A', 'F', 'Y'];
    const handleStartNewGame = () => {
        props.startGame('new word', 100);
    };
    return (
        <div className="container">
            <header>
                <aside className="float-right p-3 my-3">
                    <button onClick={handleStartNewGame} className="btn btn-info mx-4">
                        Start New Game
                    </button>
                    <LingoScore />
                </aside>
                <h1 className="display-2">Lingo</h1>
            </header>
            <section>
                <WordMatch />
                <hr />
                <Congrats success={props.success} />
                <hr />
                <GuessWord />
                <hr />
                <TryLetter />
                <hr />
            </section>
        </div>
    );
}

export default connect(mapState, mapDispatch)(App);

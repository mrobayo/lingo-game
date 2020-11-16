import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { GameStatus } from '../store/actions/types';

const mapState = (state: RootState) => ({
    //success: state.lingo.gameStatus === GameStatus.GAME_OVER,
    score: state.lingo.lingoScore,
    isPlaying: state.lingo.gameStatus == GameStatus.PLAYING,
});

//type StateProps = ReturnType<typeof mapState>;
//type DispatchProps = ReturnType<typeof mapDispatch>;

export type LingoScoreProps = ReturnType<typeof mapState>;

const LingoScore: React.VFC<LingoScoreProps> = ({ score, isPlaying }: LingoScoreProps) => (
    <span className="shadow-sm p-3">SCORE: {isPlaying ? score : '---'}</span>
);
export default connect(mapState)(LingoScore);

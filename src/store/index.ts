import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { lingoReducer } from './reducers/reducers';

const rootReducer = combineReducers({
    lingo: lingoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

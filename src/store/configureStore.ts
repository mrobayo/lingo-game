import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import { rootReducer, RootState } from './index';
import { initialState as lingoState, LingoActionTypes } from './reducers/reducers';
import { Epic } from 'redux-observable';
import { epicSecretWord } from './epics';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const epicMiddleware = createEpicMiddleware<LingoActionTypes, LingoActionTypes, RootState>();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//const composeEnhancers =
//    process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState: RootState = {
    lingo: lingoState,
};

export const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(epicMiddleware))); // applyMiddleware(epicMiddleware));

type RootEpic = Epic<LingoActionTypes, LingoActionTypes, RootState>;
const rootEpic = combineEpics(epicSecretWord);

epicMiddleware.run((rootEpic as unknown) as RootEpic);

// export type Store = StateType<typeof store>;
// export type RootState = StateType<typeof import('./root-reducers').default>;

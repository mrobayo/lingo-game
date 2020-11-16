import { createStore, Store, applyMiddleware, compose } from 'redux';
import { rootReducer, RootState } from './index';
import { initialState as lingoState } from './reducers/reducers';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

//const composeEnhancers =
//    process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState: RootState = {
    lingo: lingoState,
};

export const store = createStore(rootReducer, initialState, composeEnhancers());

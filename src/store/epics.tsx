import { StateType } from 'typesafe-actions';
import { ActionsObservable, Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, delay, map, mapTo, switchMap } from 'rxjs/operators';

import { LingoActionTypes } from './reducers/reducers';
import * as actions from './actions/actions';
import { GameStatus, START_NEW_GAME } from './actions/types';
import * as agents from './actions/agents';

of(1, 2, 3, 4, 5)
    .pipe(map((i) => i * 2))
    .subscribe(console.log);

export const epicSecretWord = (action$: ActionsObservable<LingoActionTypes>) =>
    action$.pipe(
        filter((action) => action.type === START_NEW_GAME),
        delay(100),
        switchMap((action) =>
            from(agents.getRandomWord())
                .pipe(map((payload) => payload.toUpperCase()))
                .pipe(map((payload) => actions.setSecret({ secretWord: payload }))),
        ),
    );

/*
export const epicSecretWord = (action$: ActionsObservable<LingoActionTypes>) =>
    action$.pipe(
        filter((action) => action.type === START_NEW_GAME),
        delay(100),
        switchMap(
            (action) => from(agents.getRandomWord()).pipe(map((payload) => actions.setSecret({ secretWord: payload }))),            
        ),
    );
*/

/*export const epicSecretWord = (action$: ActionsObservable<LingoActionTypes>) =>
    action$.pipe(
        filter((action) => action.type === START_NEW_GAME),
        delay(100),
        mapTo(actions.setSecret({ secretWord: 'SAMPLEWORD' })),
    );*/

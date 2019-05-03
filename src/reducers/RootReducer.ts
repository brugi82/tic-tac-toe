import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import gameReducer from './GameReducer';
import GameState from './GameState';

const rootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    game: gameReducer
});

export type AppState = {
    game: GameState
}

export default rootReducer;

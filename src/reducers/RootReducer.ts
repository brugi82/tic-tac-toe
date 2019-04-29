import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import game from './GameReducer';

const rootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    game
});

export default rootReducer;

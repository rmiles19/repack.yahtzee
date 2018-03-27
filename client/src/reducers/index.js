import { combineReducers } from 'redux';
import currentgame from './currentGame';

const rootReducer = combineReducers({
  currentGame, 
})

export default rootReducer;
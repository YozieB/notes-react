import { combineReducers } from 'redux';
import notes from './notes';
import folders from './folders';
import colors from './colors';
const rootReducer = () =>
  combineReducers({
    notes,
    folders,
    colors,
  });

export default rootReducer;

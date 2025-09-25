import { combineReducers } from 'redux';
import authentication from './auth';

export const rootReducer = combineReducers({
    authentication,
});

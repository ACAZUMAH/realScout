import { combineReducers } from 'redux';
import authentication from './auth';
import filters from './filters';

export const rootReducer = combineReducers({
    authentication,
    filters,
});

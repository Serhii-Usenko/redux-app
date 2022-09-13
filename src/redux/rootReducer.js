import { combineReducers } from 'redux';
import { likesReducer } from './likesReducer';
import { inputTextReducer } from "./inputTextReducer";
import { commentsReducer } from './commentsReducer';

export const rootReducer = combineReducers({
    likesReducer,
    inputTextReducer,
    commentsReducer
})
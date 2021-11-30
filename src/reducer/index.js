import { combineReducers } from "redux";
import bookReducer from './bookReducer'
import charReducer from "./charReducer";
import movieReducer from './movieReducer'
import quoteReducer from './quoteReducer'

  export const reducer = combineReducers({
    bookReducer,
    charReducer,
    movieReducer,
    quoteReducer
 })


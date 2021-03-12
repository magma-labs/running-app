import {combineReducers} from 'redux';
import loginReducer from './loginReducer'
import BooksReducer from './BooksReducer'

export default combineReducers({
  loginReducer,
  BooksReducer,
});

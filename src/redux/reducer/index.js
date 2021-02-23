import {combineReducers} from 'redux';
import {
  registerReducer,
  photoReducer,
  forgotReducer,
  signUpReducer,
} from './auth';
import {globalReducer} from './global';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  photoReducer,
  forgotReducer,
  signUpReducer,
});

export default reducer;

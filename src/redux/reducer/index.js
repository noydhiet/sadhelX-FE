import {combineReducers} from 'redux';
import {registerReducer, photoReducer, forgotReducer} from './auth';
import {globalReducer} from './global';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  photoReducer,
  forgotReducer,
});

export default reducer;

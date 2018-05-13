import { combineReducers } from 'redux';
import authReducer from '../features/auth/reducers'

// TODO: Import authReducer
const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;

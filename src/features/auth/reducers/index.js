import initialState from '../initialState';
import { AUTH_BEGIN, AUTH_SUCCESS, AUTH_ERROR } from '../../../redux/actionTypes';

function authReducer(state = initialState, action) {
    switch(action.type) {
      case AUTH_BEGIN:
        return {
            ...state,
            loading: true,
            error: null,
            isAuthenticated: false,
            userInfo: {}
        }
      case AUTH_SUCCESS:
        return {
            ...state,
            loading: false,
            error: null, 
            isAuthenticated: true,
            userInfo: action.userInfo
        }
          
      case AUTH_ERROR:
        return {
            ...state,
            loading: false,
            error: action.error,
            isAuthenticated: false,
            userInfo: {}
        }
      default:
        return state;
    }
  }
  
  export default authReducer;
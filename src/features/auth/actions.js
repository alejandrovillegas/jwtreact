import api from './api';
import { AUTH_BEGIN, AUTH_SUCCESS, AUTH_ERROR } from '../../redux/actionTypes';

const authBegin = () => ({ type: AUTH_BEGIN });
const authSuccess = (userInfo) => ({ type: AUTH_SUCCESS, userInfo });
const authError = (error) => ({ type: AUTH_ERROR, error });

export const auth = (username, password) => (dispatch) => {
	dispatch(authBegin());

	api.login(username, password)
	.then(response => {
		// Call Auth Service (utils)\
		// authService.setToken(token)
		localStorage.setItem('jwtToken', response.data.token);
		dispatch(authSuccess(response.data))
		// Redirect
	})
	.catch(error => dispatch(authError(error)));
}

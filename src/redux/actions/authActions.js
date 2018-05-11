import axios from 'axios';

export function auth(email, password) {
	return function(dispatch) { 
		const response = 
			axios.post('https://customer-diy.appspot.com/api-token-auth/', {
				username: email,
				password: password
			})
			.then(function (response) {
				console.log(response);
				localStorage.setItem('jwtToken', response.data.token)
				return{
					type: 'AUTH_USER_SET',
					payload: response
				}
			})
			.catch(function (error) {
				console.log(error);
				return{
					type: 'ERR_AUTH',
				}
			});
	}
}

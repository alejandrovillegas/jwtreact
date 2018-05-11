import axios from 'axios';

export function auth() {
	return function(dispatch) { 
		const response = 
			axios.post('https://customer-diy.appspot.com/api-token-auth/', {
				username:'alejandro',
				password:'123'
			})
			.then(function (response) {
				console.log(response);
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

import request from '../commons/request';

const api = {
    login(email, password) {
        const auth = {
            password,
            username: email,
        };
        return request('https://customer-diy.appspot.com/api-token-auth/', 'post', auth);
    }
}

export default api;
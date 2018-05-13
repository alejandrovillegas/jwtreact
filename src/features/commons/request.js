import axios from 'axios';

const request = (url, method, data, options) => axios({...options, url, method, data });
// export const authRequest = (url, method, auth) => axios(url, {method, auth});

export default request;
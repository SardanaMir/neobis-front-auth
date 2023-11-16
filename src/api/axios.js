import axios from 'axios';

export default axios.create({
    baseURL: 'https://tradernet.com/api/check-login-password'
})
import axios from 'axios';

const URL = 'http://68.183.64.48:8081/auth/';

const instance = axios.create({
    baseURL: URL,
    headers: {
        "Content-Type" : 'application/json',
    }
});

export const login = async (data) =>{
    const res = await instance.post('authenticate', data)
    return res.data
}

export const register = async (data) =>{
    const res = await instance.post('registration', data)
    return res.data
}
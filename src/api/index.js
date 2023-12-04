import axios from 'axios';

const URL = '';

const instance = axios.create({
    baseURL: URL,
    headers: {
        "Content-Type" : 'application/json',
    }
});

export const login = async (data) =>{
    const res = await instance.post('login', data)
    return res.data
}

export const register = async (data) =>{
    const res = await instance.post('register', data)
    return res.data
}
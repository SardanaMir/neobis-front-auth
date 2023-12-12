import axios from 'axios';

const URL = 'https://week7-a4cbaf21e385.herokuapp.com/api/';

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
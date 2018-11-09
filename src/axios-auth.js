import axios from 'axios';

const instance = axios.create({baseURL: 'LOGIN_KEY'});

export default instance;
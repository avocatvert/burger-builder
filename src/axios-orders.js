import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-5a674.firebaseio.com/'
});


export default instance;
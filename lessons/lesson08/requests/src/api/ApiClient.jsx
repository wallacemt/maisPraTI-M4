import Axios from 'axios';

const ApiClient = Axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 10000
})

export default ApiClient
import Axios from "axios";

const ApiCep = Axios.create({
    baseURL: 'https://viacep.com.br/ws',
    timeout: 10000
});

export default ApiCep;

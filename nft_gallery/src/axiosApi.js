import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://api.opensea.io/api/v1',
});

export default axiosApi;
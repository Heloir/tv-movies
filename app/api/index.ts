import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-auth-sigma.vercel.app',
});
export default api;

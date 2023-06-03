import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-auth-two.vercel.app',
});
export default api;

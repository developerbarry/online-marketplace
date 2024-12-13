import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosCommon = () => {
    return Axios;
};

export default useAxiosCommon;
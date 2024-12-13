import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";

const AxiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});

const useAxiosSecure = () => {

    const { userSignOut } = useContext(AuthContext);
    const navigate = useNavigate();




    useEffect(() => {
        const interceptor = AxiosSecure.interceptors.response.use(
            (res) => {
                return res;
            },
            async (error) => {
                if (error.response?.status === 401 || error.response?.status === 403) {
                    await userSignOut()
                    navigate('/sign-in');

                }

                return Promise.reject(error);
            }
        );

        return () => {
            AxiosSecure.interceptors.response.eject(interceptor)
        }
        
    }, [userSignOut, navigate]);

    return AxiosSecure;
};

export default useAxiosSecure;

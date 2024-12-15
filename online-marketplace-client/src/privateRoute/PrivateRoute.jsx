import { Navigate, useLocation } from "react-router";
import useAuth from "../hookes/useAuth";
import Loder from "./Loder";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Loder />;
    }


    if (user) {
        return children;
    }

    return <Navigate to={'/sign-in'} state={location.pathname} replace={true}></Navigate>
};

export default PrivateRoute;
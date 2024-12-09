import { useContext } from "react"
import AuthContext from "../context/AuthContext"

const useAuth = () => {
    const contextInfo = useContext(AuthContext);
    return contextInfo;
}

export default useAuth;
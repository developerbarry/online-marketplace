import AuthContext from "../context/AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const userSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })

        return () => {
            unSubscribe();
        }
    }, [])

    console.log(user)



    const authInfo = {
        userSignUp,
        userSignIn,
        user
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import AuthContext from "../context/AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useEffect, useState } from "react";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const secure = useAxiosSecure();

    const userSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignIn = (email, password) => {
        // we already used in login page
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userSignOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            setLoading(false)

            if (currentUser) {
                try {
                    const userEmail = { email: currentUser.email };
                    const result = await secure.post('/jwt', userEmail);
                    console.log(result.data);
                } catch (error) {
                    console.error("Error fetching JWT:", error);
                }
            }
        })

        return () => {
            unSubscribe();
        }
    }, [])

    console.log(user)



    const authInfo = {
        userSignUp,
        userSignIn,
        userSignOut,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
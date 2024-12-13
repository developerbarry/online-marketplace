import AuthContext from "../context/AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useEffect, useState } from "react";
import useAxiosCommon from "../useAxiosSecure/useAxiosCommon";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const secure = useAxiosCommon();

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
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };

            setUser(currentUser);
            setLoading(false)

            try {
                if (currentUser) {
                    await secure.post('/jwt', loggedUser);
                } else {
                    await secure.post('/logout', loggedUser);
                }
            }
            catch (error) {
                console.log(error)
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
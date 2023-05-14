import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './../firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvide = new GoogleAuthProvider();

    //! create user by emil
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //! sign in 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //! Google Login 
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvide);
    }

    //! Logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    

    //! user ta dhore rakhbe
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user in auth Provider', currentUser);
            setLoading(false);
            if(currentUser && currentUser.email){
                const loggedUser = {
                    email: currentUser.email
                }
                 //!jwt
                 fetch('http://localhost:3000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log('jwt response', data);
                    //waring: localStorage is not the best place
                    localStorage.setItem('car-access-token', data.token); 
                })
            }
            else{
                //jwt remove token after logout from localStorage
                localStorage.removeItem('car-access-token');
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])
    

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
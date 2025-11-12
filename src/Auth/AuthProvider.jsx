import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebase.init';
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser]  = useState(null)
    const [loading,setLoading] = useState(true)

    //!Creat User 
    const creatUser = (email,password) => {
        return createUserWithEmailAndPassword( auth,email,password)
    }

    //! login user by email password 
    const loginUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    //! Sign in user by google 
    const singInGoogle = () => {
        return signInWithPopup(auth,googleProvider)
    }

    //! Update Profile 
    const updateUserProfile = (displayName,photoURL) => {
        return updateProfile(auth.currentUser,{
            displayName,
            photoURL,
        })
    }

    //! Sign Out User 
    const signOutUser = () => {
        return signOut(auth)
    }

    //! User observe 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    },[])
       
    const authInfo = {
        creatUser,
        singInGoogle,
        updateUserProfile,
        loginUser,
        user,
        signOutUser,
        loading
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
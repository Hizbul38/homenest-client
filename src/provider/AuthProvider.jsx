import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import Swal from 'sweetalert2';

export const AuthContext=createContext();

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);


    console.log(user)


    const createUser =(email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
    };

    const signIn =(email,password) =>{
        Swal.fire({
  title: 'Success!',
  text: 'Login',
  icon: 'success',
  confirmButtonText: 'OK'
});


        return signInWithEmailAndPassword(auth, email,password);
    }

    const LogOut=()=>{
        Swal.fire({
  title: 'Success!',
  text: 'Logout',
  icon: 'success',
  confirmButtonText: 'OK'
});
        return signOut(auth);
    };


    useEffect(()=>{
     const unsubscribe=   onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        };
    },[])


    const authData={
        user,
        setUser,
        createUser,
        LogOut,
        signIn,
    }
    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
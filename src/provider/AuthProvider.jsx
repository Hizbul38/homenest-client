import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Swal from "sweetalert2";

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ Create new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ✅ Email/Password Sign In
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then((result) => {
      Swal.fire({
        title: "Success!",
        text: "Logged in successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
      return result;
    });
  };

  // ✅ Google Sign In
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider).then((result) => {
      Swal.fire({
        title: "Welcome!",
        text: "Logged in with Google!",
        icon: "success",
        confirmButtonText: "OK",
      });
      return result;
    });
  };

  // ✅ Logout
  const LogOut = () => {
    return signOut(auth).then(() => {
      Swal.fire({
        title: "Success!",
        text: "You have logged out!",
        icon: "success",
        confirmButtonText: "OK",
      });
    });
  };

  // ✅ Track Current User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    signIn,
    googleLogin,
    LogOut,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

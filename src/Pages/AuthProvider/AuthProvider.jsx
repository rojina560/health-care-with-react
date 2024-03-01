import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config";

export const AuthContext = createContext(null);
 export const googleProvider = new GoogleAuthProvider()
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const createUser = (email, Password) => {
    return createUserWithEmailAndPassword(auth,email,Password)
  }

  const signin = (email, Password) => {
    return signInWithEmailAndPassword(auth, email, Password);
  };
 
  const googleLogin = () => {
    return signInWithPopup(auth,googleProvider)
  }
  const logOut = () => {
    return signOut(auth)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    });
    return () => {
      unSubscribe()
    }
    },[])
  
  const AuthInfo = {googleLogin,signin,logOut,user,createUser};
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

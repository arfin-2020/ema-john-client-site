import { useState } from "react";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { createContext } from "react";
import { useContext } from "react";
import  "../Firebase/Firebase.config";

const Googleprovider = new GoogleAuthProvider();
const AuthContext = createContext();
export const useAuth = () =>{
    return useContext(AuthContext)
}

const AuthProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState({});
    const auth = getAuth();

    const signInWithGoogle =() =>{
         signInWithPopup(auth,Googleprovider)
        .then((result)=>{
            console.log(result.user);
            setCurrentUser(result.user);
        })
    }
    const value = {
        signInWithGoogle,
        currentUser
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider;
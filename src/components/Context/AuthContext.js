import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import "../Firebase/Firebase.config";

const Googleprovider = new GoogleAuthProvider();
const AuthContext = createContext();
export const useAuth = () =>{
    return useContext(AuthContext)
}

const AuthProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState({});
    const auth = getAuth();
    const history =  useHistory();
    
    useEffect(()=>{
        const auth = getAuth();
            const unsubscribe =onAuthStateChanged(auth, user=>{
                // console.log(user)
                setCurrentUser(user)
            });
            return unsubscribe;
    },[])

    const signInWithGoogle =async() =>{
      return await signInWithPopup(auth,Googleprovider)
        .then((result)=>{
            // console.log(result.user);
            const {displayName, photoURL} = result.user;
            const loggedinUser = {
                name: displayName,
                photo: photoURL
            }
            setCurrentUser(loggedinUser);
            
        })
    }

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            // setCurrentUser('')
            // console.log('logOut successfull');
            history.push('/')
        })
    }
    




    const value = {
        signInWithGoogle,
        currentUser,
        logOut
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider;
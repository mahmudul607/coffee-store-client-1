import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";


const auth = getAuth(app);

export const AuthContext = createContext(null);



const AuthProvider = ({children}) => {


    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
// Create a new user with email and password
    const createUser = ( email, password, name) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, name)
      
 
    }
// update user
const addUserProperty = (name, photoURL) =>{
  
    return updateProfile({
        displayName:name,
        photoURL:photoURL
    })
}
// send email verification email
const sendVerificationEmail = (user) =>{
    setLoading(true);
    return sendEmailVerification(user);
}
// login with email and password
    const loginUser = (email, password) => {
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password)
    }

// login with google account

const loginGoogle = ()=>{
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
    
}

const resetPasswordUsingEmail = (email) =>{
    return sendPasswordResetEmail(auth, email)
}





// logout
    const handleLogout = () => {
       return signOut(auth)
    }

    // user management
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser) ;
        setLoading(false)
    })
    return ()=>{
        unsubscribe();
    }

},[])
// modal button func
    const signInModal = () => { document.getElementById('my_modal_5').showModal() }
  

// context properties
    const authInfo = {
        createUser,
        sendVerificationEmail,
        signInModal,
        loginUser,
        loginGoogle,
        handleLogout,
        user,
        resetPasswordUsingEmail,
        addUserProperty,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    
    children: PropTypes.node,
}

export default AuthProvider;
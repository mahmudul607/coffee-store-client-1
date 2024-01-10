import { createContext } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";


const auth = getAuth(app);

export const AuthContext = createContext(null);



const AuthProvider = ({children}) => {

    const createUser = ( email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
 
    }

    const loginUser = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }

    const handleLogout = () => {
       return signOut(auth)
    }
    const authInfo = {
       
        createUser,
        loginUser,
        handleLogout
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
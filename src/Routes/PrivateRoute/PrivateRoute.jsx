
import PropTypes from 'prop-types';
import { useContext } from 'react';

import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation} from 'react-router-dom';



const PrivateRoute = ({children}) => {
    const {user, loader}=useContext(AuthContext);
    const location = useLocation();
    if(loader){
        <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
        return children;
    }
    



    return <Navigate state={location.pathname} to={'/login'} replace/>
};


PrivateRoute.propTypes = {
    children: PropTypes.object
};

export default PrivateRoute;
// import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const useAuth = () => {
    const auth = useContext(AuthContext);
    // console.log(auth);
    return auth;
}

export default useAuth;
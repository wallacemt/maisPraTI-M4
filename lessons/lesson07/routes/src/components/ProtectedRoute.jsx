import {useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";


function ProtectedRoute({children}) {
    const {isAutenticated} = useContext(AuthContext);

    if(!isAutenticated) {
        return <Navigate to="/login" />
    }
    return children;
}
export default ProtectedRoute;

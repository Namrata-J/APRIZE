import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";

const RequiresAuthComp = ({ children }) => {
    
    const { isUserLoggedIn } = useAuth();
    const location = useLocation();

    return isUserLoggedIn? children : <Navigate to="/LogIn" state={{ from: location }} replace />
}

export { RequiresAuthComp };
import React, { useState, createContext, useContext } from "react";

const authContext = createContext({ isUserLoggedIn: false });

const AuthProvider = ({ children }) => {

    const [ isUserLoggedIn, setIsUserLoggedIn ] = useState(false);

    const handleUserLoggedInState = () => {
        setIsUserLoggedIn(isUserLoggedIn => !isUserLoggedIn)
    }

    return <authContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn, handleUserLoggedInState }}>
        { children }
    </authContext.Provider>
}

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
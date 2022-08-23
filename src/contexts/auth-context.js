import axios from "axios";
import toast from 'react-hot-toast';
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, createContext, useContext } from "react";

const authContext = createContext({ isUserLoggedIn: false });

const AuthProvider = ({ children }) => {

    const [formData, setFormData] = useState({ userEmail: "", userPwd: "" });
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [signUpErrMsg, setSignUpErrMsg] = useState("");
    const [logInErrMsg, setLogInErrMsg] = useState("");
    const navigate = useNavigate();
    const location = useLocation()

    const signUpHandler = async (e) => {
        e.preventDefault();
        if (formData.userEmail !== "" && formData.userPwd !== "") {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.userEmail)) {
                if (formData.userPwd.length >= 6 && /[a-zA-Z]/.test(formData.userPwd) && /[0-9]/.test(formData.userPwd)) {
                    try {
                        const response = await axios.post(`/api/auth/signup`, {
                            email: formData.userEmail,
                            password: formData.userPwd,
                        }
                        );
                        localStorage.setItem("token", response.data.encodedToken)
                        setIsUserLoggedIn(true)
                        navigate("/")
                        toast.success('Successfully loggedIn', {
                            position: "top-center"
                        })
                        setFormData({ ...formData, userEmail: "", userPwd: "" })
                    } catch (error) {
                        toast.error('Server error: cannnot signup', {
                            position: "bottom-center"
                        })
                    }
                } else {
                    setSignUpErrMsg("Pwd should be alphanumeric and have atleast six characters")
                }
            } else {
                setSignUpErrMsg("Your email format isn't correct")
            }
        } else {
            setSignUpErrMsg("Please fill out all the fields")
        }
    };

    const loginHandler = async (e) => {
        e.preventDefault();
        if (formData.userEmail !== "" && formData.userPwd !== "") {
            try {
                const response = await axios.post(`/api/auth/login`, {
                    email: formData.userEmail,
                    password: formData.userPwd,
                });
                localStorage.setItem("token", response.data.encodedToken)
                setIsUserLoggedIn(true)
                navigate("/")
                toast.success('Successfully loggedIn', {
                    position: "top-center"
                })
            } catch (error) {
                setLogInErrMsg("Either email or pwd is incorrect")
                toast.error('Error occurred', {
                    position: "bottom-center"
                })
                setFormData({ ...formData, userEmail: "", userPwd: "" })
            }
        } else {
            setLogInErrMsg("Please fill out all the fields")
        }
    }

    const guestLoginHandler = async () => {
        try {
            const response = await axios.post(`api/auth/login`, {
                email: "aprize@gmail.com",
                password: "aprize@1234",
            }
            );
            if (response) {
                setIsUserLoggedIn(true)
                if (location.state !== null) {
                    navigate(location?.state?.from?.pathname, { replace: true })
                } else
                    navigate("/")
                toast.success('Successfully loggedIn', {
                    position: "top-center"
                })
            }
        } catch (error) {
            toast.error('Server error has occurred', {
                position: "bottom-center"
            })
        }
    }

    return <authContext.Provider
        value={{
            isUserLoggedIn,
            setIsUserLoggedIn,
            signUpHandler,
            formData,
            setFormData,
            signUpErrMsg,
            setSignUpErrMsg,
            loginHandler,
            logInErrMsg,
            setLogInErrMsg,
            guestLoginHandler
        }}>
        {children}
    </authContext.Provider>
}

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
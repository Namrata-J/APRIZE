import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, createContext, useContext } from "react";

const authContext = createContext({ isUserLoggedIn: false });

const AuthProvider = ({ children }) => {

    const [ isUserLoggedIn, setIsUserLoggedIn ] = useState(false);
    const [ formData, setFormData ] = useState({ userEmail: "", userPwd: "" });
    const [ signUpErrMsg, setSignUpErrMsg ] = useState("");
    const [ logInErrMsg, setLogInErrMsg ] = useState("");
    const navigate = useNavigate();
    const location = useLocation()

    const signUpHandler = async (e) => {
        e.preventDefault();
        if(formData.userEmail !== "" && formData.userPwd !== ""){
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.userEmail)){
                if(formData.userPwd.length >=6 && /[a-zA-Z]/.test(formData.userPwd) && /[0-9]/.test(formData.userPwd)){
                    try { 
                        const response = await axios.post(`/api/auth/signup`, {
                            email: formData.userEmail,
                            password: formData.userPwd,
                          }
                        );
                        localStorage.setItem("token", response.data.encodedToken)
                        setIsUserLoggedIn(true)
                        navigate("/")
                        setFormData({...formData, userEmail: "", userPwd: ""})
                    } catch(error){
                        console.log(error);
                    }
                }else{
                    setSignUpErrMsg("Pwd should be alphanumeric and have atleast six characters")
                }
            }else{
                setSignUpErrMsg("Your email format isn't correct")
            }
        }else{
            setSignUpErrMsg("Please fill out all the fields")
        }
    };

    const loginHandler = async (e) => {
        e.preventDefault();
        if(formData.userEmail !== "" && formData.userPwd !== ""){
            try{
                const response = await axios.post(`/api/auth/login`, {
                    email: formData.userEmail,
                    password: formData.userPwd,
                });
                localStorage.setItem("token", response.data.encodedToken)
                setIsUserLoggedIn(true)
                navigate("/")
            } catch(error){
                setLogInErrMsg("Either email or pwd is incorrect")
                console.log(error)
                setFormData({...formData, userEmail: "", userPwd: ""})
            }
        }else{
            setLogInErrMsg("Please fill out all the fields")
        }
    }

    const guestLoginHandler = async () => {
            try {
                const response = await axios.post(`api/auth/login`, {
                    email: "adarshbalika@gmail.com",
                    password: "adarshbalika",
                }
                );
                if(response){
                    setIsUserLoggedIn(true)
                    if (location.state !== null) {
                        navigate(location?.state?.from?.pathname, { replace: true })
                    } else
                        navigate("/")
                }
            } catch(error){
                console.log(error)
            }
    }

    return <authContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn, signUpHandler, formData, setFormData, signUpErrMsg, setSignUpErrMsg, loginHandler, logInErrMsg, setLogInErrMsg, guestLoginHandler }}>
        { children }
    </authContext.Provider>
}

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
import "./logInCard.css";
import { useAuth } from "../../contexts/auth-context";
import { useLocation, useNavigate } from "react-router-dom";

const LogInCard = () => {

    const { handleUserLoggedInState } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLoginClick = () => {
        handleUserLoggedInState();
        if(location.state === null){
            console.log(location)
            navigate("/")
        }else
            navigate(location?.state?.from?.pathname, { replace: true })
    }

    return (
        <div className="ap_logIn-card-section auth-card-section">
            <div className="ap_logIn-card-container auth-card-container">
                <div className="ap_logIn-card auth-card">
                    <h4>LogIn</h4>
                    <div className="ap_logIn-card-inputs auth-card-inputs">

                        <label htmlFor="ap_logIn-card-email" className="fw-2 a-tl">Email Address</label>
                        <input type="text" id="ap_logIn-card-email" className="auth-input-field b-rad1" placeholder="aprize@gmail.com" />

                        <label htmlFor="ap_logIn-card-password" className="fw-2 a-tl">Password</label>
                        <input type="password" id="ap_logIn-card-password" className="auth-input-field b-rad1" placeholder="Password" />

                        <div className="ap_logIn-card-other-options">
                            <div>
                                <label htmlFor="ap_logIn-card-remember" id="ap_logIn-card-remember-label" className="fw-2">
                                    <input type="checkbox" id="ap_logIn-card-remember" className="auth-input-field" value="Remember me" />
                                    Remember me
                                </label>
                            </div>
                            <div className="ap_logIn-card-forgot">
                                <p>Forgot your password?</p>
                            </div>
                        </div>

                        <div className="ap_logIn-action-btns">
                            <button className="et_p-simple-btn action-color btn" onClick={handleLoginClick}>LogIn</button>
                            <p>Create new account:)</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export { LogInCard };
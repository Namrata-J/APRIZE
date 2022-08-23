import "./logInCard.css";
import { useAuth } from "../../contexts/auth-context";
import { useNavigate } from "react-router-dom";

const LogInCard = () => {

    const {
        guestLoginHandler,
        loginHandler,
        formData,
        setFormData,
        logInErrMsg,
        setLogInErrMsg } = useAuth();
    const navigate = useNavigate();

    const handleLoginClick = () => {
        guestLoginHandler();
    }

    return (
        <div className="ap_logIn-card-section auth-card-section">
            <div className="ap_logIn-card-container auth-card-container">
                <div className="ap_logIn-card auth-card">
                    <h4>LogIn</h4>
                    <div className="ap_logIn-card-inputs auth-card-inputs">
                        <form className="ap_auth-card-input-form">
                            <label htmlFor="ap_logIn-card-email" className="fw-2 a-tl">Email Address</label>
                            <input
                                type="email"
                                id="ap_logIn-card-email"
                                className="auth-input-field b-rad1"
                                placeholder="aprize@gmail.com"
                                value={formData.userEmail}
                                onChange={(e) => {
                                    setLogInErrMsg("");
                                    setFormData(
                                        {
                                            ...formData,
                                            userEmail: e.target.value
                                        }
                                    )
                                }}
                                required />

                            <label htmlFor="ap_logIn-card-password" className="fw-2 a-tl">Password</label>
                            <input
                                type="password"
                                id="ap_logIn-card-password"
                                className="auth-input-field b-rad1"
                                placeholder="Password"
                                value={formData.userPwd}
                                onChange={(e) => {
                                    setLogInErrMsg("");
                                    setFormData(
                                        {
                                            ...formData,
                                            userPwd: e.target.value
                                        }
                                    )
                                }}
                                required />

                            <div className="ap_logIn-card-other-options">
                                <div>
                                    <label htmlFor="ap_logIn-card-remember" id="ap_logIn-card-remember-label" className="fw-2">
                                        <input
                                            type="checkbox"
                                            id="ap_logIn-card-remember"
                                            className="auth-input-field"
                                            value="Remember me" />
                                        Remember me
                                    </label>
                                </div>
                                <div className="ap_logIn-card-forgot">
                                    <p>Forgot your password?</p>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="et_p-simple-btn action-color btn"
                                onClick={(e) => loginHandler(e)}>
                                LogIn
                            </button>
                        </form>

                        <div className="ap_logIn-action-btns auth-card-action-btns">
                            <button
                                className="et_p-simple-btn action-color btn"
                                onClick={handleLoginClick}>
                                Guest LogIn
                            </button>
                            <p onClick={() => navigate("/SignUp")}>Create new account:)</p>
                        </div>
                    </div>
                </div>
                <p className="ap_signUp-errMsg auth-errMsg">{logInErrMsg}</p>
            </div>
        </div>
    );
}

export { LogInCard };
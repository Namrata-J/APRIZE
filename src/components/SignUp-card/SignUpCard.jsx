import "./signUpCard.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/index";

const SignUpCard = () => {

    const navigate = useNavigate();
    const { signUpHandler, formData, setFormData, signUpErrMsg, setSignUpErrMsg } = useAuth();

    return (
        <div className="ap_signup-card-section auth-card-section">
            <div className="ap_signup-card-container auth-card-container">
                <div className="ap_signup-card auth-card">
                    <h4>SignUp</h4>
                    <div className="ap_signup-card-inputs auth-card-inputs">

                        <form className="ap_auth-card-input-form">
                            <label htmlFor="ap_logIn-card-email" className="fw-2 a-tl">Email Address</label>
                            <input type="email" id="ap_logIn-card-email" className="auth-input-field b-rad1" placeholder="aprize@gmail.com" value={formData.userEmail} onChange={(e) => {setSignUpErrMsg(""); setFormData({...formData, userEmail: e.target.value})}} required />

                            <label htmlFor="ap_logIn-card-password" className="fw-2 a-tl">Password</label>
                            <input type="password" id="ap_logIn-card-password" className="auth-input-field b-rad1" placeholder="Password" value={formData.userPwd} onChange={(e) => {setSignUpErrMsg(""); setFormData({...formData, userPwd: e.target.value})}} required />

                            <div className="ap_signup-card-other-options">
                                <label htmlFor="ap_accept-policies-label" className="fw-2">
                                    <input type="checkbox" id="ap_accept-policies-label" />
                                    I accept all terms & conditions
                                </label>
                            </div>

                            <div className="ap_signup-action-btns">
                                <button type="submit" className="et_p-simple-btn action-color btn" onClick={(e) => signUpHandler(e)}>SignUp</button>
                            </div>
                        </form>

                        <div className="ap_logIn-action-btns auth-card-action-btns">
                            <p onClick={() => navigate("/LogIn")}>Already have an account:)</p>
                        </div>
                    </div>
                </div>
                <p className="ap_signUp-errMsg auth-errMsg">{ signUpErrMsg }</p>
            </div>
        </div>
    );
}

export { SignUpCard };
import "./signUpCard.css";

const SignUpCard = () => {
    return (
        <div className="ap_signup-card-section auth-card-section">
            <div className="ap_signup-card-container auth-card-container">
                <div className="ap_signup-card auth-card">
                    <h4>SignUp</h4>
                    <div className="ap_signup-card-inputs auth-card-inputs">

                        <label htmlFor="ap_logIn-card-email" className="fw-2 a-tl">Email Address</label>
                        <input type="text" id="ap_logIn-card-email" className="auth-input-field b-rad1" placeholder="aprize@gmail.com" />

                        <label htmlFor="ap_logIn-card-password" className="fw-2 a-tl">Password</label>
                        <input type="password" id="ap_logIn-card-password" className="auth-input-field b-rad1" placeholder="Password" />

                        <div className="ap_signup-card-other-options">
                            <label htmlFor="ap_accept-policies-label" className="fw-2">
                                <input type="checkbox" id="ap_accept-policies-label" />
                                I accept all terms & conditions
                            </label>
                        </div>

                        <div className="ap_signup-action-btns">
                            <button className="et_p-simple-btn action-color btn">SignUp</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export { SignUpCard };
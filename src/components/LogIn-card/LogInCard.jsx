import "./logInCard.css";

const LogInCard = () => {
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
                            <button class="et_p-simple-btn action-color btn">LogIn</button>
                            <p>Create new account:)</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export { LogInCard };
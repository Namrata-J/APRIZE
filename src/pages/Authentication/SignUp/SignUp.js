import "./signUp.css";
import React from "react";
import { Header, SignUpCard, Footer } from "../../../components/index";

const SignUpPage = () => {
    return (
        <div className="ap_signup-page">
            <div className="ap_signup-page-header-section">
                <Header />
            </div>
            <div className="ap_signup-page-main-section">
                <SignUpCard />
                <Footer />
            </div>
        </div>
    );
}

export { SignUpPage };
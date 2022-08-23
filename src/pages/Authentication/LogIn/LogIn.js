import "./logIn.css";
import React from "react";
import { Header, LogInCard, Footer } from "../../../components/index";

const LogInPage = () => {
    return (
        <div className="ap_login-page">
           <div className="ap_loginPage-header-section">
               <Header />
           </div>
           <div className="ap_loginPage-main-section">
               <LogInCard />
               <Footer />
           </div>
        </div>
    );
}

export { LogInPage };
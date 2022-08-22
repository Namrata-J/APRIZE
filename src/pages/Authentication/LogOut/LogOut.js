import "./logOut.css";
import React from "react";
import { Header, LogOutCard, Footer } from "../../../components/index";

const LogOutPage = () => {
    return (
        <div className="ap_logout-page">
            <div className="ap_logout-page-header-section">
                <Header />
            </div>
            <div className="ap_logout-page-main-section">
                <LogOutCard />
                <Footer />
            </div>
        </div>
    );
}

export { LogOutPage };
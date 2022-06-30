import React from "react";
import { Link } from "react-router-dom";

const AprizeLogo = () => {
    return (
        <div className="ap_header-logo">
            <Link to="/" className="ap_logo-container" >
                <div className="ap_logo" >
                    <div className="ap_logo-subcontainer1">
                        <h4 className="ap_logo-title a-tl">APRIZE</h4>
                    </div>
                    <div className="ap_logo-subcontainer2">
                        <p className="a-tl">GET YOUR CHOICES</p>
                        <p className="a-tl">AT A1 PRICE</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export { AprizeLogo };
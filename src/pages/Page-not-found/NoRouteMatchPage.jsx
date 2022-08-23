import React from "react";
import "./noRouteMatchPage.css";
import errorImg from "../../assets/errorImg.png";

const NoRouteMatchPageComp = () => {
    return (
        <div className="ap_noRouteMatchPage">
            <div className="ap_noRouteMatchPage-inner-container">
                <img src={errorImg} />
                <p>
                    Oops! Seems like the page you are searching for doesn't exists.
                </p>
            </div>
        </div>
    );
}

export { NoRouteMatchPageComp };
import { Link } from "react-router-dom";
import "./shopNowImgSection.css";

const ShopNowImgSection = () => {
    return (
        <div className="ap_home-page-shopNowImg">
            <video src="https://tinyurl.com/yebhhx95" autoPlay loop muted />
            <div className="ap_showNowImg-overlay-container">
               <button className="et_p-simple-btn action-color btn"><Link to="/Productlisting" onClick={() => dispatchOfProductsBeingShown({ type: "clear" })}>Shop Now</Link></button>
               <p>Get your choices at APRIZE</p>
            </div>
        </div>
    );
}


export { ShopNowImgSection };
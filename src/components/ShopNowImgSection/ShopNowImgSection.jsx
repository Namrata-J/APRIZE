import { Link } from "react-router-dom";
import shopNowHorizontalImg from "../../assets/Images/Home-page-horizontal-image.jpg";
import "./shopNowImgSection.css";

const ShopNowImgSection = () => {
    return (
        <div className="ap_home-page-shopNowImg">
            <img src= { shopNowHorizontalImg } />
            <button className="et_p-simple-btn action-color btn b-rad1"><Link to="/Productlisting" onClick= {() => dispatchOfProductsBeingShown({ type: "clear" })}>Shop Now</Link></button>
            <p>Get your choices at APRIZE</p>
        </div>
    );
}

export { ShopNowImgSection };
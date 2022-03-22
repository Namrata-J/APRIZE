import shopNowHorizontalImg from "../../assets/Images/Home-page-horizontal-image.jpg";
import "./shopNowImgSection.css";

const ShopNowImgSection = () => {
    return (
        <div className="ap_home-page-shopNowImg">
            <img src= { shopNowHorizontalImg } />
            <button className="et_p-simple-btn action-color btn b-rad1">Shop Now</button>
            <p>Get your choices at APRIZE</p>
        </div>
    );
}

export { ShopNowImgSection };
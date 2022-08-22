import { CLEAR } from "../../constants/filterStateConstants";
import { useNavigate } from "react-router-dom";
import { useFilterData } from "../../contexts";
import "./shopNowImgSection.css";

const ShopNowImgSection = () => {

    const navigate = useNavigate();
    const { dispatchOfProductsBeingShown } = useFilterData();
    
    return (
        <div className="ap_home-page-shopNowImg">
            <video src="https://tinyurl.com/yebhhx95" autoPlay loop muted />
            <div className="ap_showNowImg-overlay-container">
               <button className="et_p-simple-btn action-color btn" 
               onClick={
                   () => {        
                       dispatchOfProductsBeingShown({ type: CLEAR })
                       navigate("/Productlisting")
                       }}>
                           Shop Now
                </button>
               <p>Get your choices at APRIZE</p>
            </div>
        </div>
    );
}


export { ShopNowImgSection };
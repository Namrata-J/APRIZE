import { discountedProductsArr } from "../../utils/utilityArrays";
import "./discountedProducts.css";
import { Link } from "react-router-dom";
import { MdOutlineDoubleArrow } from "../../utils/icons";

const DiscountedProducts = () => {
    return (
        <div className="ap_homePage-discountedProducts-categories">
            <div className="ap_discountedProducts-scrollable-section">
                <div className="ap_products-scrollable-section-description scrollable-section-description">
                    <p>Latest grab offers only for you!</p>
                    <MdOutlineDoubleArrow className="ap_products-scrollable-section-icon" />
                </div>
                {
                    discountedProductsArr.map((discountedProducts, index) => (
                            <Link to="/Productlisting" key={index} state={discountedProducts}>
                                <img src={discountedProducts.img} alt="discounted Product" className="ap_discountedProduct-img" />
                            </Link>
                        )
                    )
                }
            </div>
        </div>
    );
}

export { DiscountedProducts };
import { discountedProductsArr } from "../../utils/filteredCategoriesArr";
import "./discountedProducts.css";
import { Link } from "react-router-dom";

const DiscountedProducts = () => {
    return (
        <div className="ap_homePage-discountedProducts-categories">
            <div className="ap_discountedProducts-scrollable-section">
                 {
                     discountedProductsArr.map((discountedProducts, index) => {
                         return (
                             <Link to="/Productlisting" key= { index } state= { discountedProducts }>
                                 <img src= { discountedProducts.img } alt= "discounted Product" className="ap_discountedProduct-img" />
                             </Link>
                         )
                     })
                 }
            </div>
        </div>
    );
}

export { DiscountedProducts };
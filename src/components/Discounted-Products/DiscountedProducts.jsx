import { discountedProductsArr } from "../../utils/filteredCategoriesArr";
import "./discountedProducts.css";

const DiscountedProducts = () => {
    return (
        <div className="ap_homePage-discountedProducts-categories">
            <div className="ap_discountedProducts-scrollable-section">
                 {
                     discountedProductsArr.map((discountedProducts, index) => {
                         return (
                             <div key= { index }>
                                 <img src= { discountedProducts.img } alt= "discounted Product" className="ap_discountedProduct-img" />
                             </div>
                         )
                     })
                 }
            </div>
        </div>
    );
}

export { DiscountedProducts };
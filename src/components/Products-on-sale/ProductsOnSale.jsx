import "./productsOnSale.css";
import { Link } from "react-router-dom";
import { MdOutlineDoubleArrow } from "../../utils/icons";
import { productsOnSaleArr } from "../../utils/utilityArrays";

const ProductsOnSale = () => {
    return (
        <div className="ap_homePage-productsOnSale-category">
            <div className="ap_productsOnSale-section">
                <div className="ap_products-scrollable-section-description scrollable-section-description">
                    <p>The most awaiting sale is here!</p>
                    <MdOutlineDoubleArrow className="ap_products-scrollable-section-icon" />
                </div>
                {
                    productsOnSaleArr.map((productOnSale, index) => {
                        return (
                            <Link to='/Productlisting' key={index} state={productOnSale}>
                                <img src={productOnSale.img} alt="product On Sale" className="ap_productOnSale-img" />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
}

export { ProductsOnSale };
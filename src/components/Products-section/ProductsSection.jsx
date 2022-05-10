import "./productsSection.css";
import { ProductCardListing, PopUpFiltersContainer } from "../";
import { useFilterData } from "../../contexts";

const ProductsSection = () => {

    const { filteredProductList } = useFilterData();

    return (
        <div className="ap_main-products-section">
            <PopUpFiltersContainer />
            <div className="ap_productListing-page-products-section">
                <div className="ap_product-listing">
                    <h4 className="ap_showProducts-count-heading">
                        Showing Products
                        <span className="ap_all-product-listing fw-1">(Showing {filteredProductList.length} products)</span>
                    </h4>
                    <ProductCardListing />
                </div>
            </div>
        </div>
    );
}

export { ProductsSection };
import "./product.css";
import { ProductCard } from "../Product-card/ProductCard";
import { useFilterData } from "../../contexts/filterData-context"; 
import { FloatingBtn } from "../Floating-Btn/FloatingBtn";

const Product = () => {

    const { filteredProductList } = useFilterData();

    return (
        <div className="ap_productListing-page-products-section">
            <div className="ap_product-listing">
                <h4 className="ap_showProducts-count-heading">
                    <FloatingBtn />
                    Showing Products
                    <span className="ap_all-product-listing fw-1">(Showing { filteredProductList.length } products)</span>
                </h4>
                <ProductCard />
            </div>
        </div>
    );
}

export { Product };
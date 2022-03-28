import "./product.css";
import { ProductCard } from "../Product-card/ProductCard";
import { useProductsDetail } from "../../contexts/productsDetail-context";
import { FloatingBtn } from "../Floating-Btn/FloatingBtn";

const Product = () => {

    const { productsDataFetchedFromApi } = useProductsDetail();

    return (
        <div className="ap_productListing-page-products-section">
            <div className="ap_product-listing">
                <h4 className="ap_showProducts-count-heading">
                    <FloatingBtn />
                    Showing Products
                    <span className="ap_all-product-listing fw-1">(Showing {productsDataFetchedFromApi.length} products)</span>
                </h4>
                <ProductCard />
            </div>
        </div>
    );
}

export { Product };
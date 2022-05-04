import React from "react";
import "./product-listing.css";
import { Header, SideBar, ProductsSection } from "../../components/index";

const ProductListingPage = () => {
    return (
        <div className="ap_productListing-page">
            <div className="ap_productListing-header-section">
                <Header />
            </div>
            <div className="ap_productListing-main-section">
                <SideBar />
                <ProductsSection />
            </div>
        </div>
    );
}

export { ProductListingPage };
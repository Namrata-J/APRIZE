import React from "react";
import "./product-listing.css";
import { Header, SideBar, Product } from "../../components/index";

const ProductListingPage = () => {
    return (
        <div className="ap_productListing-page">
            <div className="ap_productListing-header-section">
                <Header />
            </div>
            <div className="ap_productListing-main-section">
                <SideBar />
                <Product />
            </div>
        </div>
    );
}

export { ProductListingPage };
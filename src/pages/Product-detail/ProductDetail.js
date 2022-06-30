import React from "react";
import "./productDetail.css";
import { Header, SingleProductDetails, Footer } from "../../components/index";

const ProductDetailPage = () => {
    return (
        <div className="ap_productdetails-page">
            <div className="ap_productDetail-header-section">
                <Header />
            </div>
            <div className="ap_productdetail-main-section">
                <SingleProductDetails />
                <Footer />
            </div>
        </div>
    )
}

export { ProductDetailPage };
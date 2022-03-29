import React from "react";
import "./cart.css";
import { Header, ProductsInCart, Footer } from "../../components";

const CartPage = () => {
    return (
        <div className="ap_cart-page">
            <div className="ap_cart-header-section">
                <Header />
            </div>
            <div className="ap_cart-main-section">
                <ProductsInCart />
                <Footer />
            </div>
        </div>
    );
}

export { CartPage };
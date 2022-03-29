import React from "react";
import "./wishlist.css";
import { Header, WishlistProduct, Footer } from "../../components/index";

const WishlistPage = () => {
    return (
        <div className="ap_wishlist-page">
            <div className="ap_wishlist-header-section">
                 <Header />
            </div>
            <div className="ap_wishlist-main-section">
                 <WishlistProduct />
                 <Footer />
            </div>
        </div>
    );
}

export { WishlistPage };
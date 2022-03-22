import React from "react";
import "./home.css"
import { Header, CategoryType, ShopNowImgSection, NewArrivalsSection, DiscountedProducts, ProductsOnSale, Footer } from "../../components/index";

const HomePage = () => {

    return (
        <div className="ap_home-page">
            <div className="ap_header-section">
               <Header />
            </div>
            <div className="ap_home-page-content">
               <CategoryType />
               <ShopNowImgSection />
               <NewArrivalsSection />
               <DiscountedProducts />
               <ProductsOnSale />
            </div>
            <div className="ap_footer-section">
               <Footer />
            </div>
        </div>
    );
}

export { HomePage };
import React from "react";
import "./home.css"
import { Header, CategoryType, MainVedio, FirstVedioCarousel, ShopNowImgSection, NewArrivalsSection, DiscountedProducts, ProductsOnSale, GridTemplate, Footer } from "../../components/index";

const HomePage = () => {

    return (
        <div className="ap_home-page">
            <div className="ap_header-section">
               <Header />
            </div>
            <div className="ap_home-page-content">
               <CategoryType />
               <MainVedio />
               <NewArrivalsSection />
               <FirstVedioCarousel />
               <DiscountedProducts />
               <ShopNowImgSection />
               <ProductsOnSale />
               <GridTemplate />
            </div>
            <div className="ap_footer-section">
               <Footer />
            </div>
        </div>
    );
}

export { HomePage };
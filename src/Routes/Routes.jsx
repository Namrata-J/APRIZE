import React from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage, ProductListingPage, NoRouteMatchPageComp, ProductDetailPage, WishlistPage, CartPage, LogInPage, LogOutPage, SignUpPage } from "../pages";
import { RequiresAuthComp } from "../components/index";

const RoutesComponent = () => {

    return (
        <Routes>
            <Route path ="/" element= {<HomePage />} />
            <Route path ="/Productlisting" element= {<ProductListingPage />} />
            <Route path ="/ProductDetails/:productId" element={<RequiresAuthComp><ProductDetailPage /></RequiresAuthComp>} />
            <Route path ="/Wishlist" element= {<RequiresAuthComp><WishlistPage /></RequiresAuthComp>} />
            <Route path ="/Cart" element= {<RequiresAuthComp><CartPage /></RequiresAuthComp>} />
            <Route path ="/LogIn" element= {<LogInPage />} />
            <Route path ="/LogOut" element= {<LogOutPage />} />
            <Route path ="/SignUp" element= {<SignUpPage />} />
            <Route path ="*" element= {<NoRouteMatchPageComp />} />
        </Routes>
    );
}

export { RoutesComponent };
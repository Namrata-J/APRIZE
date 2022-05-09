import React from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage, ProductListingPage, ProductDetailPage, WishlistPage, CartPage, LogInPage, LogOutPage, SignUpPage } from "../../pages/index";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path ="/" element= {<HomePage />} />
            <Route path ="/Productlisting" element= {<ProductListingPage />} />
            <Route path ="/ProductDetails" element={<ProductDetailPage />} />
            <Route path ="/Wishlist" element= {<WishlistPage />} />
            <Route path ="/Cart" element= {<CartPage />} />
            <Route path ="/LogIn" element= {<LogInPage />} />
            <Route path ="/LogOut" element= {<LogOutPage />} />
            <Route path ="/SignUp" element= {<SignUpPage />} />
        </Routes>
    );
}

export { RoutesComponent };
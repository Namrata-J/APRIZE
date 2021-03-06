import React from "react";
import { ProductsDetailProvider } from "../../contexts/productsDetail-context";
import { FilterDataProvider } from "../../contexts/filterData-context";
import { WishlistProvider } from "../../contexts/wishlist-context";
import { CartProvider } from "../../contexts/cart-context";
import { HeaderIconsProvider } from "../../contexts/headerIcons-context";
import { ProductsGridClassProvider } from "../../contexts/productsGridClass-context";
import { AuthProvider } from "../../contexts/auth-context";

const CombinedProvider = ({ children }) => {
    return (
        <AuthProvider>
            <ProductsDetailProvider>
                <FilterDataProvider>
                    <WishlistProvider>
                        <HeaderIconsProvider>
                            <CartProvider>
                                <ProductsGridClassProvider>
                                    {children}
                                </ProductsGridClassProvider>
                            </CartProvider>
                        </HeaderIconsProvider>
                    </WishlistProvider>
                </FilterDataProvider>
            </ProductsDetailProvider>
        </AuthProvider>
    )
}

export { CombinedProvider };
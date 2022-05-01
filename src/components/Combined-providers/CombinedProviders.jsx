import React from "react";
import { ProductsDetailProvider } from "../../contexts/productsDetail-context";
import { FilterDataProvider } from "../../contexts/filterData-context";
import { WishlistProvider } from "../../contexts/wishlist-context";
import { CartProvider } from "../../contexts/cart-context";
import { HeaderIconsProvider } from "../../contexts/headerIcons-context";

const CombinedProvider = ({ children }) => {
    return (
        <ProductsDetailProvider>
            <FilterDataProvider>
                <WishlistProvider>
                    <HeaderIconsProvider>
                        <CartProvider>
                            { children }
                        </CartProvider>
                    </HeaderIconsProvider>
                </WishlistProvider>
            </FilterDataProvider>
        </ProductsDetailProvider>
    )
}

export { CombinedProvider };
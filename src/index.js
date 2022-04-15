import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductsDetailProvider } from "./contexts/productsDetail-context";
import { FilterDataProvider } from "./contexts/filterData-context";
import { WishlistProvider } from "./contexts/wishlist-context";
import { CartProvider } from "./contexts/cart-context";
import { HeaderIconsProvider } from "./contexts/headerIcons-context";

// Call make Server
makeServer();
ReactDOM.render(
  <StrictMode>
    <ProductsDetailProvider>
      <FilterDataProvider>
        <WishlistProvider>
          <HeaderIconsProvider>
            <CartProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </CartProvider>
          </HeaderIconsProvider>
        </WishlistProvider>
      </FilterDataProvider>
    </ProductsDetailProvider>
  </StrictMode>,
  document.getElementById("root")
);

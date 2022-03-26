import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { SearchBarProvider } from "./contexts/searchBar-context";
import { ProductsDetailProvider } from "./contexts/productsDetail-context";

// Call make Server
makeServer();
ReactDOM.render(
  <StrictMode>
    <ProductsDetailProvider>
      <SearchBarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SearchBarProvider>
    </ProductsDetailProvider>
  </StrictMode>,
  document.getElementById("root")
);

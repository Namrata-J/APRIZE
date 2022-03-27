import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { SearchBarProvider } from "./contexts/searchBar-context";
import { ProductsDetailProvider } from "./contexts/productsDetail-context";
import { FilterDataProvider } from "./contexts/filterData-context";

// Call make Server
makeServer();
ReactDOM.render(
  <StrictMode>
    <ProductsDetailProvider>
      <FilterDataProvider>
        <SearchBarProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SearchBarProvider>
      </FilterDataProvider>
    </ProductsDetailProvider>
  </StrictMode>,
  document.getElementById("root")
);

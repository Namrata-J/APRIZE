import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { SearchBarProvider } from "./contexts/searchBar-context";

// Call make Server
makeServer();
ReactDOM.render(
  <StrictMode>
    <SearchBarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SearchBarProvider>
  </StrictMode>,
  document.getElementById("root")
);

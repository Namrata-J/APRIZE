import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { CombinedProvider } from "./components/index";

// Call make Server
makeServer();
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <CombinedProvider>
        <App />
      </CombinedProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);

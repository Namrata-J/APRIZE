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
    <CombinedProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CombinedProvider>
  </StrictMode>,
  document.getElementById("root")
);

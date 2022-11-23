import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./components/contexts/UserContext";
import { CategoriesProvider } from "./components/contexts/CategoriesContext";
import { CartDropdownProvider } from "./components/contexts/CartDropdownContext";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store/store";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
        <CategoriesProvider>
          <CartDropdownProvider>
            <App />
          </CartDropdownProvider>
        </CategoriesProvider>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

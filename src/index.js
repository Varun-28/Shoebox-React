import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { ProductProvider } from "./utilities/product-context";
import { WishlistProvider } from "./utilities/wishlist-context";
import { CartProvider } from "./utilities/cart-context";
import { AuthProvider } from "./utilities/auth-context";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { options } from "./utilities/alertOptions";

// Call make Server
makeServer();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <WishlistProvider>
          <CartProvider>
            <AuthProvider>
              <AlertProvider template={AlertTemplate} {...options}>
                <App />
              </AlertProvider>
            </AuthProvider>
          </CartProvider>
        </WishlistProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);

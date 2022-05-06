import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Product, Login, Signup, Cart, Wishlist } from "./pages/pages";
import {
  Navbar,
  Footer,
  RequiresAuth,
  PrivateAuth,
} from "./components/Components.jsx";
import Mockman from "mockman-js";
import { NotFound } from "./components/NotFound";
import { ProductDetail } from "./pages/productDetail/ProductDetail";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <div className="header">
        <Navbar />
      </div>
      <div className="main grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route
            path="/login"
            element={
              <PrivateAuth>
                <Login />
              </PrivateAuth>
            }
          />
          <Route
            path="/signup"
            element={
              <PrivateAuth>
                <Signup />
              </PrivateAuth>
            }
          />
          <Route
            path="/cart"
            element={
              <RequiresAuth>
                <Cart />
              </RequiresAuth>
            }
          />
          <Route
            path="/wishlist"
            element={
              <RequiresAuth>
                <Wishlist />
              </RequiresAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/mock" element={<Mockman />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

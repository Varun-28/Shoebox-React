import React from "react";
import Logo from "../assets/logo_svg.svg";
import { Link } from "react-router-dom";
import "../stylesheets/navbar.css";
import { useWishlist } from "../utilities/wishlist-context";
import { useCart } from "../utilities/cart-context";
import { useAuthFunctions } from "../utilities/useAuthFunctions.js";

export function Navbar() {
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();
  const token = localStorage.getItem("userToken");
  const { logout } = useAuthFunctions();

  return (
    <header className="shoebox-navbar">
      <nav>
        <div className="shoebox-logo">
          <Link to="/">
            <img src={Logo} alt="shoebox-logo" />
          </Link>
        </div>
        <div className="search-bar">
          <div className="input-group">
            <input
              className="simple-input"
              id="name-input"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <ul className="nav-links">
          <li className="nav-items">
            {!token ? (
              <Link to="/login" className="mx-4">
                <button
                  className="btn btn-outline"
                >
                  Login
                </button>
              </Link>
            ) : (
              <button
                onClick={logout}
                className="btn btn-outline"
              >
                Logout
              </button>
            )}
          </li>
          <li className="nav-items">
            <Link to="/wishlist">
              <div className="badge-container">
                <i className="shopping-cart fa-regular fa-heart">
                  <span className="badge badge-ico">
                    {wishlistState.quantity}
                  </span>
                </i>
              </div>
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/cart">
              <div className="badge-container">
                <i className="shopping-cart fa-solid fa-cart-shopping">
                  <span className="badge badge-ico">{cartState.quantity}</span>
                </i>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

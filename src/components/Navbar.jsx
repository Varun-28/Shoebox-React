import React from 'react';
import Logo from "../assets/logo_svg.svg";
import {Link} from "react-router-dom";
import "../stylesheets/navbar.css";
import { useWishlist } from '../utilities/wishlist-context';

export function Navbar() {
    const {wishlistState} = useWishlist();
  return (
    <header className="shoebox-navbar">
        <nav>
            <div className="shoebox-logo">
                <Link to="/"><img src={Logo} alt="shoebox-logo" /></Link>
            </div>
            <div className="search-bar">
                <div className="input-group">
                    <input className="simple-input" id="name-input" type="text" placeholder="Search" />
                </div>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/login"><button className="btn btn-outline">Sign-in</button></Link>
                </li>
                <li>
                    <Link to="/wishlist">
                        <div className="badge-container">
                            <i className="shopping-cart fa-regular fa-heart">
                                <span className="badge badge-ico">{wishlistState.quantity}</span>
                            </i>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <div className="badge-container">
                            <i className="shopping-cart fa-solid fa-cart-shopping">
                                <span className="badge badge-ico">0</span>
                            </i>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

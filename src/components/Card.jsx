import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../utilities/cart-context";
import { useWishlist } from "../utilities/wishlist-context";

function Card({ _id, brand, title, price, rating, prodImage, inStock }) {
  const { wishlistDispatch } = useWishlist();
  function wishlistHandler() {
    wishlistDispatch({
      type: "ADD-TO-WISHLIST",
      payload: { brand, _id, price, title, rating, prodImage },
    });
  }

  const { cartDispatch } = useCart();
  function cartHandler() {
    cartDispatch({
      type: "ADD-TO-CART",
      payload: { brand, _id, price, title, rating, prodImage, prodQty: 1 },
    });
  }

  return (
    <div className="card card-vertical badged-card">
      <div className="card-head">
        <div className="card-img">
          <Link to={`/product/${_id}`}><img src={prodImage} alt="card" /></Link>
        </div>
        <div className="card-texts">
          <h4 className="card-title">
            {brand}
            <span></span>
          </h4>
          <p className="card-subTitle">{title}</p>
          <p className="card-text">
            <span className="price-now">Rs. {price}</span>
          </p>
        </div>
      </div>
      <div className="card-buttons">
        <button className="card-btn-primary" onClick={cartHandler}>
          Add To Cart
        </button>
        <button className="card-btn-icon" onClick={wishlistHandler}>
          <i className="far fa-heart"></i>
        </button>
      </div>
      {!inStock && <div className="card-overlay">OUT OF STOCK</div>}
      <div className="card-rating">
        {rating} <i className="fas fa-star"></i>
      </div>
    </div>
  );
}

export { Card };

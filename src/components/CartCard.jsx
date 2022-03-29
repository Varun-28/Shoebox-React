import React from "react";
import "../pages/cart/cart.css";
import { useCart } from "../utilities/cart-context";
import { useWishlist } from "../utilities/wishlist-context";

function CartCard() {
  const {cartState, cartDispatch} = useCart();
  const {wishlistDispatch} = useWishlist();

  function wishlistHandler(item) {
    wishlistDispatch({
      type: "ADD-TO-WISHLIST",
      payload: {
        item: item.brand,
        _id: item._id,
        price: item.price,
        title: item.title,
        rating: item.rating,
        prodImage: item.prodImage,
      },
    });
    cartDispatch({ type: "REMOVE-FROM-CART", payload: item._id });
  }

  return (
    <div className="cart-cards flex flex-col items-center justify-start gap-y-4">
      {cartState.items.map((item) => (
        <div key={item._id} className="cart-card flex items-center p-4 gap-x-4">
          <img className="w-48" src={item.prodImage} alt="cart-card" />
          <div>
            <h4 className="card-title">{item.brand}</h4>
            <p className="text-base">{item.title}</p>
            <p className="text-md my-2">Rs. {item.price}</p>
            <div className="product-quantity flex justify-center items-center gap-x-4 my-4">
              <button
                onClick={() =>
                  cartDispatch({ type: "DECREASE-COUNT", payload: item._id })
                }
              >
                -
              </button>
              <p>{item.prodQty}</p>
              <button
                onClick={() =>
                  cartDispatch({ type: "INCREASE-COUNT", payload: item._id })
                }
              >
                +
              </button>
            </div>
            <div className="card-buttons flex items-center justify-between gap-x-4">
              <button
                className="btn btn-danger"
                onClick={() =>
                  cartDispatch({ type: "REMOVE-FROM-CART", payload: item._id })
                }
              >
                Remove
              </button>
              <button className="card-btn-icon" onClick={() => wishlistHandler(item)}>
                <i className="far fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { CartCard };

import React from "react";
import "../pages/cart/cart.css";
import { useCart } from "../context/cartContext/cart-context";
import { useCartServerCalls } from "../context/cartContext/useCartServerCalls";
import { useWishlistServerCalls } from "../context/wishlistContext/useWishlistServerCalls";

function CartCard() {
  const { cartState } = useCart();
  const { deleteFromCart, increaseQuantity, decreaseQuantity } =
    useCartServerCalls();
  const { addToWishlist } = useWishlistServerCalls();

  function wishlistHandler(item) {
    addToWishlist({ ...item });
    deleteFromCart(item._id);
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
                className="btn-quantity"
                onClick={() => decreaseQuantity(item._id)}
                disabled={item.qty === 1}
              >
                -
              </button>
              <p className="text-quantity">{item.qty}</p>
              <button
                className="btn-quantity"
                onClick={() => increaseQuantity(item._id)}
              >
                +
              </button>
            </div>
            <div className="card-buttons flex items-center justify-between gap-x-4">
              <button
                className="btn btn-danger"
                onClick={() => deleteFromCart(item._id)}
              >
                Remove
              </button>
              <button
                className="card-btn-icon"
                onClick={() => wishlistHandler(item)}
              >
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

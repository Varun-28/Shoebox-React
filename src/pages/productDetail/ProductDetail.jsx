import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../utilities/cart-context";
import { useProduct } from "../../utilities/product-context";
import { useWishlist } from "../../utilities/wishlist-context";
import "./productDetail.css";

function ProductDetail() {
  const { productId } = useParams();
  const { filteredProducts } = useProduct();
  const { wishlistDispatch } = useWishlist();
  const { cartDispatch } = useCart();

  const getProduct = () => {
    return filteredProducts.find((prod) => prod._id === productId);
  };
  const {
    _id,
    brand,
    title,
    price,
    rating,
    prodImage
  } = getProduct();

  return (
    <div className="product-details flex flex-col justify-center items-center my-8">
      <img className="w-96" src={prodImage} alt="product" />
      <div className="product-details-content p-4">
        <h3>{brand}</h3>
        <h5 className="gray-text">{title}</h5>
        <p>⭐{rating}</p>
        <p>Rs. {price}</p>
        <button
          className="btn btn-primary"
          onClick={() =>
            cartDispatch({
              type: "ADD-TO-CART",
              payload: {
                brand,
                _id,
                price,
                title,
                rating,
                prodImage,
                prodQty: 1,
              },
            })
          }
        >
          Add to Cart
        </button>
        <button
          className="btn btn-outline"
          onClick={() =>
            wishlistDispatch({
              type: "ADD-TO-WISHLIST",
              payload: { brand, _id, price, title, rating, prodImage },
            })
          }
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}

export { ProductDetail };

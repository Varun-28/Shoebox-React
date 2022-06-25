import { useEffect } from "react";
import { useAlert } from "react-alert";
import axios from "axios";
import { useWishlist } from "./wishlist-context";

function useWishlistServerCalls() {
  const token = localStorage.getItem("ecommToken");
  const { wishlistState, wishlistDispatch } = useWishlist();
  const alert = useAlert();

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          const response = await axios.get("/api/user/wishlist", {
            headers: { authorization: token },
          });
          if (response.status === 200 && response.data.wishlist.length !== 0) {
            wishlistDispatch({
              type: "ADD-TO-WISHLIST",
              payload: response.data.wishlist,
            });
          }
        } catch (error) {
          alert.show("Internal Server Error", { type: "error" });
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const addToWishlist = async (product) => {
    try {
      if (wishlistState.items.find((item) => item._id === product._id)) {
        alert.show("Already In Cart", { type: "info" });
      } else {
        const response = await axios.post(
          "/api/user/wishlist",
          { product },
          {
            headers: { authorization: token },
          }
        );
        wishlistDispatch({
          type: "ADD-TO-WISHLIST",
          payload: response.data.wishlist,
        });
        alert.show("Added To Wishlist", { type: "success" });
      }
    } catch (err) {
      alert.show("Server Error: Cannot be Added!", { type: "error" });
    }
  };

  const deleteFromWishlist = async (productId) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: { authorization: token },
      });
      wishlistDispatch({
        type: "REMOVE-FROM-WISHLIST",
        payload: response.data.wishlist,
      });
    } catch (err) {
      alert.show("Server Error: Cannot be removed!", { type: "error" });
    }
  };
  return { addToWishlist, deleteFromWishlist };
}

export { useWishlistServerCalls };

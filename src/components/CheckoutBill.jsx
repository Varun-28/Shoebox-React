import { React, useState, useEffect } from "react";
import { useCart } from "../context/cartContext/cart-context";
import "../pages/cart/cart.css";
import { useAuth } from "../context/authContext/auth-context";
import { useAlert } from "react-alert";

function CheckoutBill({ selectedAddress }) {
  const { cartState } = useCart();
  const alert = useAlert();
  const [price, setPrice] = useState({
    totalPrice: 0,
    deliveryCharge: 40,
    prodPrice: 0,
  });
  const { authState } = useAuth();

  useEffect(() => {
    if (cartState.items.length !== 0) {
      const priceSum = cartState.items.reduce(
        (prev, curr) => prev + Number(curr.price) * Number(curr.qty),
        0
      );
      setPrice((val) => ({
        ...val,
        totalPrice: priceSum + val.deliveryCharge,
        prodPrice: priceSum,
      }));
    } else {
      setPrice((val) => ({ ...val, totalPrice: 0, prodPrice: 0 }));
    }
  }, [cartState]);

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    if (selectedAddress === undefined) {
      alert.show("Please Select or Add an Address", { type: "info" });
    } else {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        alert.show("Razorpay SDK failed to load, check your connection", {
          type: "error",
        });
        return;
      }

      const options = {
        key: "rzp_test_zU0Ln69INclft4",
        amount: price.totalPrice * 100,
        currency: "INR",
        name: "The Shoebox",
        description: "Thank you for shopping with us",
        prefill: {
          name: `${authState.firstName} ${authState.lastName}`,
          email: authState.email,
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }
  };

  return (
    <div className="bill-container p-4 border-2 mx-auto">
      <h4>Price Details</h4>
      <span className="gray-hr-line"></span>
      <div className="price-info">
        <p>Price</p>
        <p>Rs. {price.prodPrice}</p>
      </div>
      <div className="price-info">
        <p>Delivery Charges</p>
        <p>Rs. {price.deliveryCharge}</p>
      </div>
      <span className="gray-hr-line"></span>
      <div className="price-info">
        <h4>Total Price</h4>
        <h4>Rs. {price.totalPrice}</h4>
      </div>
      <span className="gray-hr-line"></span>
      {selectedAddress && (
        <div>
          <p className="gray-text mb-2">Deliver To:</p>
          <p>{selectedAddress.fullName}</p>
          <p className="phone">{selectedAddress.contact}</p>
          <p className="sub-text">
            {selectedAddress.house}, {selectedAddress.area}
          </p>
          <p className="sub-text">{selectedAddress.landmark}</p>
          <p className="sub-text">
            {selectedAddress.city.toUpperCase()},{" "}
            {selectedAddress.state.toUpperCase()} {selectedAddress.pincode}
          </p>
          <span className="gray-hr-line"></span>
        </div>
      )}
      <button className="btn btn-primary mx-auto" onClick={displayRazorpay}>
        Place Order
      </button>
    </div>
  );
}

export { CheckoutBill };

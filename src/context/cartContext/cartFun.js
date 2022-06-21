export const cartFun = (cartState, action) => {
  switch (action.type) {
    case "ADD-TO-CART":
      if (
        cartState.items.filter((item) => item._id === action.payload._id)
          .length !== 0
      ) {
        return { ...cartState, msg: "Product is already in your Cart!" };
      } else {
        return {
          ...cartState,
          msg: "Product added",
          quantity: cartState.quantity + 1,
          items: [...cartState.items, action.payload],
        };
      }
    case "REMOVE-FROM-CART":
      return {
        ...cartState,
        quantity: cartState.quantity - 1,
        items: cartState.items.filter((item) => item._id !== action.payload),
      };
    case "DECREASE-COUNT":
      return {
        ...cartState,
        items: cartState.items.map((item) =>
          item._id === action.payload
            ? {
                ...item,
                prodQty: item.prodQty > 1 ? item.prodQty - 1 : 1,
              }
            : item
        ),
      };
    case "INCREASE-COUNT":
      return {
        ...cartState,
        items: cartState.items.map((item) =>
          item._id === action.payload
            ? { ...item, prodQty: item.prodQty + 1 }
            : item
        ),
      };
    default:
      return cartState;
  }
};

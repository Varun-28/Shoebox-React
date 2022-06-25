export const cartFun = (cartState, action) => {
  switch (action.type) {
    case "ADD-TO-CART":
      return {
        ...cartState,
        quantity: action.payload.length,
        items: [...action.payload],
      };
    case "REMOVE-FROM-CART":
      return {
        ...cartState,
        quantity: action.payload.length,
        items: [...action.payload],
      };
    case "INCREMENT-DECREMENT":
      return {
        ...cartState,
        items: [...action.payload]
      }
    default:
      return cartState;
  }
};

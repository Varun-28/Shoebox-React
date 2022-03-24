export const wishlistFun = (wishlistState, action) => {
    switch(action.type){
        case ("ADD-TO-WISHLIST"):
            if(wishlistState.items.filter(item => item._id === action.payload._id).length !== 0){ 
             return {...wishlistState, msg: "Product is already in your wishlist!"}
            }else{
             return {...wishlistState, msg: "Product added", quantity: wishlistState.quantity + 1, 
             items: [...wishlistState.items, action.payload]}
            }
        case ("REMOVE-FROM-WISHLIST"):
            return {...wishlistState, quantity: wishlistState.quantity - 1, 
                items: wishlistState.items.filter(item => item._id !== action.payload)}
        default: return wishlistState
        }
}
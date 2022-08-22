import {
    MOVE_TO_WISHLIST_FROM_CART,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST
} from "../constants/wishlistConstants";

export const wishlistReducer = (stateOfWishlist, action) => {
    switch (action.type) {
        case MOVE_TO_WISHLIST_FROM_CART:
            if (!(stateOfWishlist.some(item => item._id === action.payload._id))) {
                return [
                    ...stateOfWishlist,
                    action.payload
                ]
            } else
                return stateOfWishlist
        case ADD_TO_WISHLIST:
            if (!(stateOfWishlist.some(item => item._id === action.payload._id))) {
                return [
                    ...stateOfWishlist,
                    action.payload
                ]
            } else
                return stateOfWishlist.filter(item => item._id !== action.payload._id)
        case REMOVE_FROM_WISHLIST:
            return stateOfWishlist.filter(item => item._id !== action.payload._id)
    }
}
import {
    MOVE_TO_WISHLIST_FROM_CART,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST
} from "../constants/wishlistConstants";
import toast from 'react-hot-toast';
import { toastTheme } from "../utils/customToastTheme";

export const wishlistReducer = (stateOfWishlist, action) => {
    switch (action.type) {
        case MOVE_TO_WISHLIST_FROM_CART:
            toast.success('Product Moved To Wishlist', toastTheme)
            if (!(stateOfWishlist.some(item => item._id === action.payload._id))) {
                return [
                    ...stateOfWishlist,
                    action.payload
                ]
            } else
                return stateOfWishlist
        case ADD_TO_WISHLIST:
            toast.success('Added To Wishlist', toastTheme)
            if (!(stateOfWishlist.some(item => item._id === action.payload._id))) {
                return [
                    ...stateOfWishlist,
                    action.payload
                ]
            } else
                return stateOfWishlist.filter(item => item._id !== action.payload._id)
        case REMOVE_FROM_WISHLIST:
            toast.success('Removed From Wishlist', toastTheme)
            return stateOfWishlist.filter(item => item._id !== action.payload._id)
    }
}
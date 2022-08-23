import {
    MOVE_TO_CART,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY
} from "../constants/cartConstants";
import toast from 'react-hot-toast';
import { toastTheme } from "../utils/customToastTheme";

export const cartReducer = (stateOfCart, action) => {
    switch (action.type) {
        case MOVE_TO_CART:
            if (!(stateOfCart.some(item => item._id === action.payload._id))) {
                toast.success('Product Moved To Cart', toastTheme)
                return [
                    ...stateOfCart,
                    { ...action.payload, qt: 1 }
                ]
            } else {
                toast.success('Product Already Exists In Cart', toastTheme)
                return stateOfCart.map(item =>
                    item._id === action.payload._id ?
                        { ...item, qt: item.qt + 1 } :
                        item
                )
            }
        case ADD_TO_CART:
            if (!(stateOfCart.some(item => item._id === action.payload._id))) {
                toast.success('Added To Cart', toastTheme)
                return [
                    ...stateOfCart,
                    { ...action.payload, qt: 1 }
                ]
            } else
                return stateOfCart
        case REMOVE_FROM_CART:
            toast.success('Removed From Cart', toastTheme)
            return stateOfCart.filter(item => item._id !== action.payload._id)
        case INCREASE_QUANTITY:
            return stateOfCart.map(item =>
                item._id === action.payload._id ?
                    { ...item, qt: item.qt + 1 } :
                    item
            )
        case DECREASE_QUANTITY:
            return stateOfCart.map(item =>
                item._id === action.payload._id && item.qt > 1 ?
                    { ...item, qt: item.qt - 1 } :
                    item
            )
    }
}
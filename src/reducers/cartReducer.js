import {
    MOVE_TO_CART,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY
} from "../constants/cartConstants";

export const cartReducer = (stateOfCart, action) => {
    switch (action.type) {
        case MOVE_TO_CART:
            if (!(stateOfCart.some(item => item._id === action.payload._id))) {
                return [
                    ...stateOfCart,
                    { ...action.payload, qt: 1 }
                ]
            } else
                return stateOfCart.map(item =>
                    item._id === action.payload._id ?
                        { ...item, qt: item.qt + 1 } :
                        item
                )
        case ADD_TO_CART:
            if (!(stateOfCart.some(item => item._id === action.payload._id))) {
                return [
                    ...stateOfCart,
                    { ...action.payload, qt: 1 }
                ]
            } else
                return stateOfCart
        case REMOVE_FROM_CART:
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
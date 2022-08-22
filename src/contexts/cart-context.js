import React, { useReducer, useContext, createContext } from "react";
import { getOriginalPrice } from "../utils/productutilFuncs";
import { cartReducer } from "../reducers/cartReducer";

const cartContext = createContext({ state: [] });

const CartProvider = ({ children }) => {

    const [stateOfCart, dispatchOfCart] = useReducer(cartReducer, []);

    const priceDetailsReducer = (acc, curr) => {
        return {
            ...acc,
            totalOriginalPrice: (acc.totalOriginalPrice + getOriginalPrice(curr)) * curr.qt,
            totalDiscountedPrice: (acc.totalDiscountedPrice + curr.discountedPrice) * curr.qt
        }
    }

    const priceDetailsObj = stateOfCart.reduce(priceDetailsReducer, { totalOriginalPrice: 0, totalDiscountedPrice: 0 });

    return <cartContext.Provider
        value={{
            stateOfCart,
            dispatchOfCart,
            priceDetailsObj
        }}>
        {children}
    </cartContext.Provider>
}

const useCart = () => useContext(cartContext);

export { useCart, CartProvider };
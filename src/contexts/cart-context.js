import React, {useReducer, useContext, createContext } from "react";
import { ProductsInCart } from "../components/Products-In-Cart/ProductsInCart";

const cartContext = createContext({ state: [] });

const CartProvider = ({ children }) => {

    const cartReducer = (stateOfCart, action) => {
        switch(action.type){
            case "ADD_TO_CART":
                if( !(stateOfCart.some(item => item._id === action.payload._id)) ){
                     return [ ...stateOfCart, { ...action.payload, qt: 1 } ]
                }else
                     return stateOfCart.map(item => item._id === action.payload._id ? { ...item, qt: item.qt+1 }: item )
            case "REMOVE_FROM_CART":
                return stateOfCart.filter(item => item._id !== action.payload._id)
            case "INCREASE_QUANTITY":
                return stateOfCart.map(item => item._id === action.payload._id ? { ...item, qt: item.qt+1 }: item )
            case "DECREASE_QUANTITY":
                return stateOfCart.map(item => item._id === action.payload._id && item.qt >1 ? { ...item, qt: item.qt-1 }: item )
        }
    }

    const [ stateOfCart, dispatchOfCart ] = useReducer( cartReducer, [] );

    return <cartContext.Provider value={{ stateOfCart, dispatchOfCart }}>
        { children }
    </cartContext.Provider>
}

const useCart = () => useContext(cartContext);

export { useCart, CartProvider };
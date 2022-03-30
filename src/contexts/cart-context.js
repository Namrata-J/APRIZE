import React, {useReducer, useContext, createContext } from "react";

const cartContext = createContext({ state: [] });

const CartProvider = ({ children }) => {

    const cartReducer = (stateOfCart, action) => {
        switch(action.type){
            case "ADD_TO_CART":
                if( !(stateOfCart.includes(action.payload)) ){
                     return [ ...stateOfCart, action.payload ]
                }else
                     return [ ...stateOfCart ]
            case "REMOVE_FROM_CART":
                return stateOfCart.filter(item => item._id !== action.payload._id)
        }
    }

    const [ stateOfCart, dispatchOfCart ] = useReducer( cartReducer, [] );

    return <cartContext.Provider value={{ stateOfCart, dispatchOfCart }}>
        { children }
    </cartContext.Provider>
}

const useCart = () => useContext(cartContext);

export { useCart, CartProvider };
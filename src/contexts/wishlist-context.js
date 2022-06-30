import React, { useReducer, useContext, createContext } from "react";

const wishlistContext = createContext({ state: [] });

const WishlistProvider = ({ children }) => {

    const getLikeButtonStyle = (product) => {
        if(stateOfWishlist.some(item => item._id === product._id)){
            return "var(--light-red)"
        }else
            return "var(--medium-gray)"
    }

    const wishlistReducer = (stateOfWishlist, action) => {
        switch(action.type){
            case "MOVE_TO_WISHLIST_FROM_CART":
                if( !(stateOfWishlist.some(item => item._id === action.payload._id)) ){
                    return  [ ...stateOfWishlist, action.payload ]
                }else
                    return stateOfWishlist
            case "ADD_TO_WISHLIST":
                if( !(stateOfWishlist.some(item => item._id === action.payload._id)) ){
                    return  [ ...stateOfWishlist, action.payload ]
                }else
                    return stateOfWishlist.filter(item => item._id!==action.payload._id)
            case "REMOVE_FROM_WISHLIST":
                    return stateOfWishlist.filter(item => item._id!==action.payload._id)
        }
    }

    const [ stateOfWishlist , dipatchOfWishlist ] = useReducer( wishlistReducer, [] );

    return <wishlistContext.Provider value={{ stateOfWishlist, dipatchOfWishlist, getLikeButtonStyle }}>
        { children }
    </wishlistContext.Provider>
}

const useWishlist = () => useContext(wishlistContext);

export { useWishlist, WishlistProvider };
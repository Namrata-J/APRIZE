import React, { useReducer, useContext, createContext } from "react";
import { wishlistReducer } from "../reducers/wishlistReducer";

const wishlistContext = createContext({ state: [] });

const WishlistProvider = ({ children }) => {

    const getLikeButtonStyle = (product) => {
        if (stateOfWishlist.some(item => item._id === product._id)) {
            return "var(--light-red)"
        } else
            return "var(--medium-gray)"
    }

    const [stateOfWishlist, dipatchOfWishlist] = useReducer(wishlistReducer, []);

    return <wishlistContext.Provider
        value={{
            stateOfWishlist,
            dipatchOfWishlist,
            getLikeButtonStyle
        }}>
        {children}
    </wishlistContext.Provider>
}

const useWishlist = () => useContext(wishlistContext);

export { useWishlist, WishlistProvider };
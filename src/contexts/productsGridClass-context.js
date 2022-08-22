import React, { useState, createContext, useContext } from "react";

const productsGridClassContext = createContext({ productsGridClass: "ap_all-products normal-grid" });

const ProductsGridClassProvider = ({ children }) => {

    const [productsGridClass, setProductsGridClass] = useState("ap_all-products normal-grid");

    const getTheProductsGridClass = (productsGridClass) => {
        productsGridClass === "ap_all-products normal-grid" ?
            setProductsGridClass("ap_all-products stacked-grid") :
            setProductsGridClass("ap_all-products normal-grid");
    }

    return <productsGridClassContext.Provider
        value={{
            productsGridClass,
            setProductsGridClass,
            getTheProductsGridClass
        }}>
        {children}
    </productsGridClassContext.Provider>
}

const useProductsGridClass = () => useContext(productsGridClassContext);

export { useProductsGridClass, ProductsGridClassProvider };
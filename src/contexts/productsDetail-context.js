import React, { useState, useContext, useEffect, createContext } from "react";
import axios from "axios";

const productsDetailContext = createContext({ products: []})

const ProductsDetailProvider = ({ children }) => {
    
    const [products, setProducts] = useState([]);

    useEffect(() =>
        (async () => {
            const ProductResponse = await axios.get("api/products")
            setProducts(ProductResponse.data.products)
        })(), []
    );

    return <productsDetailContext.Provider value= {{ products, setProducts }}>
        { children }
    </productsDetailContext.Provider>
} 

const useProductsDetail = () => useContext(productsDetailContext);

export { useProductsDetail, ProductsDetailProvider };
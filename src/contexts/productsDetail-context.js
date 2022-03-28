import React, { useState, useContext, useEffect, createContext } from "react";
import axios from "axios";

const productsDetailContext = createContext({ products: []})

const ProductsDetailProvider = ({ children }) => {
    
    const [productsDataFetchedFromApi, setProductsDataFetchedFromApi] = useState([]);

    useEffect(() =>
        (async () => {
            const ProductResponse = await axios.get("api/products")
            setProductsDataFetchedFromApi(ProductResponse.data.products)
        })(), []
    );

    return <productsDetailContext.Provider value= {{ productsDataFetchedFromApi, setProductsDataFetchedFromApi }}>
        { children }
    </productsDetailContext.Provider>
} 

const useProductsDetail = () => useContext(productsDetailContext);

export { useProductsDetail, ProductsDetailProvider };
import React, { useReducer, useContext, createContext } from "react";
import { filterStateReducer } from "../reducers/filterStateReducer";
import { useProductsDetail } from "./productsDetail-context";
import {
    sortPriceFunc,
    sortRatingFunc,
    sortDiscountFunc,
    filterPriceFunc,
    filterSectionFunc,
    filterCategoryFunc,
    filterProductsFunc
} from "../utils/sortAndFilterFunc";

const filterDataContext = createContext(null);

const FilterDataProvider = ({ children }) => {

    const { productsDataFetchedFromApi } = useProductsDetail();

    const initialObj = {
        sortPriceVal: null,
        sortRatingVal: null,
        sortDiscountVal: null,
        filterPriceVal: 100000,
        filterSectionVal: [],
        filterCategoryVal: [],
        filterProductsVal: []
    };

    const [stateOfProductsBeingShown, dispatchOfProductsBeingShown] = useReducer(filterStateReducer, initialObj);

    const filteredProductList = filterProductsFunc(stateOfProductsBeingShown,
        filterCategoryFunc(stateOfProductsBeingShown,
            filterSectionFunc(stateOfProductsBeingShown,
                filterPriceFunc(stateOfProductsBeingShown,
                    sortDiscountFunc(stateOfProductsBeingShown,
                        sortRatingFunc(stateOfProductsBeingShown,
                            sortPriceFunc(stateOfProductsBeingShown,
                                productsDataFetchedFromApi)))))));

    return <filterDataContext.Provider
        value={{
            stateOfProductsBeingShown,
            dispatchOfProductsBeingShown,
            filteredProductList
        }}>
        {children}
    </filterDataContext.Provider>
}

const useFilterData = () => useContext(filterDataContext);

export { useFilterData, FilterDataProvider };


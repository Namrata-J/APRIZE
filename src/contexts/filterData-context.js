import React, { useReducer, useContext, createContext } from "react";
import { sortPriceFunc, sortRatingFunc, sortDiscountFunc, filterPriceFunc, filterSectionFunc, filterCategoryFunc, filterProductsFunc } from "../utils/sortAndFilterFunc";
import { useProductsDetail } from "./productsDetail-context";

const filterDataContext = createContext(null);

const FilterDataProvider = ({ children }) => {

    const { productsDataFetchedFromApi } = useProductsDetail();

    const filterStateReducer = (state, action) => {
        switch (action.type) {
            case "clear":
                return {
                    ...state,
                    sortPriceVal: null, sortRatingVal: null, sortDiscountVal: null, filterPriceVal: 100000, filterSectionVal: [], filterCategoryVal: [], filterProductsVal: []
                }
            case "sortByPrice":
                return {
                    ...state,
                    sortPriceVal: action.payload
                }
            case "sortByRating":
                return {
                    ...state,
                    sortRatingVal: action.payload
                }
            case "sortByDiscount":
                return {
                    ...state,
                    sortDiscountVal: action.payload
                }
            case "filterByPrice":
                return {
                    ...state,
                    filterPriceVal: action.payload
                }
            case "filterBySection":
                return {
                    ...state,
                    filterSectionVal: state.filterSectionVal.includes(action.payload) ? state.filterSectionVal.filter(item => item !== action.payload) : [...state.filterSectionVal, action.payload]
                }
            case "filterByCategory":
                return {
                    ...state,
                    filterCategoryVal: state.filterCategoryVal.includes(action.payload) ? state.filterCategoryVal.filter(item => item !== action.payload) : [...state.filterCategoryVal, action.payload]
                }
            case "filterByProducts":
                return {
                    ...state,
                    filterProductsVal: state.filterProductsVal.includes(action.payload) ? state.filterProductsVal.filter(item => item !== action.payload) : [...state.filterProductsVal, action.payload]
                }
            default:
                return state
        }
    }

    const initialObj = {
        sortPriceVal: null,
        sortRatingVal: null,
        sortDiscountVal: null,
        filterPriceVal: 100000,
        filterSectionVal: [],
        filterCategoryVal: [],
        filterProductsVal: []
    };

    const [ stateOfProductsBeingShown , dispatchOfProductsBeingShown ] = useReducer(filterStateReducer, initialObj);

    const filteredProductList = filterProductsFunc(stateOfProductsBeingShown, filterCategoryFunc(stateOfProductsBeingShown, filterSectionFunc(stateOfProductsBeingShown, filterPriceFunc(stateOfProductsBeingShown, sortDiscountFunc(stateOfProductsBeingShown, sortRatingFunc(stateOfProductsBeingShown, sortPriceFunc(stateOfProductsBeingShown, productsDataFetchedFromApi)))))));

    return <filterDataContext.Provider value={{ stateOfProductsBeingShown, dispatchOfProductsBeingShown, filteredProductList }}>
        { children }
    </filterDataContext.Provider>
}

const useFilterData = () => useContext(filterDataContext);

export { useFilterData, FilterDataProvider };


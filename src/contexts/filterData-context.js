import React, { useReducer, useContext, createContext } from "react";

const filterDataContext = createContext(null);

const FilterDataProvider = ({ children }) => {

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

    const [state, dispatch] = useReducer(filterStateReducer, initialObj);

    return <filterDataContext.Provider value={{ state, dispatch }}>
        { children }
    </filterDataContext.Provider>
}

const useFilterData = () => useContext(filterDataContext);

export { useFilterData, FilterDataProvider };


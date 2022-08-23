import {
    CLEAR,
    SORT_BY_PRICE,
    SORT_BY_RATING,
    SORT_BY_DISCOUNT,
    FILTER_BY_PRICE,
    FILTER_BY_SECTION,
    FILTER_BY_CATEGORY,
    FILTER_BY_PRODUCTS
} from "../constants/filterStateConstants";

export const filterStateReducer = (state, action) => {
    switch (action.type) {
        case CLEAR:
            return {
                ...state,
                sortPriceVal: null,
                sortRatingVal: null,
                sortDiscountVal: null,
                filterPriceVal: 100000,
                filterSectionVal: [],
                filterCategoryVal: [],
                filterProductsVal: []
            }
        case SORT_BY_PRICE:
            return {
                ...state,
                sortPriceVal: action.payload
            }
        case SORT_BY_RATING:
            return {
                ...state,
                sortRatingVal: action.payload
            }
        case SORT_BY_DISCOUNT:
            return {
                ...state,
                sortDiscountVal: action.payload
            }
        case FILTER_BY_PRICE:
            return {
                ...state,
                filterPriceVal: action.payload
            }
        case FILTER_BY_SECTION:
            return {
                ...state,
                filterSectionVal: state.filterSectionVal.includes(action.payload) ?
                    state.filterSectionVal.filter(item => item !== action.payload) :
                    [...state.filterSectionVal, action.payload]
            }
        case FILTER_BY_CATEGORY:
            return {
                ...state,
                filterCategoryVal: state.filterCategoryVal.includes(action.payload) ?
                    state.filterCategoryVal.filter(item => item !== action.payload) :
                    [...state.filterCategoryVal, action.payload]
            }
        case FILTER_BY_PRODUCTS:
            return {
                ...state,
                filterProductsVal: state.filterProductsVal.includes(action.payload) ?
                    state.filterProductsVal.filter(item => item !== action.payload) :
                    [...state.filterProductsVal, action.payload]
            }
        default:
            return state
    }
}
const sortPriceFunc = (state, productData) => {
    switch (state.sortPriceVal) {
        case "Low To High":
            return [...productData].sort((a, b) => a.discountedPrice - b.discountedPrice)
        case "High To Low":
            return [...productData].sort((a, b) => b.discountedPrice - a.discountedPrice)
        default:
            return productData
    }
}

const sortRatingFunc = (state, productData) => {
    switch (state.sortRatingVal) {
        case "3 star & above":
            return [...productData].filter(item => item.rating >= 3)
        case "4 star & above":
            return [...productData].filter(item => item.rating >= 4)
        case "5 star":
            return [...productData].filter(item => item.rating === 5)
        default:
            return productData
    }
}

const sortDiscountFunc = (state, productData) => {
    switch (state.sortDiscountVal) {
        case "10% & above":
            return [...productData].filter(item => Number(item.discount) >= 10)
        case "30% & above":
            return [...productData].filter(item => Number(item.discount) >= 30)
        case "60% & above":
            return [...productData].filter(item => Number(item.discount) >= 60)
        case "80% & above":
            return [...productData].filter(item => Number(item.discount) >= 80)
        default:
            return productData
    }
}

const filterPriceFunc = (state, productData) => {
    return [...productData].filter(item => item.discountedPrice <= state.filterPriceVal)
}

const filterSectionFunc = (state, productData) => {
    return state.filterSectionVal.length === 0 ?
        productData :
        [...productData].filter(item => item.isInSection.some(section => state.filterSectionVal.includes(section)))
}

const filterCategoryFunc = (state, productData) => {
    return state.filterCategoryVal.length === 0 ?
        productData :
        [...productData].filter(item => state.filterCategoryVal.includes(item.categoryName))
}

const filterProductsFunc = (state, productData) => {
    return state.filterProductsVal.length === 0 ?
        productData :
        [...productData].filter(item => state.filterProductsVal.some(specialProduct => item[specialProduct] === true))
}

export {
    sortPriceFunc,
    sortRatingFunc,
    sortDiscountFunc,
    filterPriceFunc,
    filterSectionFunc,
    filterCategoryFunc,
    filterProductsFunc
};
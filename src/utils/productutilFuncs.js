const getProductClass = (product) => {
    if (product.isNewArrival) {
        if ( !product.isInStock ) {
            return "card-w-badge-type1 card-w-badge-type3 card-w-badge b-rad1"
        } else {
            return "card-w-badge-type1 card-w-badge b-rad1"
        }
    } else {
        if (product.isTrending) {
            if ( !product.isInStock ) {
                return "card-w-badge-type2 card-w-badge-type3 card-w-badge b-rad1"
            } else {
                return "card-w-badge-type2 card-w-badge b-rad1"
            }
        } else {
            if (product.isInStock) {
                return "card-w-badge-type1 card-w-badge b-rad1"
            } else {
                return "card-w-badge-type3 card-w-badge b-rad1"
            }
        }
    }
}

const getOriginalPrice = (product) => {
    const originalPrice = parseInt((product.discountedPrice * 100)/(100 - Number(product.discount)))
    return originalPrice
} 

export { getProductClass, getOriginalPrice };
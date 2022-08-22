import { useEffect } from "react";
import "./productCardListing.css";
import { useLocation } from "react-router-dom";
import { ProductCard } from "../Product-card/ProductCard";
import { useFilterData, useProductsGridClass } from "../../contexts";
import {
    CLEAR,
    FILTER_BY_SECTION,
    FILTER_BY_CATEGORY,
    FILTER_BY_PRODUCTS
} from "../../constants/filterStateConstants";

const ProductCardListing = () => {

    const location = useLocation();

    const category = location?.state?.category

    const newArrivalCategory = location?.state?.isNewArrival

    const discountedProducts = location?.state?.hasDiscount

    const productOnSale = location?.state?.onSale

    const { stateOfProductsBeingShown, dispatchOfProductsBeingShown, filteredProductList } = useFilterData();

    const { productsGridClass } = useProductsGridClass();

    useEffect(() => {
        if (category) {
            if (category === "Men" || category === "Women" || category === "Kids") {
                if (!(stateOfProductsBeingShown.filterSectionVal.includes(category))) {
                    dispatchOfProductsBeingShown({ type: CLEAR })
                    dispatchOfProductsBeingShown({ type: FILTER_BY_SECTION, payload: category })
                }
            } else
                if (!(stateOfProductsBeingShown.filterCategoryVal.includes(category))) {
                    dispatchOfProductsBeingShown({ type: CLEAR })
                    dispatchOfProductsBeingShown({ type: FILTER_BY_CATEGORY, payload: category })
                }
        }

        if (newArrivalCategory) {
            dispatchOfProductsBeingShown({ type: CLEAR })
            dispatchOfProductsBeingShown({ type: FILTER_BY_PRODUCTS, payload: "isNewArrival" })
        }

        if (discountedProducts) {
            dispatchOfProductsBeingShown({ type: CLEAR })
            dispatchOfProductsBeingShown({ type: FILTER_BY_PRODUCTS, payload: "hasDiscount" })
        }

        if (productOnSale) {
            dispatchOfProductsBeingShown({ type: CLEAR })
            dispatchOfProductsBeingShown({ type: FILTER_BY_PRODUCTS, payload: "isInSale" })
        }
    }, [])

    return (
        <div className={productsGridClass}>
            {
                filteredProductList.map((product, index) => {
                    return (
                        <ProductCard {...product} key={index} />
                    )
                })
            }
        </div>
    );
}

export { ProductCardListing };
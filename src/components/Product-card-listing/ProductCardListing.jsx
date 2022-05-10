import { useEffect } from "react";
import "./productCardListing.css";
import { ProductCard } from "../";
import { useLocation } from "react-router-dom";
import { useFilterData, useProductsGridClass } from "../../contexts";

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
                    dispatchOfProductsBeingShown({ type: "clear" })
                    dispatchOfProductsBeingShown({ type: "filterBySection", payload: category })
                }
            } else
                if (!(stateOfProductsBeingShown.filterCategoryVal.includes(category))) {
                    dispatchOfProductsBeingShown({ type: "clear" })
                    dispatchOfProductsBeingShown({ type: "filterByCategory", payload: category })
                }
        }

        if (newArrivalCategory) {
            dispatchOfProductsBeingShown({ type: "clear" })
            dispatchOfProductsBeingShown({ type: "filterByProducts", payload: "isNewArrival" })
        }

        if (discountedProducts) {
            dispatchOfProductsBeingShown({ type: "clear" })
            dispatchOfProductsBeingShown({ type: "filterByProducts", payload: "hasDiscount" })
        }

        if (productOnSale) {
            dispatchOfProductsBeingShown({ type: "clear" })
            dispatchOfProductsBeingShown({ type: "filterByProducts", payload: "isInSale" })
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
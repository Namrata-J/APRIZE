import { useFilterData } from "../../contexts/filterData-context";

const FilterableForm = () => {

    const { dispatchOfProductsBeingShown } = useFilterData();

    const filterableFormSortByDiscountArr = [
        {
            inputId: "ap_sort-tenPercentAndAbove",
            optionForSortByDiscount: "10% & above"
        },
        {
            inputId: "ap_sort-thirtyPercentAndAbove",
            optionForSortByDiscount: "30% & above"
        },
        {
            inputId: "ap_sort-sixtyPercentAndAbove",
            optionForSortByDiscount: "60% & above"
        },
        {
            inputId: "ap_sort-eightyPercentAndAbove",
            optionForSortByDiscount: "80% & above"
        }
    ];

    const filterableFormCategoryArr = [
        {
            inputId: "ap_filter-bags",
            categoryName: "Bags"
        },
        {
            inputId: "ap_filter-bodycareProducts",
            categoryName: "Bodycare Products"
        },
        {
            inputId: "ap_filter-furniture",
            categoryName: "Furniture"
        },
        {
            inputId: "ap_filter-headphones",
            categoryName: "Headphones"
        },
        {
            inputId: "ap_filter-jewellery",
            categoryName: "Jewellery"
        },
        {
            inputId: "ap_filter-kitchenUtensils",
            categoryName: "Kitchen utensils"
        },
        {
            inputId: "ap_filter-makeUp",
            categoryName: "Makeup"
        },
        {
            inputId: "ap_filter-masks",
            categoryName: "Masks"
        },
        {
            inputId: "ap_filter-mobiles",
            categoryName: "Mobiles"
        },
        {
            inputId: "ap_filter-perfumes",
            categoryName: "Perfumes"
        },
        {
            inputId: "ap_filter-professionals",
            categoryName: "Professionals"
        },
        {
            inputId: "ap_filter-saree",
            categoryName: "Saree"
        },
        {
            inputId: "ap_filter-shoes",
            categoryName: "Shoes"
        },
        {
            inputId: "ap_filter-watches",
            categoryName: "Watches"
        },
        {
            inputId: "ap_filter-waterBottles",
            categoryName: "Water Bottles"
        },
        {
            inputId: "ap_filter-western",
            categoryName: "Western"
        },
        {
            inputId: "ap_filter-winter",
            categoryName: "Winter"
        }
    ];

    return (
        <form className="ap_filter-section">

            <div className="ap_filter-clear">
                <input type="reset" value="clear" className="ap_clear-all et_p-simple-btn action-color btn b-rad1" onClick={(e) => dispatchOfProductsBeingShown({ type: e.target.value })} />
            </div>

            <div className="ap_sort-by-price">
                <h4>Sort By Price</h4>

                <label htmlFor="ap_sort-lowToHigh">
                    <input type="radio" id="ap_sort-lowToHigh" name="sortByPrice" value="Low To High" className="ap_input-field" onClick={(e) => dispatchOfProductsBeingShown({ type: e.target.name, payload: e.target.value })} />Low To High
                </label>
                <label htmlFor="ap_sort-HighToLow">
                    <input type="radio" id="ap_sort-HighToLow" name="sortByPrice" value="High To Low" className="ap_input-field" onClick={(e) => dispatchOfProductsBeingShown({ type: e.target.name, payload: e.target.value })} />High To Low
                </label>
            </div>

            <div className="ap_sort-by-rating">
                <h4>Sort By Rating</h4>

                <label htmlFor="ap_sort-threeStarAndAbove">
                    <input type="radio" id="ap_sort-threeStarAndAbove" name="sortByRating" value="3 star & above" className="ap_input-field" onClick={(e) => dispatchOfProductsBeingShown({ type: e.target.name, payload: e.target.value })} />3 star & above
                </label>
                <label htmlFor="ap_sort-fourStarAndAbove">
                    <input type="radio" id="ap_sort-fourStarAndAbove" name="sortByRating" value="4 star & above" className="ap_input-field" onClick={(e) => dispatchOfProductsBeingShown({ type: e.target.name, payload: e.target.value })} />4 star & above
                </label>
                <label htmlFor="ap_sort-fiveStar">
                    <input type="radio" id="ap_sort-fiveStar" name="sortByRating" value="5 star" className="ap_input-field" onClick={(e) => dispatchOfProductsBeingShown({ type: e.target.name, payload: e.target.value })} />5 star
                </label>
            </div>

            <div className="ap_sort-by-discount">
                <h4>Sort By Discount</h4>

                {
                    filterableFormSortByDiscountArr.map((discountSort, index) => {
                        return (
                            <label htmlFor={ discountSort.inputId } key= { index }>
                                <input type="radio" id={ discountSort.inputId } name="sortByDiscount" value={ discountSort.optionForSortByDiscount } className="ap_input-field" onClick={(e) => dispatchOfProductsBeingShown({ type: e.target.name, payload: e.target.value })} />{ discountSort.optionForSortByDiscount }
                            </label>
                        )
                    })
                }

            </div>

            <div className="ap_filter-price">
                <h4>Price</h4>

                <div className="ap_price-slider">
                    <span>0</span>
                    <input type="range" min="1" max="100000" name="filterByPrice" defaultValue="100000" step="1" className="ap_slider" onClick={(e) => dispatchOfProductsBeingShown({ type: e.target.name, payload: e.target.value })} />
                    <span>100k</span>
                </div>
            </div>

            <div className="ap_filter-section">
                <h4>Section</h4>

                <label htmlFor="ap_filter-men">
                    <input type="checkbox" id="ap_filter-men" name="filterBySection" value="Men" className="ap_input-field" onClick={(e) => dispatchOfProductsBeingShown({ type: e.target.name, payload: e.target.value })} />Men
                </label>
                <label htmlFor="ap_filter-women">
                    <input type="checkbox" id="ap_filter-women" name="filterBySection" value="Women" className="ap_input-field" onClick={(e) => dispatchOfProductsBeingShown({ type: e.target.name, payload: e.target.value })} />Women
                </label>
                <label htmlFor="ap_filter-kids">
                    <input type="checkbox" id="ap_filter-kids" name="filterBySection" value="Kids" className="ap_input-field" onClick={(e) => dispatchOfProductsBeingShown({ type: e.target.name, payload: e.target.value })} />Kids
                </label>
            </div>

            <div className="ap_filter-category">
                <h4>Category</h4>

                {
                    filterableFormCategoryArr.map((category, index) => {
                        return (
                            <label htmlFor={category.inputId} key= { index }>
                                <input type="checkbox" id={ category.inputId } name="filterByCategory" value={ category.categoryName } className="ap_input-field" onClick={(e) => dispatchOfProductsBeingShown({ type: e.target.name, payload: e.target.value })}  />{ category.categoryName }
                            </label>
                        )
                    })
                }
                
            </div>

            <div className="ap_filter-products">
                <h4>Products</h4>

                <label htmlFor="ap_filter-newArrivals">
                    <input type="checkbox" id="ap_filter-newArrivals" name="filterByProducts" value="New Arrivals" className="ap_input-field" onClick={(e) => dispatchOfProductsBeingShown({ type: e.target.name, payload: "isNewArrival" })} />New Arrivals
                </label>
                <label htmlFor="ap_filter-discountedProducts">
                    <input type="checkbox" id="ap_filter-discountedProducts" name="filterByProducts" value="Discounted" className="ap_input-field" onClick={(e) => dispatchOfProductsBeingShown({ type: e.target.name, payload: "hasDiscount" })} />Discounted
                </label>
                <label htmlFor="ap_filter-fastDelivery">
                    <input type="checkbox" id="ap_filter-fastDelivery" name="filterByProducts" value="Fast Delivery" className="ap_input-field" onClick={(e) => dispatchOfProductsBeingShown({ type: e.target.name, payload: "hasFastDelivery" })} />Fast Delivery
                </label>
                <label htmlFor="ap_filter-inStock">
                    <input type="checkbox" id="ap_filter-inStock" name="filterByProducts" value="In Stock" className="ap_input-field" onClick={(e) => dispatchOfProductsBeingShown({ type: e.target.name, payload: "isInStock" })} />In Stock
                </label>
                <label htmlFor="ap_filter-inSale">
                    <input type="checkbox" id="ap_filter-inSale" name="filterByProducts" value="In Sale" className="ap_input-field" onClick={(e) => dispatchOfProductsBeingShown({ type: e.target.name, payload: "isInSale" })} />In Sale
                </label>
                <label htmlFor="ap_filter-trending">
                    <input type="checkbox" id="ap_filter-trending" name="filterByProducts" value="Trending" className="ap_input-field" onClick={(e) => dispatchOfProductsBeingShown({ type: e.target.name, payload: "isTrending" })} />Trending
                </label>
            </div>

        </form>
    );
}

export { FilterableForm };
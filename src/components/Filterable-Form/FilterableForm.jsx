import { useFilterData } from "../../contexts";
import {
    filterableFormSortByDiscountArr,
    filterableFormCategoryArr,
    filterableFormSortByRatingArr,
    filterableFormSectionArr,
    filterableFormProductsArr
} from "../../constants/filterableFormConstants";
import {
    CLEAR,
    SORT_BY_PRICE,
    SORT_BY_RATING,
    SORT_BY_DISCOUNT,
    FILTER_BY_PRICE,
    FILTER_BY_SECTION,
    FILTER_BY_CATEGORY,
    FILTER_BY_PRODUCTS
} from "../../constants/filterStateConstants";

const FilterableForm = () => {

    const { stateOfProductsBeingShown, dispatchOfProductsBeingShown } = useFilterData();

    return (
        <form className="ap_filter-section">

            <div className="ap_filter-clear">
                <input
                    type="reset"
                    value={CLEAR}
                    className="ap_clear-all et_p-simple-btn action-color btn b-rad1"
                    onClick={(e) => dispatchOfProductsBeingShown({ type: e.target.value })} />
            </div>

            <div className="ap_sort-by-price">
                <h4>Sort By Price</h4>

                <label htmlFor="ap_sort-lowToHigh">
                    <input
                        type="radio"
                        id="ap_sort-lowToHigh"
                        name={SORT_BY_PRICE}
                        value="Low To High"
                        className="ap_input-field"
                        checked={stateOfProductsBeingShown.sortPriceVal === "Low To High"}
                        onClick={(e) => dispatchOfProductsBeingShown
                            (
                                {
                                    type: e.target.name,
                                    payload: e.target.value
                                }
                            )
                        } />
                    Low To High
                </label>
                <label htmlFor="ap_sort-HighToLow">
                    <input
                        type="radio"
                        id="ap_sort-HighToLow"
                        name={SORT_BY_PRICE}
                        value="High To Low"
                        className="ap_input-field"
                        checked={stateOfProductsBeingShown.sortPriceVal === "High To Low"}
                        onClick={(e) => dispatchOfProductsBeingShown
                            (
                                {
                                    type: e.target.name,
                                    payload: e.target.value
                                }
                            )
                        } />
                    High To Low
                </label>
            </div>

            <div className="ap_sort-by-rating">
                <h4>Sort By Rating</h4>

                {
                    filterableFormSortByRatingArr.map((item, index) =>
                        <label key={index} htmlFor={item._id}>
                            <input
                                type="radio"
                                id={item._id}
                                name={SORT_BY_RATING}
                                value={item.value}
                                className="ap_input-field"
                                checked={stateOfProductsBeingShown.sortRatingVal === item.value}
                                onClick={
                                    (e) =>
                                        dispatchOfProductsBeingShown(
                                            {
                                                type: e.target.name,
                                                payload: e.target.value
                                            }
                                        )
                                } />
                            {item.value}
                        </label>
                    )
                }
            </div>

            <div className="ap_sort-by-discount">
                <h4>Sort By Discount</h4>

                {
                    filterableFormSortByDiscountArr.map((discountSort, index) => {
                        return (
                            <label htmlFor={discountSort.inputId} key={index}>
                                <input
                                    type="radio"
                                    id={discountSort.inputId}
                                    name={SORT_BY_DISCOUNT}
                                    value={discountSort.optionForSortByDiscount}
                                    className="ap_input-field"
                                    checked={stateOfProductsBeingShown.sortDiscountVal === discountSort.optionForSortByDiscount}
                                    onClick={
                                        (e) => dispatchOfProductsBeingShown(
                                            {
                                                type: e.target.name,
                                                payload: e.target.value
                                            }
                                        )
                                    } />
                                {discountSort.optionForSortByDiscount}
                            </label>
                        )
                    })
                }

            </div>

            <div className="ap_filter-price">
                <h4>Price</h4>

                <div className="ap_price-slider">
                    <span>0</span>
                    <input
                        type="range"
                        min="1"
                        max="100000"
                        name={FILTER_BY_PRICE}
                        defaultValue="100000"
                        step="1"
                        className="ap_slider"
                        onClick={
                            (e) => dispatchOfProductsBeingShown(
                                {
                                    type: e.target.name,
                                    payload: e.target.value
                                }
                            )
                        } />
                    <span>100k</span>
                </div>
            </div>

            <div className="ap_filter-section">
                <h4>Section</h4>

                {
                    filterableFormSectionArr.map((item, index) =>
                        <label key={index} htmlFor={item._id}>
                            <input
                                type="checkbox"
                                id={item._id}
                                name={FILTER_BY_SECTION}
                                value={item.value}
                                className="ap_input-field"
                                checked={stateOfProductsBeingShown.filterSectionVal.includes(item.value)}
                                onClick={
                                    (e) => dispatchOfProductsBeingShown(
                                        {
                                            type: e.target.name,
                                            payload: e.target.value
                                        }
                                    )
                                } />
                           {item.value}
                        </label>
                    )
                }
            </div>

            <div className="ap_filter-category">
                <h4>Category</h4>

                {
                    filterableFormCategoryArr.map((category, index) => {
                        return (
                            <label htmlFor={category.inputId} key={index}>
                                <input
                                    type="checkbox"
                                    id={category.inputId}
                                    name={FILTER_BY_CATEGORY}
                                    value={category.categoryName}
                                    className="ap_input-field"
                                    checked={stateOfProductsBeingShown.filterCategoryVal.includes(category.categoryName)}
                                    onClick={
                                        (e) => dispatchOfProductsBeingShown(
                                            {
                                                type: e.target.name,
                                                payload: e.target.value
                                            }
                                        )
                                    } />
                                {category.categoryName}
                            </label>
                        )
                    })
                }

            </div>

            <div className="ap_filter-products">
                <h4>Products</h4>

                {
                    filterableFormProductsArr.map((item, index) =>
                        <label key={index} htmlFor={item._id}>
                            <input
                                type="checkbox"
                                id={item._id}
                                name={FILTER_BY_PRODUCTS}
                                value={item.value}
                                className="ap_input-field"
                                checked={stateOfProductsBeingShown.filterProductsVal.includes(item.payloadValue)}
                                onClick={
                                    (e) => dispatchOfProductsBeingShown(
                                        {
                                            type: e.target.name,
                                            payload: item.payloadValue
                                        }
                                    )
                                } />
                            {item.value}
                        </label>
                    )
                }
            </div>

        </form>
    );
}

export { FilterableForm };
import { useFilterData } from "../../contexts/filterData-context";
import "./filterableForm.css";

const FilterableForm = () => {

   const { dispatch } = useFilterData();

    return (
        <form className="ap_filter-section">

            <div className="ap_filter-clear">
                <input type="reset" value="clear" className="ap_clear-all et_p-simple-btn action-color btn b-rad1" onClick={(e) => dispatch({ type: e.target.value })} />
            </div>

            <div className="ap_sort-by-price">
                <h4>Sort By Price</h4>

                <label htmlFor="ap_sort-lowToHigh">
                    <input type="radio" id="ap_sort-lowToHigh" name="sortByPrice" value="Low To High" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />Low To High
                </label>
                <label htmlFor="ap_sort-HighToLow">
                    <input type="radio" id="ap_sort-HighToLow" name="sortByPrice" value="High To Low" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />High To Low
                </label>
            </div>

            <div className="ap_sort-by-rating">
                <h4>Sort By Rating</h4>

                <label htmlFor="ap_sort-threeStarAndAbove">
                    <input type="radio" id="ap_sort-threeStarAndAbove" name="sortByRating" value="3 star & above" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />3 star & above
                </label>
                <label htmlFor="ap_sort-fourStarAndAbove">
                    <input type="radio" id="ap_sort-fourStarAndAbove" name="sortByRating" value="4 star & above" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />4 star & above
                </label>
                <label htmlFor="ap_sort-fiveStar">
                    <input type="radio" id="ap_sort-fiveStar" name="sortByRating" value="5 star" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />5 star
                </label>
            </div>

            <div className="ap_sort-by-discount">
                <h4>Sort By Discount</h4>

                <label htmlFor="ap_sort-tenPercentAndAbove">
                    <input type="radio" id="ap_sort-tenPercentAndAbove" name="sortByDiscount" value="10% & above" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />10% & above
                </label>
                <label htmlFor="ap_sort-thirtyPercentAndAbove">
                    <input type="radio" id="ap_sort-thirtyPercentAndAbove" name="sortByDiscount" value="30% & above" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />30% & above
                </label>
                <label htmlFor="ap_sort-sixtyPercentAndAbove">
                    <input type="radio" id="ap_sort-sixtyPercentAndAbove" name="sortByDiscount" value="60% & above" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />60% & above
                </label>
                <label htmlFor="ap_sort-eightyPercentAndAbove">
                    <input type="radio" id="ap_sort-eightyPercentAndAbove" name="sortByDiscount" value="80% & above" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />80% & above
                </label>
            </div>

            <div className="ap_filter-price">
                <h4>Price</h4>

                <div className="ap_price-slider">
                    <span>0</span>
                    <input type="range" min="1" max="100000" name="filterByPrice" defaultValue="100000" step="1" className="ap_slider" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />
                    <span>100k</span>
                </div>
            </div>

            <div className="ap_filter-section">
                <h4>Section</h4>

                <label htmlFor="ap_filter-men">
                    <input type="checkbox" id="ap_filter-men" name="filterBySection" value="Men" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />Men
                </label>
                <label htmlFor="ap_filter-women">
                    <input type="checkbox" id="ap_filter-women" name="filterBySection" value="Women" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />Women
                </label>
                <label htmlFor="ap_filter-kids">
                    <input type="checkbox" id="ap_filter-kids" name="filterBySection" value="Kids" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />Kids
                </label>
            </div>

            <div className="ap_filter-category">
                <h4>Category</h4>

                <label htmlFor="ap_filter-bags">
                    <input type="checkbox" id="ap_filter-bags" name="filterByCategory" value="Bags" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />Bags
                </label>
                <label htmlFor="ap_filter-bodycareProducts">
                    <input type="checkbox" id="ap_filter-bodycareProducts" name="filterByCategory" value="Bodycare Products" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />Bodycare Products
                </label>
                <label htmlFor="ap_filter-furniture">
                    <input type="checkbox" id="ap_filter-furniture" name="filterByCategory" value="Furniture" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />Furniture
                </label>
                <label htmlFor="ap_filter-headphones">
                    <input type="checkbox" id="ap_filter-headphones" name="filterByCategory" value="Headphones" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />Headphones
                </label>
                <label htmlFor="ap_filter-jewellery">
                    <input type="checkbox" id="ap_filter-jewellery" name="filterByCategory" value="Jewellery" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />Jewellery
                </label>
                <label htmlFor="ap_filter-kitchenUtensils">
                    <input type="checkbox" id="ap_filter-kitchenUtensils" name="filterByCategory" value="Kitchen utensils" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />Kitchen utensils
                </label>
                <label htmlFor="ap_filter-makeUp">
                    <input type="checkbox" id="ap_filter-makeUp" name="filterByCategory" value="Makeup" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />Makeup
                </label>
                <label htmlFor="ap_filter-masks">
                    <input type="checkbox" id="ap_filter-masks" name="filterByCategory" value="Masks" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />Masks
                </label>
                <label htmlFor="ap_filter-mobiles">
                    <input type="checkbox" id="ap_filter-mobiles" name="filterByCategory" value="Mobiles" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />Mobiles
                </label>
                <label htmlFor="ap_filter-perfumes">
                    <input type="checkbox" id="ap_filter-perfumes" name="filterByCategory" value="Perfumes" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />Perfumes
                </label>
                <label htmlFor="ap_filter-professionals">
                    <input type="checkbox" id="ap_filter-professionals" name="filterByCategory" value="Professionals" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />Professionals
                </label>
                <label htmlFor="ap_filter-saree">
                    <input type="checkbox" id="ap_filter-saree" name="filterByCategory" value="Saree" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />Saree
                </label>
                <label htmlFor="ap_filter-shoes">
                    <input type="checkbox" id="ap_filter-shoes" name="filterByCategory" value="Shoes" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />Shoes
                </label>
                <label htmlFor="ap_filter-watches">
                    <input type="checkbox" id="ap_filter-watches" name="filterByCategory" value="Watches" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />Watches
                </label>
                <label htmlFor="ap_filter-waterBottles">
                    <input type="checkbox" id="ap_filter-waterBottles" name="filterByCategory" value="Water Bottles" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />Water Bottles
                </label>
                <label htmlFor="ap_filter-western">
                    <input type="checkbox" id="ap_filter-western" name="filterByCategory" value="Western" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />Western
                </label>
                <label htmlFor="ap_filter-winter">
                    <input type="checkbox" id="ap_filter-winter" name="filterByCategory" value="Winter" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: e.target.value })} />Winter
                </label>
            </div>

            <div className="ap_filter-products">
                <h4>Products</h4>

                <label htmlFor="ap_filter-newArrivals">
                    <input type="checkbox" id="ap_filter-newArrivals" name="filterByProducts" value="New Arrivals" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: "isNewArrival" })} />New Arrivals
                </label>
                <label htmlFor="ap_filter-discountedProducts">
                    <input type="checkbox" id="ap_filter-discountedProducts" name="filterByProducts" value="Discounted" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: "hasDiscount" })} />Discounted
                </label>
                <label htmlFor="ap_filter-fastDelivery">
                    <input type="checkbox" id="ap_filter-fastDelivery" name="filterByProducts" value="Fast Delivery" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: "hasFastDelivery" })} />Fast Delivery
                </label>
                <label htmlFor="ap_filter-inStock">
                    <input type="checkbox" id="ap_filter-inStock" name="filterByProducts" value="In Stock" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: "isInStock" })} />In Stock
                </label>
                <label htmlFor="ap_filter-inSale">
                    <input type="checkbox" id="ap_filter-inSale" name="filterByProducts" value="In Sale" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: "isInSale" })} />In Sale
                </label>
                <label htmlFor="ap_filter-trending">
                    <input type="checkbox" id="ap_filter-trending" name="filterByProducts" value="Trending" className="ap_input-field" onClick={(e) => dispatch({ type: e.target.name, payload: "isTrending" })} />Trending
                </label>
            </div>

        </form>
    );
}

export { FilterableForm };
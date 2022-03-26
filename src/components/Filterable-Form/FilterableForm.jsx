import "./filterableForm.css";

const FilterableForm = () => {
    return (
        <form className="ap_filter-section">

            <div className="ap_filter-clear">
                <input type="reset" value="clear" className="ap_clear-all et_p-simple-btn action-color btn b-rad1" />
            </div>

            <div className="ap_sort-by-price">
                <h4>Sort By Price</h4>

                <label htmlFor="ap_sort-lowToHigh">
                    <input type="radio" id="ap_sort-lowToHigh" name="sortByPrice" value="Low To High" className="ap_input-field" />Low To High
                </label>
                <label htmlFor="ap_sort-HighToLow">
                    <input type="radio" id="ap_sort-HighToLow" name="sortByPrice" value="High To Low" className="ap_input-field" />High To Low
                </label>
            </div>

            <div className="ap_sort-by-rating">
                <h4>Sort By Rating</h4>

                <label htmlFor="ap_sort-threeStarAndAbove">
                    <input type="radio" id="ap_sort-threeStarAndAbove" name="sortByRating" value="3 star & above" className="ap_input-field" />3 star & above
                </label>
                <label htmlFor="ap_sort-fourStarAndAbove">
                    <input type="radio" id="ap_sort-fourStarAndAbove" name="sortByRating" value="4 star & above" className="ap_input-field" />4 star & above
                </label>
                <label htmlFor="ap_sort-fiveStar">
                    <input type="radio" id="ap_sort-fiveStar" name="sortByRating" value="5 star" className="ap_input-field" />5 star
                </label>
            </div>

            <div className="ap_sort-by-discount">
                <h4>Sort By Discount</h4>

                <label htmlFor="ap_sort-tenPercentAndAbove">
                    <input type="radio" id="ap_sort-tenPercentAndAbove" name="sortByDiscount" value="10% & above" className="ap_input-field" />10% & above
                </label>
                <label htmlFor="ap_sort-thirtyPercentAndAbove">
                    <input type="radio" id="ap_sort-thirtyPercentAndAbove" name="sortByDiscount" value="30% & above" className="ap_input-field" />30% & above
                </label>
                <label htmlFor="ap_sort-sixtyPercentAndAbove">
                    <input type="radio" id="ap_sort-sixtyPercentAndAbove" name="sortByDiscount" value="60% & above" className="ap_input-field" />60% & above
                </label>
                <label htmlFor="ap_sort-eightyPercentAndAbove">
                    <input type="radio" id="ap_sort-eightyPercentAndAbove" name="sortByDiscount" value="80% & above" className="ap_input-field" />80% & above
                </label>
            </div>

            <div className="ap_filter-price">
                <h4>Price</h4>

                <div className="ap_price-slider">
                    <span>0</span>
                    <input type="range" min="1" max="100000" defaultValue="500" step="1" className="ap_slider" />
                    <span>100k</span>
                </div>
            </div>

            <div className="ap_filter-section">
                <h4>Section</h4>

                <label htmlFor="ap_filter-men">
                    <input type="checkbox" id="ap_filter-men" value="Men" className="ap_input-field" />Men
                </label>
                <label htmlFor="ap_filter-women">
                    <input type="checkbox" id="ap_filter-women" value="Women" className="ap_input-field" />Women
                </label>
                <label htmlFor="ap_filter-kids">
                    <input type="checkbox" id="ap_filter-kids" value="Kids" className="ap_input-field" />Kids
                </label>
            </div>

            <div className="ap_filter-category">
                <h4>Category</h4>

                <label htmlFor="ap_filter-bags">
                    <input type="checkbox" id="ap_filter-bags" value="Bags" className="ap_input-field" />Bags
                </label>
                <label htmlFor="ap_filter-bodycareProducts">
                    <input type="checkbox" id="ap_filter-bodycareProducts" value="Bodycare Products" className="ap_input-field" />Bodycare Products
                </label>
                <label htmlFor="ap_filter-furniture">
                    <input type="checkbox" id="ap_filter-furniture" value="Furniture" className="ap_input-field" />Furniture
                </label>
                <label htmlFor="ap_filter-headphones">
                    <input type="checkbox" id="ap_filter-headphones" value="Headphones" className="ap_input-field" />Headphones
                </label>
                <label htmlFor="ap_filter-jewellery">
                    <input type="checkbox" id="ap_filter-jewellery" value="Jewellery" className="ap_input-field" />Jewellery
                </label>
                <label htmlFor="ap_filter-kitchenUtensils">
                    <input type="checkbox" id="ap_filter-kitchenUtensils" value="Kitchen utensils" className="ap_input-field" />Kitchen utensils
                </label>
                <label htmlFor="ap_filter-makeUp">
                    <input type="checkbox" id="ap_filter-makeUp" value="Makeup" className="ap_input-field" />Makeup
                </label>
                <label htmlFor="ap_filter-masks">
                    <input type="checkbox" id="ap_filter-masks" value="Masks" className="ap_input-field" />Masks
                </label>
                <label htmlFor="ap_filter-mobiles">
                    <input type="checkbox" id="ap_filter-mobiles" value="Mobiles" className="ap_input-field" />Mobiles
                </label>
                <label htmlFor="ap_filter-perfumes">
                    <input type="checkbox" id="ap_filter-perfumes" value="Perfumes" className="ap_input-field" />Perfumes
                </label>
                <label htmlFor="ap_filter-professionals">
                    <input type="checkbox" id="ap_filter-professionals" value="Professionals" className="ap_input-field" />Professionals
                </label>
                <label htmlFor="ap_filter-saree">
                    <input type="checkbox" id="ap_filter-saree" value="Saree" className="ap_input-field" />Saree
                </label>
                <label htmlFor="ap_filter-shoes">
                    <input type="checkbox" id="ap_filter-shoes" value="Shoes" className="ap_input-field" />Shoes
                </label>
                <label htmlFor="ap_filter-watches">
                    <input type="checkbox" id="ap_filter-watches" value="Watches" className="ap_input-field" />Watches
                </label>
                <label htmlFor="ap_filter-waterBottles">
                    <input type="checkbox" id="ap_filter-waterBottles" value="Water Bottles" className="ap_input-field" />Water Bottles
                </label>
                <label htmlFor="ap_filter-western">
                    <input type="checkbox" id="ap_filter-western" value="Western" className="ap_input-field" />Western
                </label>
                <label htmlFor="ap_filter-winter">
                    <input type="checkbox" id="ap_filter-winter" value="Winter" className="ap_input-field" />Winter
                </label>
            </div>

            <div className="ap_filter-products">
                <h4>Products</h4>

                <label htmlFor="ap_filter-newArrivals">
                    <input type="checkbox" id="ap_filter-newArrivals" value="New Arrivals" className="ap_input-field" />New Arrivals
                </label>
                <label htmlFor="ap_filter-discountedProducts">
                    <input type="checkbox" id="ap_filter-discountedProducts" value="Discounted" className="ap_input-field" />Discounted
                </label>
                <label htmlFor="ap_filter-fastDelivery">
                    <input type="checkbox" id="ap_filter-fastDelivery" value="Fast Delivery" className="ap_input-field" />Fast Delivery
                </label>
                <label htmlFor="ap_filter-inStock">
                    <input type="checkbox" id="ap_filter-inStock" value="In Stock" className="ap_input-field" />In Stock
                </label>
                <label htmlFor="ap_filter-inSale">
                    <input type="checkbox" id="ap_filter-inSale" value="In Sale" className="ap_input-field" />In Sale
                </label>
                <label htmlFor="ap_filter-trending">
                    <input type="checkbox" id="ap_filter-trending" value="Trending" className="ap_input-field" />Trending
                </label>
            </div>

        </form>
    );
}

export { FilterableForm };
import "./productCard.css";
import { VscHeart } from "../../utils/icons";
import { useFilterData } from "../../contexts/filterData-context";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getProductClass, getOriginalPrice } from "../../utils/productutilFuncs";
import { useWishlist } from "../../contexts/wishlist-context";
import { useCart } from "../../contexts/cart-context";
import { useProductsGridClass } from "../../contexts/productsGridClass-context";

const ProductCard = () => {

    const location = useLocation();

    const category = location?.state?.category

    const newArrivalCategory = location?.state?.isNewArrival

    const discountedProducts = location?.state?.hasDiscount

    const productOnSale = location?.state?.onSale

    const { dipatchOfWishlist, getLikeButtonStyle } = useWishlist();

    const { stateOfCart, dispatchOfCart } = useCart();

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
        <div className={ productsGridClass }>
            {
                filteredProductList.map((product, index) => {
                    return (
                        <div className="ap_product-card" key={index}>
                            <VscHeart
                                className="ap_product-wishlist-icon"
                                onClick={() => dipatchOfWishlist({ type: "ADD_TO_WISHLIST", payload: product })}
                                style={{ color: getLikeButtonStyle(product) }} />
                            <div className="ap_product-card-subcontainer1">
                                <div className="ap_product-description">
                                    <div className="ap_product-title fw-4 a-tl">
                                        {product.brandName}
                                        {product.isNewArrival ? <span className="ap_product-new-arrival-badge b-rad3">New</span> : ""}
                                        {product.isTrending ? <span className="ap_product-trending-badge b-rad3">Trending</span> : ""}
                                        {!product.isInStock ? <span className="ap_product-stock-out-badge b-rad3">Stock Out</span> : ""}
                                    </div>
                                    <div className="ap_product-subtitle a-tl">
                                        {product.description}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="ap_product-card-subcontainer2"
                                style={{ backgroundImage: `url(${product.img[0]})`, backgroundPosition: "center", backgroundSize: "cover", opacity: !product.isInStock? "0.4" : "1" }}>
                            </div>
                            <div className="ap_product-card-subcontainer3">
                                <div className="ap_product-details">
                                    <div className="ap_product-price-details a-tl">
                                        <div className="ap_product-original-price">
                                            {getOriginalPrice(product)}
                                        </div>
                                        <div className="ap_product-discounted-price fw-3">
                                            {`₹${product.discountedPrice}`}
                                        </div>
                                    </div>
                                    <div className="ap_product-discount a-tl fw-3">
                                        {product.discount === "" ? "" : `${product.discount}%`}
                                    </div>
                                </div>
                                <button
                                    className="ap_product-card-action-btn b-rad3"
                                    style={stateOfCart.some(item => item._id === product._id) ? { backgroundColor: "var(--action)", color: "var(--white-color)" } : { backgroundColor: "var(--white-color)", color: "var(--action)" }}
                                    disabled={!product.isInStock}
                                    onClick={() => dispatchOfCart({ type: "ADD_TO_CART", payload: product })}>
                                        {stateOfCart.some(item => item._id === product._id) ? "Added" : "Add To Cart"}
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export { ProductCard, getProductClass, getOriginalPrice };
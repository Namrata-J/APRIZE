import React from "react";
import { VscHeart } from "../../utils/icons";
import { useNavigate } from "react-router-dom";
import { ADD_TO_CART } from "../../constants/cartConstants";
import { useCart, useWishlist, useAuth } from "../../contexts";
import { getOriginalPrice } from "../../utils/productutilFuncs";
import { ADD_TO_WISHLIST } from "../../constants/wishlistConstants";

const ProductCard = (product) => {

    const { dipatchOfWishlist, getLikeButtonStyle } = useWishlist();
    const { stateOfCart, dispatchOfCart } = useCart();
    const { isUserLoggedIn } = useAuth();
    const navigate = useNavigate();

    return (
        <div
            className="ap_product-card"
            onClick={() => navigate(`/ProductDetails/${product._id}`)} >
            <VscHeart
                className="ap_product-wishlist-icon"
                onClick={
                    (e) => {
                        if (isUserLoggedIn) {
                            dipatchOfWishlist(
                                {
                                    type: ADD_TO_WISHLIST,
                                    payload: product
                                }
                            )
                            e.stopPropagation()
                        }
                    }}
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
                style={{
                    backgroundImage: `url(${product.img[0]})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    opacity: !product.isInStock ? "0.4" : "1"
                }}>
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
                    style={
                        stateOfCart.some(item => item._id === product._id) ?
                            { backgroundColor: "var(--action)", color: "var(--white-color)" } :
                            { backgroundColor: "var(--white-color)", color: "var(--action)" }
                    }
                    disabled={!product.isInStock}
                    onClick={
                        (e) => {
                            if (isUserLoggedIn) {
                                dispatchOfCart({ type: ADD_TO_CART, payload: product })
                                e.stopPropagation()
                            }
                        }}>
                    {stateOfCart.some(item => item._id === product._id) ? "Added" : "Add To Cart"}
                </button>
            </div>
        </div>
    )
}

export { ProductCard };
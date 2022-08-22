import React from "react";
import { Carousel } from "../";
import "./singleProductDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { ADD_TO_CART } from "../../constants/cartConstants";
import { getOriginalPrice } from "../../utils/productutilFuncs";
import { ADD_TO_WISHLIST } from "../../constants/wishlistConstants";
import { useCart, useProductsDetail, useWishlist } from "../../contexts";

const SingleProductDetails = () => {

    const { productId } = useParams();
    const navigate = useNavigate();
    const { productsDataFetchedFromApi: productsData } = useProductsDetail();
    const { stateOfWishlist, dipatchOfWishlist } = useWishlist();
    const { stateOfCart, dispatchOfCart } = useCart();

    const getTheProductDetails = (productsData, productId) => {
        return productsData.find(product => product._id === productId)
    }

    const singleProduct = getTheProductDetails(productsData, productId)

    return (
        <div>
            {
                singleProduct !== undefined? <div className="ap_single-product-detail-component">
                <div className="ap_single-product-container">
                    <div className="ap_singleProduct-carousel-container">
                        <Carousel>
                            {
                                singleProduct.img.map((productImg, index) => (
                                    <div className="ap_single-product-img" key={index}>
                                        <img src={productImg} />
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>
                    <div className="ap_singleProduct-details-container a-tl">
                        <h3 className="ap_singleProduct-title">{singleProduct.brandName}</h3>
                        <p className="ap_singleProduct-description">{singleProduct.description}</p>
                        {singleProduct.isNewArrival && <div className="ap_singleProduct-is-newArrival">New Arrival</div>}
                        {singleProduct.isTrending && <div className="ap_singleProduct-is-trending">Trending</div>}
                        {!singleProduct.isInStock && <div className="ap_singleProduct-is-stockOut">Stock Out</div>}
                        <p className="ap_singleProduct-info">Rating: <span>{singleProduct.rating}⭐</span></p>
                        <p className="ap_singleProduct-info">Availability: <span>{singleProduct.isInStock ? "In Stock" : "Out Of Stock"}</span></p>
                        <p className="ap_singleProduct-info">Original Price: <span>₹{getOriginalPrice(singleProduct)}</span></p>
                        <p className="ap_singleProduct-info singleProduct-discountedPrice">Discounted Price: <span>₹{singleProduct.discountedPrice}</span></p>
                        <p className="ap_singleProduct-info">Delivered Within: <span>{singleProduct.hasFastDelivery ? "Within 3-4 days" : "Within 7-10 days"}</span></p>
                        <p className="ap_singleProduct-info">For: <span>{singleProduct.isInSection.join(", ")}</span></p>
                        <p className="ap_singleProduct-info singleProduct-discount">Discount: <span>{singleProduct.discount === "" ? "No discount" : `${singleProduct.discount}%`}</span></p>
                        <div className="ap_singleProduct-action-btns">
                            <button
                                className="ap_singleProduct-action-btn"
                                onClick={() => dispatchOfCart({ type: ADD_TO_CART, payload: singleProduct })}
                                disabled={!singleProduct.isInStock} >
                                {stateOfCart.some(item => item._id === singleProduct._id) ? "Added" : "Add To Cart"}
                            </button>
                            <button
                                className="ap_singleProduct-action-btn"
                                onClick={() => dipatchOfWishlist({ type: ADD_TO_WISHLIST, payload: singleProduct })}>
                                {stateOfWishlist.some(item => item._id === singleProduct._id) ? "Wishlisted" : "Add To Wishlist"}
                            </button>
                        </div>
                    </div>
                </div>
                </div> : <div className="ap_singleProductListing-to-productListingPage-btn">
                    <p>Looks like something went wrong</p>
                    <button className="ap_go-back-btn" onClick={() => navigate("/Productlisting")}>Go Back</button>
                </div>
            }
        </div>
    )
}

export { SingleProductDetails };
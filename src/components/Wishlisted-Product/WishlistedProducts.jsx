import "./wishlistedProduct.css";
import { Link } from "react-router-dom";
import { FaRegHeart } from "../../utils/icons";
import { useCart, useWishlist } from "../../contexts";
import { getProductClass, getOriginalPrice } from "../../utils/productutilFuncs";

const WishlistProduct = () => {

    const { stateOfWishlist: wishlistedProductsToBeShown, dipatchOfWishlist } = useWishlist();
    const { dispatchOfCart } = useCart();

    return (
        <div className="ap_all-wishlisted-products">
            <h3 className="ap_wislist-main-section-heading a-tc">My wishList</h3>

            <div className="ap_wislisted-products-container">
                {
                    wishlistedProductsToBeShown.length === 0 ?
                        <div className="ap_empty-wishlist-img-container">
                            <img className="ap_empty-wishlist-img" src="https://media.istockphoto.com/vectors/empty-shopping-bag-icon-online-business-vector-icon-template-vector-id861576608?k=20&m=861576608&s=612x612&w=0&h=UgHaPYlYrsPTO6BKKTzizGQqFgqEnn7eYK9EOA16uDs=" />
                            <button className="et_p-simple-btn action-color btn">
                                <Link to="/Productlisting" className="ap_shop-Now-link">Add Now</Link>
                            </button>
                        </div> : wishlistedProductsToBeShown.map((wishlistedProduct, index) => {
                            return (
                                <div className={getProductClass(wishlistedProduct)} key={index}>
                                    <div className="badge-type1 fw-4">New</div>
                                    {wishlistedProduct.isNewArrival ? <div className="badge-type1 fw-4">New</div> : ""}
                                    {!wishlistedProduct.isInStock ? <div className="badge-type3">Stock Out</div> : ""}
                                    <i className="ap_wishlisted-product-icon"><FaRegHeart /></i>

                                    <div className="card-w-badge-subcontainer1" style={{ backgroundImage: `url(${wishlistedProduct.img[0]})`, backgroundPosition: "center" }}>
                                    </div>
                                    <div className="card-w-badge-subcontainer2">
                                        <div className="product-description">
                                            <div className="card-title fw-4 a-tl">{wishlistedProduct.brandName}</div>
                                            <div className="card-subtitle a-tl">{wishlistedProduct.description}</div>
                                        </div>
                                        <div className="card-product-price fw-3">
                                            <div className="ap_card-pp a-tl">
                                                <span className="p-mrp fw-1 a-tl">{getOriginalPrice(wishlistedProduct)}</span>
                                                <span className="p-discounted-price a-tl">{`₹${wishlistedProduct.discountedPrice}`}</span>
                                            </div>
                                            <div className="p-dicount a-tl">{wishlistedProduct.discount === "" ? "" : `${wishlistedProduct.discount}%`}</div>
                                        </div>
                                    </div>
                                    <div className="card-w-badge-subcontainer3">
                                        <button className="et_p-simple-btn action-color btn" disabled={!wishlistedProduct.isInStock} onClick={() => { dispatchOfCart({ type: "MOVE_TO_CART", payload: wishlistedProduct }); dipatchOfWishlist({ type: "REMOVE_FROM_WISHLIST", payload: wishlistedProduct }) }} >Move To Cart</button>
                                        <button className="et_so-btn action-color btn" onClick={() => dipatchOfWishlist({ type: "REMOVE_FROM_WISHLIST", payload: wishlistedProduct })}>Remove</button>
                                    </div>
                                </div>
                            );
                        })
                }
            </div>
        </div>
    );
}

export { WishlistProduct };


import "./productsInCart.css";
import { Link } from "react-router-dom";
import { getOriginalPrice } from "../../utils/productutilFuncs";
import { useWishlist } from "../../contexts/wishlist-context";
import { useCart } from "../../contexts/cart-context";

const ProductsInCart = () => {

    const { dipatchOfWishlist } = useWishlist();
    const { stateOfCart:itemsInCart, dispatchOfCart, priceDetailsObj } = useCart();

    return (
        <div className="ap_all-addedToCart-products">
            <h3 className="ap_productsInCart-main-section-heading a-tc">My Cart</h3>
            <div className="ap_addedToCart-products-section">

                <div className="ap_addedToCart-products-container">

                    {
                        itemsInCart.length === 0 ?
                            <div className="ap_empty-cart-img-container">
                                <img className="ap_empty-cart-img" src="https://media.istockphoto.com/vectors/empty-shopping-bag-icon-online-business-vector-icon-template-vector-id861576608?k=20&m=861576608&s=612x612&w=0&h=UgHaPYlYrsPTO6BKKTzizGQqFgqEnn7eYK9EOA16uDs=" />
                                <button className="et_p-simple-btn action-color btn">
                                    <Link to="/Productlisting" className="ap_shop-Now-link">Buy Now</Link>
                                </button>
                            </div> : itemsInCart.map((cartProduct, index) => {
                                return (
                                    <div className="ap_myCart-product" key={ index }>
                                        <div className="ap_myCart-product-container1">
                                            <div className="ap_myCart-product-subContainer11">
                                                <img src={ cartProduct.img } alt="product image" />
                                            </div>
                                            <div className="ap_myCart-product-subContainer12">
                                                <div className="ap_myCart-product-brandName fw-4 a-tl">{ cartProduct.brandName }</div>
                                                <div className="ap_myCart-product-description a-tl">{ cartProduct.description }</div>
                                            </div>
                                        </div>
                                        <div className="ap_myCart-product-action-btns-section">
                                            <div className="ap_myCart-product-prize-info">
                                                <div className="ap_myCart-product-discountedPrice fw-4">{`₹${ cartProduct.discountedPrice }`}</div>
                                                <div className="ap_myCart-product-originalPrice">{ getOriginalPrice(cartProduct) }</div>
                                            </div>
                                            <div className="ap_myCart-product-discount fw-4 a-tl">{ cartProduct.discount==="" ? "No discount" : `${ cartProduct.discount }% off` }</div>
                                            <div className="ap_myCart-product-quantity-details">
                                                <div className="ap_myCart-product-quantity-heading a-tl">Quantity:</div>
                                                <div className="ap_myCart-product-quantity-controls a-tl">
                                                    <div className="ap_quantity-increment-btn quantity-control control-display-btn" onClick={() => dispatchOfCart({ type: "INCREASE_QUANTITY", payload: cartProduct })}>+</div>
                                                    <div className="ap_quantity-display quantity-control">{ cartProduct.qt }</div>
                                                    <div className="ap_quantity-decrement-btn quantity-control control-display-btn" onClick={() => dispatchOfCart({ type: "DECREASE_QUANTITY", payload: cartProduct })}>-</div>
                                                </div>
                                            </div>
                                            <div className="ap_myCart-product-action-btns">
                                                <button className="et_p-simple-btn action-color btn" onClick={() => {dipatchOfWishlist({ type: "MOVE_TO_WISHLIST_FROM_CART", payload: cartProduct }); dispatchOfCart({ type: "REMOVE_FROM_CART", payload: cartProduct })}} >Move To Wishlist</button>
                                                <button className="et_so-btn action-color btn" onClick={() => dispatchOfCart({ type: "REMOVE_FROM_CART", payload: cartProduct })} >Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                    }

                </div>

                {
                    itemsInCart.length > 0 ?
                        <div className="ap_addedToCart-products-priceDetails-container">
                            <div className="ap_products-priceDetails-card">
                                <div className="ap_pricedetails-card-subContainer1 priceDetails-subContainer-borderBtm a-tl">
                                    <h4>Price Details</h4>
                                </div>
                                <div className="ap_pricedetails-card-subContainer2 priceDetails-subContainer-borderBtm priceDetails-card-subcontainer">
                                    <div className="ap_product-priceDetail">
                                        <div className="ap_addedToCart-products-original-price-title">Price({ itemsInCart.length } items)</div>
                                        <div className="ap_addedToCart-products-original-price">₹{ priceDetailsObj.totalOriginalPrice }</div>
                                    </div>
                                    <div className="ap_product-priceDetail">
                                        <div className="ap_addedToCart-products-discount-deduction-title">Discount</div>
                                        <div className="ap_addedToCart-products-discount-deduction">-₹{ priceDetailsObj.totalOriginalPrice - priceDetailsObj.totalDiscountedPrice }</div>
                                    </div>
                                    <div className="ap_product-priceDetail">
                                        <div className="ap_delivery-charges-title">Delivery charges</div>
                                        <div className="ap_delivery-charges">₹10</div>
                                    </div>
                                </div>
                                <div className="ap_pricedetails-card-subContainer3 priceDetails-subContainer-borderBtm priceDetails-card-subcontainer">
                                    <div className="ap_product-priceDetail">
                                        <div className="ap_addedToCart-products-total-amount-title">Total amount</div>
                                        <div className="ap_addedToCart-products-total-amount">₹{ (priceDetailsObj.totalDiscountedPrice) + 10 }</div>
                                    </div>
                                </div>
                                <div className="ap_pricedetails-card-subContainer4 priceDetails-card-subcontainer">
                                    <div className="ap_addedToCart-products-saved-amount">You will save ₹{ (priceDetailsObj.totalOriginalPrice - priceDetailsObj.totalDiscountedPrice) - 10 } on this order</div>
                                    <button className="et_p-simple-btn action-color btn" >Place Order</button>
                                </div>
                            </div>
                        </div> : ""
                }

            </div>
        </div>
    );
}

export { ProductsInCart };
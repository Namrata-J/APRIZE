import React from "react";
import "./cart.css";
import { useCart } from "../../contexts/";
import { VscChromeClose } from "../../utils/icons";
import { Header, ProductsInCart, Footer } from "../../components";
import { availableCoupons } from "../../constants/availableCoupons";
import { getTheFinalCouponAppliedAmount } from "../../utils/couponUtilFunc";

const CartPage = () => {

    const {
        appliedCoupon,
        priceDetailsObj,
        isCouponInvalid,
        setAppliedCoupon,
        setIsCouponInvalid,
        showCouponsPopUpContainer,
        setShowCouponsPopUpContainer } = useCart();

    return (
        <div className="ap_cart-page">
            <div className="ap_cart-header-section">
                <Header />
            </div>
            <div className="ap_cart-main-section">
                <ProductsInCart />
                <Footer />
            </div>
            {
                showCouponsPopUpContainer &&
                <div className="ap_popUp-coupons-outer-container">
                    <div className="ap_popUp-coupons-main-container b-rad1">
                        <VscChromeClose
                            className="ap_popUp-coupons-close-icon"
                            onClick={() => setShowCouponsPopUpContainer(false)} />
                        <p className="fw-4">APRIZE Available coupons</p>
                        <div>
                            {
                                availableCoupons.map(
                                    (availableCoupon, index) =>
                                        <label
                                            htmlFor={availableCoupon.id}
                                            key={index}>
                                            <input
                                                type="radio"
                                                id={availableCoupon.id}
                                                className="ap_available-coupon"
                                                name="coupon"
                                                value={availableCoupon.coupon}
                                                onChange={
                                                    () => {
                                                        setAppliedCoupon(availableCoupon.id),
                                                            setIsCouponInvalid(false)
                                                    }
                                                } />
                                            {`${availableCoupon.coupon} (${availableCoupon.description})`}
                                        </label>
                                )
                            }
                        </div>
                        {
                            isCouponInvalid && <p className="ap_invalid-coupon">Invalid Coupon!!!</p>
                        }
                        <button
                            className="et_p-simple-btn action-color btn"
                            onClick={
                                () => getTheFinalCouponAppliedAmount(
                                    appliedCoupon,
                                    (priceDetailsObj.totalDiscountedPrice) + 10) === 0 ?
                                    setIsCouponInvalid(true) :
                                    (
                                        getTheFinalCouponAppliedAmount(
                                            appliedCoupon,
                                            (priceDetailsObj.totalDiscountedPrice) + 10)
                                        ,
                                        setShowCouponsPopUpContainer(false)
                                    )
                            } >
                            Apply Coupon
                        </button>
                    </div>
                </div>
            }
        </div>
    );
}

export { CartPage };
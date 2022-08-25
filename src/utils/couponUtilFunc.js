import { availableCoupons } from "../constants/availableCoupons";

export const getTheFinalCouponAppliedAmount = (couponId, amount) => {
    const findCoupon = availableCoupons.find(
        availableCoupon => availableCoupon.id === couponId);

    return findCoupon ?
        amount >= findCoupon?.mandatoryQuantityForCoupon ?
            amount - findCoupon?.discountApplied : 0 : 0
}
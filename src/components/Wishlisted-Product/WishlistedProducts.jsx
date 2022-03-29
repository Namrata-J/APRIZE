import "./wishlistedProduct.css";
import { FaRegHeart } from 'react-icons/fa';

const WishlistProduct = () => {
    return (
        <div className="ap_all-wishlisted-products">
            <h3 className="ap_wislist-main-section-heading a-tc">My wishList</h3>
            <div className="ap_wislisted-products-container">

                <div className="card-w-badge-type1 card-w-badge b-rad1">
                    <div className="badge-type1 fw-4">New</div>
                    <i className="ap_wishlisted-product-icon"><FaRegHeart /></i>

                    <div className="card-w-badge-subcontainer1">
                    </div>
                    <div className="card-w-badge-subcontainer2">
                        <div className="product-description">
                            <div className="card-title fw-4 a-tl">Nike</div>
                            <div className="card-subtitle a-tl">Comfortable shoes for men</div>
                        </div>
                        <div className="card-product-price fw-3">
                            <div className="ap_card-pp a-tl">
                                <span className="p-mrp fw-1 a-tl">1000</span>
                                <span className="p-discounted-price a-tl">₹900</span>
                            </div>
                            <div className="p-dicount a-tl">90% off</div>
                        </div>
                    </div>
                    <div className="card-w-badge-subcontainer3">
                        <button className="et_p-simple-btn action-color btn">Add To Cart</button>
                        <button className="et_so-btn action-color btn">Remove</button>
                    </div>
                </div>

                <div className="card-w-badge-type2 card-w-badge b-rad1">
                    <i className="ap_wishlisted-product-icon"><FaRegHeart /></i>

                    <div className="card-w-badge-subcontainer1">
                    </div>
                    <div className="card-w-badge-subcontainer2">
                        <div className="product-description">
                            <div className="card-title fw-4 a-tl">Nike</div>
                            <div className="card-subtitle a-tl">Comfortable shoes for men</div>
                        </div>
                        <div className="card-product-price fw-3">
                            <div className="ap_card-pp a-tl">
                                <span className="p-mrp fw-1 a-tl">1000</span>
                                <span className="p-discounted-price a-tl">₹900</span>
                            </div>
                            <div className="p-dicount a-tl">90% off</div>
                        </div>
                    </div>
                    <div className="card-w-badge-subcontainer3">
                        <button className="et_p-simple-btn action-color btn">Add To Cart</button>
                        <button className="et_so-btn action-color btn">Remove</button>
                    </div>
                </div>

                <div class="card-w-badge-type3 card-w-badge b-rad1">
                    <div class="badge-type3">Stock Out</div>
                    <i className="ap_wishlisted-product-icon"><FaRegHeart /></i>

                    <div class="card-w-badge-subcontainer1">
                    </div>
                    <div class="card-w-badge-subcontainer2">
                        <div class="product-description">
                            <div class="card-title fw-4 a-tl">Nike</div>
                            <div class="card-subtitle a-tl">Comfortable shoes for men</div>
                        </div>
                        <div class="card-product-price fw-3">
                            <div className="ap_card-pp a-tl">
                                <span class="p-mrp fw-1 a-tl">1000</span>
                                <span class="p-discounted-price a-tl">₹900</span>
                            </div>
                            <div class="p-dicount a-tl">90% off</div>
                        </div>
                    </div>
                    <div class="card-w-badge-subcontainer3">
                        <button class="et_p-simple-btn action-color btn" disabled>Add To Cart</button>
                        <button class="et_so-btn action-color btn" disabled>Remove</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export { WishlistProduct };
import "./productCard.css";
import { FaRegHeart } from 'react-icons/fa';
import { useProductsDetail } from "../../contexts/productsDetail-context";

const ProductCard = () => {

    const { products } = useProductsDetail();

    const getProductClass = (product) => {
        if (product.isNewArrival) {
            if (product.isNewArrival && !product.isInStock) {
                return "card-w-badge-type1 card-w-badge-type3 card-w-badge b-rad1"
            } else {
                return "card-w-badge-type1 card-w-badge b-rad1"
            }
        } else {
            if (product.isTrending) {
                if (product.isTrending && !product.isInStock) {
                    return "card-w-badge-type2 card-w-badge-type3 card-w-badge b-rad1"
                } else {
                    return "card-w-badge-type2 card-w-badge b-rad1"
                }
            } else {
                if (product.isInStock) {
                    return "card-w-badge-type1 card-w-badge b-rad1"
                } else {
                    return "card-w-badge-type3 card-w-badge b-rad1"
                }
            }
        }
    }

    const getOriginalPrice = (product) => {
        const originalPrice = parseInt((product.discountedPrice * 100)/(100 - product.discount))
        return originalPrice
    } 

    return (
        <div className="ap_all-products">
            {
                products.map((product, index) => {
                    return (
                        <div className={getProductClass(product)} key={index}>
                            { product.isNewArrival ? <div className="badge-type1 fw-4">New</div> : "" }
                            { !product.isInStock ? <div class="badge-type3">Stock Out</div> : "" }
                            <i className="far fa-heart"><FaRegHeart /></i>

                            <div className="card-w-badge-subcontainer1" style= {{ backgroundImage: `url(${ product.img })`}}>
                            </div>
                            <div className="card-w-badge-subcontainer2">
                                <div className="product-description">
                                    <div className="card-title fw-4 a-tl">{ product.brandName }</div>
                                    <div className="card-subtitle a-tl">{ product.description }</div>
                                </div>
                                <div className="card-product-price fw-3">
                                    <div className="ap_card-pp a-tl">
                                        <span className="p-mrp fw-1 a-tl">{ getOriginalPrice(product) }</span>
                                        <span className="p-discounted-price a-tl">{`₹${ product.discountedPrice }`}</span>
                                    </div>
                                    <div className="p-dicount a-tl">{ product.discount==="" ? "" : `${ product.discount }%` }</div>
                                </div>
                            </div>
                            <div className="card-w-badge-subcontainer3">
                                <button className="et_p-simple-btn action-color btn" disabled = { !product.isInStock } >Add To Cart</button>
                                <button className="et_so-btn action-color btn" disabled = { !product.isInStock } >Buy Now</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export { ProductCard };

{/* <div className="card-w-badge-type1 card-w-badge b-rad1">
                <div className="badge-type1 fw-4">New</div>
                <i className="far fa-heart"><FaRegHeart /></i>

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
                    <button className="et_so-btn action-color btn">Buy Now</button>
                </div>
            </div>
            <div className="card-w-badge-type2 card-w-badge b-rad1">
                <i className="far fa-heart"><FaRegHeart /></i>

                <div className="card-w-badge-subcontainer1">
                </div>
                <div className="card-w-badge-subcontainer2">
                    <div className="product-description">
                        <div className="card-title fw-4 a-tl">Nike</div>
                        <div className="card-subtitle a-tl">Comfortable shoes for men</div>
                    </div>
                    <div className="card-product-price fw-3">
                        <div className="ap_card-pp a-tl">
                            <span className="p-mrp fw-1">1000</span>
                            <span className="p-discounted-price">₹900</span>
                        </div>
                        <div className="p-dicount">90% off</div>
                    </div>
                </div>
                <div className="card-w-badge-subcontainer3">
                    <button className="et_p-simple-btn action-color btn">Add To Cart</button>
                    <button className="et_so-btn action-color btn">Buy Now</button>
                </div>
            </div>
            <div class="card-w-badge-type3 card-w-badge b-rad1">
                <div class="badge-type3">Stock Out</div>
                <i class="far fa-heart"><FaRegHeart /></i>

                <div class="card-w-badge-subcontainer1">
                </div>
                <div class="card-w-badge-subcontainer2">
                    <div class="product-description">
                        <div class="card-title fw-4 a-tl">Nike</div>
                        <div class="card-subtitle a-tl">Comfortable shoes for men</div>
                    </div>
                    <div class="card-product-price fw-3">
                        <div className="ap_card-pp a-tl">
                            <span class="p-mrp fw-1">1000</span>
                            <span class="p-discounted-price">₹900</span>
                        </div>
                        <div class="p-dicount">90% off</div>
                    </div>
                </div>
                <div class="card-w-badge-subcontainer3">
                    <button className="et_p-simple-btn action-color btn" disabled>Add To Cart</button>
                    <button class="et_so-btn action-color btn" disabled>Buy Now</button>
                </div>
            </div> */}
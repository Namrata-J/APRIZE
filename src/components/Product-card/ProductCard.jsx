import "./productCard.css";
import { FaRegHeart } from 'react-icons/fa';
import { useFilterData } from "../../contexts/filterData-context";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ProductCard = () => {

    const location = useLocation();
    
    const category = location?.state?.category

    const newArrivalCategory = location?.state?.isNewArrival

    const discountedProducts = location?.state?.hasDiscount

    const productOnSale = location?.state?.onSale
    
    const { stateOfProductsBeingShown, dispatchOfProductsBeingShown, filteredProductList } = useFilterData();

    useEffect(() => {
        if( category ){
           if( category=== "Men" || category=== "Women" || category=== "Kids" ){
              if( !(stateOfProductsBeingShown.filterSectionVal.includes(category)) ){
                  dispatchOfProductsBeingShown({ type: "clear" })
                  dispatchOfProductsBeingShown({ type: "filterBySection", payload: category })
              }
           }else
              if( !(stateOfProductsBeingShown.filterCategoryVal.includes(category)) ){
                  dispatchOfProductsBeingShown({ type: "clear" })
                  dispatchOfProductsBeingShown({ type: "filterByCategory", payload: category })
                }
        }

        if( newArrivalCategory ){
            dispatchOfProductsBeingShown({ type: "clear" })
            dispatchOfProductsBeingShown({ type: "filterByProducts", payload: "isNewArrival" })
        }

        if( discountedProducts ){
            dispatchOfProductsBeingShown({ type: "clear" })
            dispatchOfProductsBeingShown({ type: "filterByProducts", payload: "hasDiscount" })
        }

        if( productOnSale ){
            dispatchOfProductsBeingShown({ type: "clear" })
            dispatchOfProductsBeingShown({ type: "filterByProducts", payload: "isInSale" })
        }
    },[])

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
        const originalPrice = parseInt((product.discountedPrice * 100)/(100 - Number(product.discount)))
        return originalPrice
    } 

    return (
        <div className="ap_all-products">
            {
                filteredProductList.map((product, index) => {
                    return (
                        <div className={getProductClass(product)} key={index}>
                            { product.isNewArrival ? <div className="badge-type1 fw-4">New</div> : "" }
                            { !product.isInStock ? <div className="badge-type3">Stock Out</div> : "" }
                            <i><FaRegHeart /></i>

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
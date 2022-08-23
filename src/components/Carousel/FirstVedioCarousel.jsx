import "./vedioCarousel.css";
import { Carousel } from "./Carousel";
import { useNavigate } from "react-router-dom";
import { useFilterData } from "../../contexts";
import { firstVedioCarouselData } from "../../utils/utilityArrays";
import {
    CLEAR,
    FILTER_BY_SECTION,
    FILTER_BY_PRODUCTS
} from "../../constants/filterStateConstants";

const FirstVedioCarousel = () => {

    const navigate = useNavigate();
    const { dispatchOfProductsBeingShown } = useFilterData();

    const handleFirstVedioCarouselClick = (eachVedioData) => {
        dispatchOfProductsBeingShown({ type: CLEAR });

        if (eachVedioData.category) {
            dispatchOfProductsBeingShown({
                type: FILTER_BY_SECTION,
                payload: eachVedioData.category
            })
        } else
            if (eachVedioData.hasDiscount) {
                dispatchOfProductsBeingShown({
                    type: FILTER_BY_PRODUCTS,
                    payload: "hasDiscount"
                })
            } else
                if (eachVedioData.onSale) {
                    dispatchOfProductsBeingShown({
                        type: FILTER_BY_PRODUCTS,
                        payload: "isInSale"
                    })
                }

        navigate("/Productlisting")
    }

    return (
        <div className="ap_first-vedio-carousel" >
            <Carousel >
                {
                    firstVedioCarouselData.map((eachVedioData, index) => (
                        <div className="ap_first-carousel-vedio-data" key={index}>
                            <video src={eachVedioData.carouselVedio} autoPlay loop muted />
                            <div className="ap_overlay-container">
                                <p className="ap_overlay-container-text">
                                    {eachVedioData.overlayText}
                                </p>
                                <button
                                    className="et_so-btn primary-color btn ap_overlay-container-btn"
                                    onClick={() => handleFirstVedioCarouselClick(eachVedioData)}>
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    )
                    )
                }
            </Carousel>
        </div>
    );
}

export { FirstVedioCarousel };
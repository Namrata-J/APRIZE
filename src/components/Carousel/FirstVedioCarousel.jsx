import "./vedioCarousel.css";
import { Carousel } from "./Carousel";
import { firstVedioCarouselData } from "../../utils/utilityArrays";

const FirstVedioCarousel = () => {
    return (
        <div className="ap_first-vedio-carousel" >
            <Carousel >
                {
                    firstVedioCarouselData.map((eachVedioData, index) => {
                        return (
                            <div className="ap_first-carousel-vedio-data" key={ index }>
                                <video src={ eachVedioData.carouselVedio } autoPlay loop muted />
                                <div className="ap_overlay-container">
                                    <p className="ap_overlay-container-text">{ eachVedioData.overlayText }</p>
                                    <button class="et_so-btn primary-color btn ap_overlay-container-btn">Shop Now</button>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}

export { FirstVedioCarousel };
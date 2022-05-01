import { newArrivalsArr } from "../../utils/utilityArrays";
import "./newArrivalsSection.css";
import { Link } from "react-router-dom";
import { MdOutlineDoubleArrow } from "../../utils/icons";

const NewArrivalsSection = () => {

    return (
        <div className="ap_homepage-newArrivals-categories">
            <div className="ap_newArrivals-scrollable-section">
                <div className="ap_products-scrollable-section-description scrollable-section-description">
                    <p>New Arrivals waiting for you!</p>
                    <MdOutlineDoubleArrow className="ap_products-scrollable-section-icon" />
                </div>
                {
                    newArrivalsArr.map((newArrivalCategory, index) => {
                        return (
                            <Link to="/Productlisting" key={index} state={newArrivalCategory} >
                                <img src={newArrivalCategory.img} alt="new arrival" className="ap_new-arrival-img" />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
}

export { NewArrivalsSection };
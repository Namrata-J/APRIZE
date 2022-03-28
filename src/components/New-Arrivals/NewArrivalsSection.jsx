import { newArrivalsArr } from "../../utils/filteredCategoriesArr";
import "./newArrivalsSection.css";
import { Link } from "react-router-dom";

const NewArrivalsSection = () => {

    return (
        <div className="ap_homepage-newArrivals-categories">
            <div className="ap_newArrivals-scrollable-section">
                 {
                     newArrivalsArr.map((newArrivalCategory, index) => {
                         return (
                             <Link to="/Productlisting" key={ index } state= { newArrivalCategory } >
                                 <img src= { newArrivalCategory.img } alt= "new arrival" className="ap_new-arrival-img" />
                             </Link>
                         )
                     })
                 }
            </div>
        </div>
    );
}

export { NewArrivalsSection };
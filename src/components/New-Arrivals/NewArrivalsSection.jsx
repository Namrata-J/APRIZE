import { newArrivalsArr } from "../../utils/filteredCategoriesArr";
import "./newArrivalsSection.css";

const NewArrivalsSection = () => {
    return (
        <div className="ap_homepage-newArrivals-categories">
            <div className="ap_newArrivals-scrollable-section">
                 {
                     newArrivalsArr.map((newArrivalCategory, index) => {
                         return (
                             <div key={ index }>
                                 <img src= { newArrivalCategory.img } alt= "new arrival" className="ap_new-arrival-img" />
                             </div>
                         )
                     })
                 }
            </div>
        </div>
    );
}

export { NewArrivalsSection };
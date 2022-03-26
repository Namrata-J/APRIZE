import { useState } from "react";
import "./floatingBtn.css";
import { FaBars } from 'react-icons/fa';
import { FilterableForm } from "../Filterable-Form/FilterableForm";

const FloatingBtn = () => {

    const [ hamburgerPopUpFilterDisplay, setHamburgerPopUpFilterDisplay] = useState("none");

    const getTheIcon = (hamburgerPopUpFilterDisplay) => {
        hamburgerPopUpFilterDisplay === "none" ? setHamburgerPopUpFilterDisplay("block") : setHamburgerPopUpFilterDisplay("none")
    }

    return (
        <div>
            <button className="ap_hamburger et_icon-btn action-color btn b-rad4" onClick={() => getTheIcon(hamburgerPopUpFilterDisplay)}>
                <i className="fas fa-bars"><FaBars /></i>
            </button>
            <div className="ap_hamburger-popUp-filters b-rad1" style={{ display: hamburgerPopUpFilterDisplay }}>
                <FilterableForm />
            </div>
        </div>
    );
}

export { FloatingBtn };
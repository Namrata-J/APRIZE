import { useState } from "react";
import "./floatingBtn.css";
import { FaBars, FaChevronUp } from 'react-icons/fa';
import { FilterableForm } from "../Filterable-Form/FilterableForm";

const FloatingBtn = () => {

    const [sidebarIcon, setSidebarIcon] = useState(<FaBars />);

    const getTheIcon = () => {
        sidebarIcon.type.name === "FaBars" ? setSidebarIcon(<FaChevronUp />) : setSidebarIcon(<FaBars />)
    }

    const getThePopUpFilterDisplay = (sidebarIcon) => {
       return sidebarIcon.type.name === "FaBars" ? "none" : "block"
    } 

    return (
        <div>
            <button className="ap_hamburger et_icon-btn action-color btn b-rad4" onClick={() => getTheIcon()}>
                <i className="fas fa-bars">{sidebarIcon}</i>
            </button>
            <div className="ap_hamburger-popUp-filters b-rad1" style={{ display: getThePopUpFilterDisplay(sidebarIcon) }}>
                <FilterableForm />
            </div>
        </div>
    );
}

export { FloatingBtn };
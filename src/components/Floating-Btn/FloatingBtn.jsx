import { useState } from "react";
import "./floatingBtn.css";
import { FaBars, FaChevronUp } from 'react-icons/fa';
import { FilterableForm } from "../Filterable-Form/FilterableForm";

const FloatingBtn = () => {

    const [sidebarIcon, setSidebarIcon] = useState(<FaBars />);

    const getTheIcon = (sidebarIcon) => {
        sidebarIcon.type.name === "FaBars" ? setSidebarIcon(<FaChevronUp />) : setSidebarIcon(<FaBars />)
        console.log(sidebarIcon)
    }

    const getThePopUpFilterDisplay = (sidebarIcon) => {
        if( sidebarIcon.type.name === "FaBars" ){
            return "none"
        }else if( sidebarIcon.type.name === "FaChevronUp" ){
            return "block"
        }
    //    return sidebarIcon.type.name === "FaBars" ? "none" : "block"
    } 

    return (
        <div>
            <button className="ap_hamburger et_icon-btn action-color btn b-rad4" onClick={() => getTheIcon(sidebarIcon)}>
                {sidebarIcon}
            </button>
            <div className="ap_hamburger-popUp-filters b-rad1" style={{ display: getThePopUpFilterDisplay(sidebarIcon) }}>
                <FilterableForm />
            </div>
        </div>
    );
}

export { FloatingBtn };
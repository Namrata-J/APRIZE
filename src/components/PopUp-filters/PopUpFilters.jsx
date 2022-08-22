import { useState } from "react";
import "./popUpFilters.css";
import { FilterableForm } from "../";
import { BsViewStacked, BsGrid3X2, VscChromeClose } from "../../utils/icons";
import { useProductsGridClass } from "../../contexts";

const PopUpFiltersContainer = () => {

    const [filtersPopUpDisplay, setFiltersPopUpDisplay] = useState("none");
    const { productsGridClass, getTheProductsGridClass } = useProductsGridClass();

    const getTheFilterPopUpDisplay = (filtersPopUpDisplay) => {
        filtersPopUpDisplay === "none" ?
            setFiltersPopUpDisplay("block") :
            setFiltersPopUpDisplay("none")
    }

    return (
        <div className="ap_products-section-popUp-filters">
            <div className="ap_popUp-filters-container">
                <div
                    className="ap_products-popUpFilter-btn"
                    onClick={() => getTheFilterPopUpDisplay(filtersPopUpDisplay)}>
                    Filter
                </div>
                <div
                    className="ap_stacked-grid-display"
                    onClick={() => getTheProductsGridClass(productsGridClass)}>
                    <BsViewStacked />
                </div>
                <div
                    className="ap_normal-grid-display"
                    onClick={() => getTheProductsGridClass(productsGridClass)}>
                    <BsGrid3X2 />
                </div>
            </div>
            <div
                className="ap_filters-popUp"
                style={{ display: filtersPopUpDisplay }}>
                <div
                    className="ap_filters-popUp-closeBtn"
                    onClick={() => getTheFilterPopUpDisplay(filtersPopUpDisplay)}>
                    <i><VscChromeClose /></i>
                </div>
                <FilterableForm />
            </div>
        </div>
    );
}

export { PopUpFiltersContainer };
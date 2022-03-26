import "./sideBar.css";
import { FilterableForm } from "../Filterable-Form/FilterableForm";

const SideBar = () => {
    return (
        <div className="ap_productListing-page-sideBar">
            <FilterableForm />
        </div>
    );
}

export { SideBar };
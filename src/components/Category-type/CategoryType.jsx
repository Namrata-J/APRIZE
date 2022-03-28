import React from "react";
import "./categoryType.css";
import { Link } from "react-router-dom";
import { categoryTypeArr } from "../../utils/filteredCategoriesArr";

const CategoryType = () => {

    return (
       <div className="ap_homePage-filtered-categories">
           <div className="ap_scrollable-section">
                {
                    categoryTypeArr.map((category, index) => {
                        return (
                            <Link to="/Productlisting" key={ index } state={ category }>
                                <img src= { category.img } alt = "Category" className="ap_category-img" />
                            </Link>
                        )
                    })
                }
           </div>
       </div>
    );
}

export { CategoryType };
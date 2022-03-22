import React from "react";
import "./categoryType.css";
import { categoryTypeArr } from "../../utils/filteredCategoriesArr";

const CategoryType = () => {

    return (
       <div className="ap_homePage-filtered-categories">
           <div className="ap_scrollable-section">
                {
                    categoryTypeArr.map((category, index) => {
                        return (
                            <div key={ index }>
                                <img src= { category.img } alt = "Category" className="ap_category-img" />
                            </div>
                        )
                    })
                }
           </div>
       </div>
    );
}

export { CategoryType };
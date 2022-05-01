import React from "react";
import "./categoryType.css";
import { Link } from "react-router-dom";
import { categoryTypeArr } from "../../utils/utilityArrays";
import { MdOutlineDoubleArrow } from "../../utils/icons";

const CategoryType = () => {

    return (
       <div className="ap_homePage-filtered-categories">
           <div className="ap_scrollable-section">
               <div className="ap_scrollable-section-description scrollable-section-description">
                   <p>What are you looking for?</p>
                   <MdOutlineDoubleArrow className="ap_scrollable-section-icon" />
               </div>
                {
                    categoryTypeArr.map((category, index) => {
                        return (
                            <Link to="/Productlisting" key={ index } state={ category } className="ap_category-link">
                                <img src= { category.img } alt = "Category" className="ap_category-img" />
                                <div className="ap_category-name"><p className="a-tc">{category.category}</p></div>
                            </Link>
                        )
                    })
                }
           </div>
       </div>
    );
}

export { CategoryType };
import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { useSearchBar } from "../../contexts/searchBar-context";
import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";

const Header = () => {

    const { visibility, setVisibility ,getPopUpSearchBarVisibility } = useSearchBar();

    const { stateOfCart } = useCart();
    const { stateOfWishlist } = useWishlist();

    return (
        <div>

            <header className="ap_header">

                <div className="ap_header-content-container">

                    <div className="ap_header-logo">
                        <Link to="/" className="ap_logo" >
                            <h4>APRIZE</h4>
                        </Link>
                    </div>

                    <div className="ap_header-iconsAndBtns">
                        <Link to="/LogIn" className="ap_header-btn" >
                            <div className="et_xs-badge-on-btn badge-on-btn">
                                <button className="b-rad1">LogIn</button>
                            </div>
                        </Link>
                        <span className="ap_header-icon search-icon" onClick={() => getPopUpSearchBarVisibility()} ><FaSearch /></span>
                        {
                            stateOfWishlist.length === 0?
                            <Link to="/Wishlist" className="ap_header-icon" >
                                <FaHeart/>
                            </Link> :
                            <Link to="/Wishlist" className="ap_header-icon" >
                                <div className="et_badges-on-icons-container">
                                   <i><FaHeart/></i>
                                   <span class="b-rad4">{ stateOfWishlist.length }</span>
                                </div>
                            </Link>
                        }
                        {
                            stateOfCart.length === 0? 
                            <Link to="/Cart" className="ap_header-icon" >
                                <FaShoppingCart />
                            </Link> : 
                            <Link to="/Cart" className="ap_header-icon" >
                                <div className="et_badges-on-icons-container">
                                    <i><FaShoppingCart /></i>
                                    <span class="b-rad4">{ stateOfCart.length }</span>
                                </div>
                            </Link>
                        }
                    </div>

                </div>

                <div className="ap_popUp-container">
                    <div className="ap_popUp-search-section b-rad1" style={{ display: visibility }}>
                        <span className="ap_close-popUp" onClick={() => setVisibility("none")}>Close</span>
                        <input className="ap_searchBar b-rad1" placeholder="Search here..." />
                    </div>
                </div>

            </header>

        </div>
    );
}

export { Header };

import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { HiOutlineSearch, BiUser, BsCart3, VscHeart, GiHamburgerMenu } from "../../utils/icons";
import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";

const Header = () => {

    const { stateOfCart } = useCart();
    const { stateOfWishlist } = useWishlist();

    return (
        <div>

            <header className="ap_header">

                <div className="ap_header-content-container">

                    <div className="ap_hamburgerAndLogo-container">
                        <div className="ap_header-hamburger-icon">
                            <GiHamburgerMenu className="ap_header-icon" />
                        </div>

                        <div className="ap_header-logo">
                            <Link to="/" className="ap_logo-container" >
                                <div className="ap_logo" >
                                    <div className="ap_logo-subcontainer1">
                                        <h4 className="ap_logo-title a-tl">APRIZE</h4>
                                    </div>
                                    <div className="ap_logo-subcontainer2">
                                        <p className="a-tl">GET YOUR CHOICES</p>
                                        <p className="a-tl">AT A1 PRICE</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="ap_header-rounded-searchBar-with-icon-container">
                        <div className="ap_rounded-swi b-rad3">
                            <input placeholder="Search" />
                            <HiOutlineSearch className="ap_header-searchBar-icon" />
                        </div>
                    </div>

                    <div className="ap_header-iconsAndBtns">
                        <div className="ap_header-icon search-icon"><HiOutlineSearch /></div>
                        <div className="ap_header-user-icon">
                            <div className="ap_header-icon"><BiUser /></div>
                            <div className="ap_user-private-pages b-rad1">
                                <Link to="/LogOut"><p className="a-tl">LogOut</p></Link>
                                <Link to="/LogIn"><p className="a-tl">LogIn</p></Link>
                                <Link to="/SignUp"><p className="a-tl">SignUp</p></Link>
                            </div>
                        </div>
                        {
                            stateOfWishlist.length === 0 ?
                                <Link to="/Wishlist" className="ap_header-icon" >
                                    <VscHeart />
                                </Link> :
                                <Link to="/Wishlist" className="ap_header-icon" >
                                    <div className="et_badges-on-icons-container">
                                        <i><VscHeart /></i>
                                        <span class="b-rad4">{stateOfWishlist.length}</span>
                                    </div>
                                </Link>
                        }
                        {
                            stateOfCart.length === 0 ?
                                <Link to="/Cart" className="ap_header-icon" >
                                    <BsCart3 />
                                </Link> :
                                <Link to="/Cart" className="ap_header-icon" >
                                    <div className="et_badges-on-icons-container">
                                        <i><BsCart3 /></i>
                                        <span class="b-rad4">{stateOfCart.length}</span>
                                    </div>
                                </Link>
                        }
                    </div>

                </div>

            </header>

        </div>
    );
}

export { Header };

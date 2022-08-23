import React from "react";
import "./header.css";
import { AprizeLogo } from "../";
import { Link } from "react-router-dom";
import {
    useCart,
    useHeaderIcons,
    useWishlist,
    useAuth
} from "../../contexts";
import {
    HiOutlineSearch,
    BiUser,
    BsCart3,
    VscHeart,
    GiHamburgerMenu,
    VscChromeClose
} from "../../utils/icons";

const Header = () => {

    const { stateOfCart } = useCart();
    const { isUserLoggedIn } = useAuth();
    const { stateOfWishlist } = useWishlist();
    const {
        popUpSearchBarDisplay,
        setPopUpSearchBarDisplay,
        popUpSearchBarInput,
        setPopUpSearchBarInput,
        hamburgerMenuList,
        popUpHamburgerMenuDisplay,
        setPopUpHamburgerMenuDisplay } = useHeaderIcons();

    const filteredHamburgerMenuList = hamburgerMenuList.filter(
        (eachPage) => isUserLoggedIn ?
            eachPage.pageName !== "LogIn" && eachPage.pageName !== "SignUp" :
            eachPage.pageName !== "LogOut"
    )

    return (
        <div>

            <header className="ap_header">

                <div
                    className="ap_header-popUp-serchBar-container"
                    style={{ display: popUpSearchBarDisplay }}>
                    <div className="ap_popUp-searchBar-container">
                        <div className="ap_popUp-searchBar-subcontainer1">
                            <VscChromeClose
                                className="ap_close-popUp-searchBar popUp-searchBar-icon"
                                onClick={() => setPopUpSearchBarDisplay("none")} />
                            <input
                                placeholder="Search"
                                value={popUpSearchBarInput}
                                onChange={(e) => setPopUpSearchBarInput(e.target.value)} />
                        </div>
                        <VscChromeClose
                            className="ap_reset-popUp-searchBar-input popUp-searchBar-icon"
                            onClick={() => setPopUpSearchBarInput("")} />
                    </div>
                </div>

                <div
                    className="ap_header-popUp-hamburger-menu-container"
                    style={{ display: popUpHamburgerMenuDisplay }}>
                    <div className="ap_hamburger-menu-subcontainer1">
                        <div className="a-tr">
                            <VscChromeClose
                                className="ap_close-hamburger-menu"
                                onClick={() => setPopUpHamburgerMenuDisplay("none")} />
                        </div>
                        <div className="ap_hamburger-menu-logo">
                            <Link to="/" className="ap_hamburger-menu-logo-container" >
                                <div className="ap_aprize-logo" >
                                    <div className="ap_aprize-logo-subcontainer1">
                                        <h4 className="ap_aprize-logo-title a-tl">APRIZE</h4>
                                    </div>
                                    <div className="ap_aprize-logo-subcontainer2">
                                        <p className="a-tl">GET YOUR CHOICES</p>
                                        <p className="a-tl">AT A1 PRICE</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="ap_hamburger-menu-subcontainer2">
                        {
                            filteredHamburgerMenuList.map((page, index) => {
                                return (
                                    <div key={index} className="a-tl">
                                        <Link
                                            to={page.pageLink}
                                            className="ap_hamburger-menu-page">
                                            <span
                                                className="ap_hamburger-menu-page-icon">
                                                {page.pageIcon}
                                            </span>
                                            <span>{page.pageName}</span>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="ap_header-content-container">

                    <div className="ap_hamburgerAndLogo-container">
                        <div className="ap_header-hamburger-icon">
                            <GiHamburgerMenu
                                className="ap_header-icon"
                                onClick={() => setPopUpHamburgerMenuDisplay("block")} />
                        </div>

                        <AprizeLogo />
                    </div>

                    <div className="ap_header-rounded-searchBar-with-icon-container">
                        <div className="ap_rounded-swi b-rad3">
                            <input placeholder="Search" />
                            <HiOutlineSearch className="ap_header-searchBar-icon" />
                        </div>
                    </div>

                    <div className="ap_header-iconsAndBtns">
                        <div className="ap_header-icon search-icon">
                            <HiOutlineSearch onClick={() => setPopUpSearchBarDisplay("block")} />
                        </div>
                        <div className="ap_header-user-icon">
                            <div className="ap_header-icon"><BiUser /></div>
                            <div className="ap_user-private-pages b-rad1">
                                {isUserLoggedIn && <Link to="/LogOut"><p className="a-tl">LogOut</p></Link>}
                                {!isUserLoggedIn && <Link to="/LogIn"><p className="a-tl">LogIn</p></Link>}
                                {!isUserLoggedIn && <Link to="/SignUp"><p className="a-tl">SignUp</p></Link>}
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

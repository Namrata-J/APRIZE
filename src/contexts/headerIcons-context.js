import React, { useState, createContext, useContext } from "react";
import { AiOutlineLogin, AiOutlineLogout, VscSignIn, VscHeart, BsCart3 } from "../utils/icons";

const headerIconsContext = createContext(null);

const HeaderIconsProvider = ({ children }) => {

    const [popUpSearchBarDisplay, setPopUpSearchBarDisplay] = useState("none");
    const [popUpSearchBarInput, setPopUpSearchBarInput] = useState("");
    const [popUpHamburgerMenuDisplay, setPopUpHamburgerMenuDisplay] = useState("none");

    const hamburgerMenuList = [
        {
            pageName: "LogIn",
            pageIcon: <AiOutlineLogin />,
            pageLink: "/LogIn"
        },
        {
            pageName: "LogOut",
            pageIcon: <AiOutlineLogout />,
            pageLink: "/LogOut"
        },
        {
            pageName: "SignUp",
            pageIcon: <VscSignIn />,
            pageLink: "/SignUp"
        },
        {
            pageName: "Wishlist",
            pageIcon: <VscHeart />,
            pageLink: "/Wishlist"
        },
        {
            pageName: "Cart",
            pageIcon: <BsCart3 />,
            pageLink: "/Cart"
        }
    ];

    return <headerIconsContext.Provider value={{ popUpSearchBarDisplay, setPopUpSearchBarDisplay, popUpSearchBarInput, setPopUpSearchBarInput, hamburgerMenuList, popUpHamburgerMenuDisplay, setPopUpHamburgerMenuDisplay }}>
        {children}
    </headerIconsContext.Provider>
}

const useHeaderIcons = () => useContext(headerIconsContext);

export { useHeaderIcons, HeaderIconsProvider };
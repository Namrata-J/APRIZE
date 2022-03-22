import React, { useState, useContext, createContext } from "react";

const searchBarContext = createContext();

const SearchBarProvider = ({ children }) => {

    const [ visibility, setVisibility ] = useState("none");

    const getPopUpSearchBarVisibility = () => {
        visibility === "none" ? setVisibility("block") : setVisibility("none")
    }

    return <searchBarContext.Provider value = {{ visibility, setVisibility, getPopUpSearchBarVisibility }}>
        { children }
    </searchBarContext.Provider>
}

const useSearchBar = () => useContext(searchBarContext);

export { useSearchBar, SearchBarProvider };
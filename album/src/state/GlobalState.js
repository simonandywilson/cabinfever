import React, { createContext, useContext, useState } from "react";

// Current
const CurrentContext = createContext();
const CurrentUpdateContext = createContext();

export const useCurrentContext = () => {
    return useContext(CurrentContext);
};

export const useCurrentUpdateContext = () => {
    return useContext(CurrentUpdateContext);
};

// Search
const SearchContext = createContext();
const SearchUpdateContext = createContext();

export const useSearchContext = () => {
    return useContext(SearchContext);
};

export const useSearchUpdateContext = () => {
    return useContext(SearchUpdateContext);
};

// Autoscroll
const AutoscrollContext = createContext();
const AutoscrollUpdateContext = createContext();

export const useAutoscrollContext = () => {
    return useContext(AutoscrollContext);
};

export const useAutoscrollUpdateContext = () => {
    return useContext(AutoscrollUpdateContext);
};

// Context Provider
const ContextProvider = ({ children }) => {
    const [current, setCurrent] = useState({
        track: "",
        number: 0,
        language: "",
        typeface: "diatype",
    });
    const [search, setSearch] = useState(null);
    const [autoscroll, setAutoscroll] = useState(true);

    return (
        <CurrentContext.Provider value={current}>
            <CurrentUpdateContext.Provider value={setCurrent}>
                <SearchContext.Provider value={search}>
                    <SearchUpdateContext.Provider value={setSearch}>
                        <AutoscrollContext.Provider value={autoscroll}>
                            <AutoscrollUpdateContext.Provider value={setAutoscroll}>
                                {children}
                            </AutoscrollUpdateContext.Provider>
                        </AutoscrollContext.Provider>
                    </SearchUpdateContext.Provider>
                </SearchContext.Provider>
            </CurrentUpdateContext.Provider>
        </CurrentContext.Provider>
    );
};

export default ContextProvider;

import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

    const [currentMode, setCurrentMode] = useState("Light");
    const [collapsedMenu, setCollapsedMenu] = useState(false);

    const setMode = (valor) => {
        valor === 'Light' ? setCurrentMode('Dark') : setCurrentMode('Light');
    };

    return (
        <StateContext.Provider value={{
            currentMode,
            setMode,
            collapsedMenu, 
            setCollapsedMenu
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
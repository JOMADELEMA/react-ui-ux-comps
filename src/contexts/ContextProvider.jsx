import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    themeSettings: false,
}

export const ContextProvider = ({ children }) => {

    const [currentMode, setCurrentMode] = useState("Light");
    const [collapsedMenu, setCollapsedMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const setMode = (valor) => {
        valor === 'Light' ? setCurrentMode('Dark') : setCurrentMode('Light');
    };

    const handleClick = (clicked, estadoActual) => {
        setIsClicked({...initialState, [clicked]: estadoActual===true? false: true});
    }

    return (
        <StateContext.Provider value={{
            currentMode,
            setMode,
            collapsedMenu, 
            setCollapsedMenu,
            isClicked, 
            handleClick,
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
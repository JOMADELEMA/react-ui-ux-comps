import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    themeSettings: false,
}

export const ContextProvider = ({ children }) => {

    const [currentMode, setCurrentMode] = useState("Light");
    const [currentColor, setCurrentColor] = useState("blue")
    const [collapsedMenu, setCollapsedMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const setMode = (valor) => {
        valor === 'Light' ? setCurrentMode('Dark') : setCurrentMode('Light');
    };

    const setColor = (color) => {
        setCurrentColor(color);
        handleClick("themeSettings", true);
        // console.log(color);
    }

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
            currentColor,
            setColor,
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
import { hover } from '@testing-library/user-event/dist/hover';
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    themeSettings: false,
    userProfile: false,
}

const colors = {
    negro: "bg-gray-300 dark:bg-stone-700",
    azul: "bg-blue-400 dark:bg-blue-700",
    rojo: "bg-red-400 dark:bg-red-700",
    verde: "bg-green-400 dark:bg-green-700",
    violeta: "bg-violet-400 dark:bg-violet-700",
    ambar: "bg-amber-400 dark:bg-amber-700",
}

const hoverColors = {

    negro: "hover:bg-gray-200 hover:dark:bg-stone-600",
    azul: "hover:bg-blue-300 hover:dark:bg-blue-600",
    rojo: "hover:bg-red-300 hover:dark:bg-red-600",
    verde: "hover:bg-green-300 hover:dark:bg-green-600",
    violeta: "hover:bg-violet-300 hover:dark:bg-violet-600",
    ambar: "hover:bg-amber-300 hover:dark:bg-amber-600",
}

export const ContextProvider = ({ children }) => {

    const [currentMode, setCurrentMode] = useState("Light");
    const [currentColor, setCurrentColor] = useState("bg-blue-400 dark:bg-blue-700")
    const [hoverColor, setHoverColor] = useState("hover:bg-blue-300 hover:dark:bg-blue-600");
    // const [collapsedMenu, setCollapsedMenu] = useState(true);
    const [collapsedSidebar, setCollapsedSidebar] = useState(true);
    const [hiddenSidebar, setHiddenSidebar] = useState(false);
    const [isClicked, setIsClicked] = useState(initialState);

    const setMode = (valor) => {
        valor === 'Light' ? setCurrentMode('Dark') : setCurrentMode('Light');
    };

    const setColors = (color) => {
        setCurrentColor(colors[color]);
        setHoverColor(hoverColors[color]);
        console.log(hoverColors[color]);
        handleClick("themeSettings", true);
    }

    const handleClick = (clicked, estadoActual) => {
        setIsClicked({ ...initialState, [clicked]: estadoActual === true ? false : true });
    }

    const hideSidebar = (isHidden) => {
        setHiddenSidebar(!isHidden);
        setCollapsedSidebar(isHidden ? false : true);
    }

    return (
        <StateContext.Provider value={{
            currentMode,
            setMode,
            collapsedSidebar,
            setCollapsedSidebar,
            hiddenSidebar,
            hideSidebar,
            setHiddenSidebar,
            isClicked,
            handleClick,
            currentColor,
            setColors,
            hoverColor,
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
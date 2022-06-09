import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    themeSettings: false,
}

const colors = {
    azul: "bg-blue-400 dark:bg-blue-700", 
    rojo: "bg-red-400 dark:bg-red-700",
    verde: "bg-green-400 dark:bg-green-700",
    violeta: "bg-violet-400 dark:bg-violet-700",
    ambar: "bg-amber-400 dark:bg-amber-700",
}

export const ContextProvider = ({ children }) => {

    const [currentMode, setCurrentMode] = useState("Light");
    const [currentColor, setCurrentColor] = useState("bg-blue-400 dark:bg-blue-700")
    // const [collapsedMenu, setCollapsedMenu] = useState(true);
    const [collapsedSidebar, setCollapsedSidebar] = useState(true);
    const [hiddenSidebar, setHiddenSidebar] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const setMode = (valor) => {
        valor === 'Light' ? setCurrentMode('Dark') : setCurrentMode('Light');
    };

    const setColor = (color) => {
        setCurrentColor(colors[color]);
        handleClick("themeSettings", true);
    }

    const handleClick = (clicked, estadoActual) => {
        setIsClicked({...initialState, [clicked]: estadoActual===true? false: true});
    }

    const hideSidebar = (isHidden) =>{
        setHiddenSidebar(!isHidden);
        setCollapsedSidebar(isHidden? false:true);
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
            setColor,
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
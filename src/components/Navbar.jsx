import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Paint, MoonStars, Sun, Menu2 } from "tabler-icons-react";
import ThemeSettings from "./ThemeSettings";

const Navbar = () => {
  const {
    currentMode,
    setMode,
    isClicked,
    handleClick,
    currentColor,
    // collapsedSidebar,
    // hiddenSidebar,
    // setCollapsedSidebar, 
    // hideSidebar,
  } = useStateContext();

  return (
    <>
      <div
        className={` ${currentColor} flex align-middle h-16 shadow-md dark:shadow-md fixed w-full`}
      >
        <div className="flex w-full">
          {/* <button onClick={()=>hideSidebar(hiddenSidebar)}>
            <Menu2 strokeWidth={2} color="white" />
          </button> */}

          <button
            onClick={() => setMode(currentMode)}
            className="p-2 h-12 self-center ml-5"
          >
            {currentMode === "Dark" ? (
              <Sun color="yellow" strokeWidth={2} />
            ) : (
              <MoonStars color="white" strokeWidth={2} />
            )}
          </button>
          <button>
            <Paint
              color="white"
              strokeWidth={2}
              onClick={() =>
                handleClick("themeSettings", isClicked.themeSettings)
              }
            />
          </button>
          <span className="text-xl font-semibold dark:text-gray-50 self-center text-center w-full">
            Navbar
          </span>
          {isClicked.themeSettings && <ThemeSettings />}
        </div>
      </div>
    </>
  );
};

export default Navbar;

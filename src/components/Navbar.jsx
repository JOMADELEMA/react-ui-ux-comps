import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Paint, MoonStars, Sun } from "tabler-icons-react";
import ThemeSettings from "./ThemeSettings";

const Navbar = () => {
  const { currentMode, setMode, isClicked, handleClick } = useStateContext();

  console.log(isClicked);

  return (
    <>
      <div className="dark:bg-blue-900 bg-blue-400 flex align-middle h-16 shadow-md dark:shadow-md">
        <div className="flex w-full">
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
              <Paint color="white" strokeWidth={2} onClick={() => handleClick("themeSettings", isClicked.themeSettings)}/>
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

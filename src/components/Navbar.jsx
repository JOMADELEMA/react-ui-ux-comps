import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Menu2, MoonStars, Sun } from "tabler-icons-react";

const Navbar = () => {
  const { currentMode, setMode } = useStateContext();

  return (
    <>
      <div className="dark:bg-blue-900 bg-blue-400 flex align-middle h-16 shadow-md dark:shadow-md">
        <div className="flex w-full">
          <button
            onClick={() => setMode(currentMode)}
            className="p-2 h-12 self-center ml-5"
          >
            {currentMode === "Dark" ? (
              <Sun color="yellow" strokeWidth={3} />
            ) : (
              <MoonStars color="white" strokeWidth={3} />
            )}
          </button>
          <span className="text-xl font-semibold dark:text-gray-50 self-center text-center w-full">
            Navbar
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Menu2, MoonStars, Sun } from "tabler-icons-react";

const Navbar = () => {
  const { currentMode, setMode } = useStateContext();

  return (
    <>
      <div className="dark:bg-blue-900 bg-blue-400 flex align-middle h-16">
        <div className="flex justify-between w-full">
            <Menu2
              size={30}
              strokeWidth={2}
              color="white"
              className="self-center ml-5 md:hidden"
            />
          <span className="text-xl font-semibold dark:text-gray-50 self-center ml-2">
            Navbar
          </span>
          <button
            onClick={() => setMode(currentMode)}
            className="p-2 h-12 self-center mr-2"
          >
            {currentMode === "Dark" ? (
              <Sun color="yellow" strokeWidth={3} />
            ) : (
              <MoonStars color="white" strokeWidth={3} />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

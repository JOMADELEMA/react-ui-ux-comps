import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { Paint, MoonStars, Sun, Menu2, User, Logout } from "tabler-icons-react";
import ThemeSettings from "./ThemeSettings";

const Navbar = () => {
  const {
    currentMode,
    setMode,
    isClicked,
    handleClick,
    currentColor,
    collapsedSidebar,
    // hiddenSidebar,
    // setCollapsedSidebar,
    // hideSidebar,
  } = useStateContext();

  return (
    <>
      <div
        className={` ${currentColor} flex align-middle h-16 shadow-md dark:shadow-md fixed w-full`}
      >
        <div className="flex w-full justify-between">
          {/* <button onClick={()=>hideSidebar(hiddenSidebar)}>
            <Menu2 strokeWidth={2} color="white" />
          </button> */}

          <div className="contenedor-tema self-center">
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
            <button className="p-2 h-12 self-center">
              <Paint
                color="white"
                strokeWidth={2}
                onClick={() =>
                  handleClick("themeSettings", isClicked.themeSettings)
                }
              />
            </button>
            {isClicked.themeSettings && <ThemeSettings />}
          </div>
          <div className="contenedor-titulo self-center">
            <span className="text-xl font-semibold dark:text-gray-50 self-center text-center w-full">
              Navbar
            </span>
          </div>
          <div className="contenedor-usuario self-center flex">
            <Link
              to="/user"
              className={`hover:text-white hover:dark:text-black  
              flex rounded-sm cursor-pointer self-center mx-2
              hover:bg-main-dark-bg hover:dark:bg-main-bg`}
            >
              <div className="">
                <User color="white" />
              </div>
            </Link>
            <Link
              to="/logout"
              className={`hover:text-white hover:dark:text-black 
              flex rounded-sm cursor-pointer self-center mx-2 
              hover:bg-main-dark-bg hover:dark:bg-main-bg`}
            >
              <div className="">
                <Logout color="white"/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

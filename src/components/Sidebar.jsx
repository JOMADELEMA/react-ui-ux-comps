import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ArrowBigLeftLine,
  ArrowBigRightLine,
  Logout,
  User,
  Sun,
  MoonStars,
  Paint
} from "tabler-icons-react";

import { links } from "../data/dummy";
import { ThemeSettings } from '../components'

import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const {
    currentColor,
    collapsedSidebar,
    setCollapsedSidebar,
    currentMode,
    isClicked,
    handleClick,
    setMode,
  } = useStateContext();

  const normalLink = `flex rounded-sm cursor-pointer h-10 hover:text-black 
                      hover:dark:text-white `;

  const activeLink = `flex rounded-sm cursor-pointer h-10 ${currentColor}
                      text-black dark:text-white hover:text-white hover:dark:text-black `;

  return (
    <>
      <div className="h-screen z-50 ">
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="text-3xl flex w-full justify-between h-20">
              {collapsedSidebar ? (
                <div
                  className=" flex justify-center w-full self-center "
                  onClick={() =>
                    setCollapsedSidebar((prevActiveMenu) => !prevActiveMenu)
                  }
                >
                  <ArrowBigRightLine
                    className={`rounded-full border w-12 h-12 p-3 hover:shadow-xl 
                  ${currentColor} hover:text-black hover:dark:text-white cursor-pointer`}
                  />
                </div>
              ) : (
                <>
                  <div className="self-center ml-5">Sidebar</div>
                  <div
                    className={`self-center hover:shadow-xl ${currentColor} hover:text-black hover:dark:text-white 
                    rounded-full p-3 border cursor-pointer mr-5`}
                    onClick={() =>
                      setCollapsedSidebar((prevActiveMenu) => !prevActiveMenu)
                    }
                  >
                    <ArrowBigLeftLine />
                  </div>
                </>
              )}
            </div>

            <div className="">
              {links.map((item, index) => (
                <>
                  <div key="index">
                    {item.links.map((link, indice) =>
                      collapsedSidebar ? (
                        <NavLink
                          key={indice}
                          to={link.path}
                          className={({ isActive }) =>
                            isActive
                              ? activeLink + " justify-center"
                              : normalLink + " justify-center"
                          }
                        >
                          <div className="self-center">{link.icon}</div>
                        </NavLink>
                      ) : (
                        <NavLink
                          key={indice}
                          to={link.path}
                          className={({ isActive }) =>
                            isActive ? activeLink : normalLink
                          }
                          onClick={() =>
                            setCollapsedSidebar(
                              (prevActiveMenu) => !prevActiveMenu
                            )
                          }
                        >
                          <div className="self-center mx-7">{link.icon}</div>

                          <div className="self-center text-xl">{link.name}</div>
                        </NavLink>
                      )
                    )}
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="">

            <button
              onClick={() => setMode(currentMode)}
              className={`hover:text-white hover:dark:text-black 
              flex rounded-sm cursor-pointer h-10 hover:bg-main-dark-bg hover:dark:bg-main-bg`}
            >
              {currentMode === "Dark" ? (
                <Sun
                className="self-center mx-7" color="white" strokeWidth={2} />
              ) : (
                <MoonStars
                className="self-center mx-7" color="black" strokeWidth={2} />
              )}
            </button>
            <button
              onClick={() =>
                handleClick("themeSettings", isClicked.themeSettings)
              }
              className={`hover:text-white hover:dark:text-black 
              flex rounded-sm cursor-pointer h-10 hover:bg-main-dark-bg hover:dark:bg-main-bg`}
            >
              {currentMode === "Dark" ?
                <Paint
                className="self-center mx-7"
                  color="white"
                  strokeWidth={2}
                /> :
                <Paint
                className="self-center mx-7"
                  color="black"
                  strokeWidth={2}
                />
              }
            </button>

            {isClicked.themeSettings && <ThemeSettings />}

            <Link
              to="/user"
              className={`hover:text-white hover:dark:text-black  
              flex rounded-sm cursor-pointer h-10 hover:bg-main-dark-bg hover:dark:bg-main-bg`}
            >
              <div className="self-center mx-7">
                <User />
              </div>

              {!collapsedSidebar && (
                <div className="self-center text-xl">User Profile</div>
              )}
            </Link>
            <Link
              to="/logout"
              className={`hover:text-white hover:dark:text-black 
              flex rounded-sm cursor-pointer h-10 hover:bg-main-dark-bg hover:dark:bg-main-bg`}
            >
              <div className="self-center mx-7">
                <Logout />
              </div>

              {!collapsedSidebar && (
                <div className="self-center text-xl">Log Out</div>
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

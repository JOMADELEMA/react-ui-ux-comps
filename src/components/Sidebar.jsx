import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ArrowBigLeftLine,
  ArrowBigRightLine,
  Logout,
  User,
} from "tabler-icons-react";

import { links } from "../data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { collapsedMenu, setCollapsedMenu, currentColor } = useStateContext();

  const normalLink = `flex rounded-sm cursor-pointer h-10 hover:text-black 
                      hover:bg-${currentColor}-400 hover:dark:text-white hover:dark:bg-${currentColor}-900`;

  const activeLink = `flex rounded-sm cursor-pointer h-10 
                      text-black bg-${currentColor}-400 dark:text-white dark:bg-${currentColor}-900 hover:text-white hover:bg-${currentColor}-400 hover:dark:text-black hover:dark:bg-${currentColor}-900`;

  return (
    <>
      <div className="h-screen">
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="text-3xl flex w-full justify-between h-20">
              {collapsedMenu ? (
                <div
                  className=" flex justify-center w-full self-center "
                  onClick={() =>
                    setCollapsedMenu((prevActiveMenu) => !prevActiveMenu)
                  }
                >
                  <ArrowBigRightLine
                    className={`rounded-full border w-12 h-12 p-3 hover:shadow-xl 
                  hover:bg-${currentColor}-400 hover:text-black hover:dark:bg-${currentColor}-900 hover:dark:text-white cursor-pointer`}
                  />
                </div>
              ) : (
                <>
                  <div className="self-center ml-5">Sidebar</div>
                  <div
                    className={`self-center hover:shadow-xl hover:bg-${currentColor}-400 hover:text-black hover:dark:bg-${currentColor}-900 hover:dark:text-white 
                    rounded-full p-3 border cursor-pointer mr-5`}
                    onClick={() =>
                      setCollapsedMenu((prevActiveMenu) => !prevActiveMenu)
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
                      collapsedMenu ? (
                        <NavLink
                          key={indice}
                          to={link.path}
                          className={({isActive})=>isActive? activeLink + " justify-center":normalLink + " justify-center"}

                        >
                          <div className="self-center">{link.icon}</div>
                        </NavLink>
                      ) : (
                        <NavLink
                          key={indice}
                          to={link.path}
                      className={({isActive})=>isActive? activeLink:normalLink}
                      onClick={() =>
                        setCollapsedMenu((prevActiveMenu) => !prevActiveMenu)
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
            <Link
              to="/user"
              className={`hover:text-black hover:bg-${currentColor}-400 hover:dark:text-white hover:dark:bg-${currentColor}-900 
              flex rounded-sm cursor-pointer h-10`}
            >
              <div className="self-center mx-7">
                <User />
              </div>

              {!collapsedMenu && (
                <div className="self-center text-xl">User Profile</div>
              )}
            </Link>
            <Link
              to="/logout"
              className={`hover:text-black hover:bg-${currentColor}-400 hover:dark:text-white hover:dark:bg-${currentColor}-900 
              flex rounded-sm cursor-pointer h-10`}
            >
              <div className="self-center mx-7">
                <Logout />
              </div>

              {!collapsedMenu && (
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

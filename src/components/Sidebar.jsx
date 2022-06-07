import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowBigLeftLine,
  ArrowBigRightLine,
  Logout,
  User,
} from "tabler-icons-react";

import { links } from "../data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { collapsedMenu, setCollapsedMenu } = useStateContext();

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
                  <ArrowBigRightLine className=" rounded-full border w-12 h-12 p-3 hover:shadow-xl hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black cursor-pointer" />
                </div>
              ) : (
                <>
                  <div className="self-center ml-5">Sidebar</div>
                  <div
                    className="self-center hover:shadow-xl hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black 
              rounded-full p-3 border cursor-pointer mr-5"
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
                        <Link
                          key={indice}
                          to={link.path}
                          className=" hover:text-white hover:bg-main-dark-bg hover:dark:text-black hover:dark:bg-white 
                      flex rounded-sm justify-center cursor-pointer h-10"
                        >
                          <div className="self-center">{link.icon}</div>
                        </Link>
                      ) : (
                        <Link
                          key={indice}
                          to={link.path}
                          className=" hover:text-white hover:bg-main-dark-bg hover:dark:text-black hover:dark:bg-white 
                       flex rounded-sm cursor-pointer h-10"
                        >
                          <div className="self-center mx-7">{link.icon}</div>

                          <div className="self-center text-xl">{link.name}</div>
                        </Link>
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
              className=" hover:text-white hover:bg-main-dark-bg hover:dark:text-black hover:dark:bg-white 
              flex rounded-sm cursor-pointer h-10"
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
              className=" hover:text-white hover:bg-main-dark-bg hover:dark:text-black hover:dark:bg-white 
              flex rounded-sm cursor-pointer h-10"
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

import React from "react";
import { X, ArrowBigLeftLine, ArrowBigRightLine } from "tabler-icons-react";

import { links } from "../data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { collapsedMenu, setCollapsedMenu } = useStateContext();

  return (
    <div className="h-screen">
      <div className="">
        <div className="text-3xl flex w-full justify-between h-20">
          {collapsedMenu ? (
                 <div className=" flex justify-center w-full self-center ">
              <ArrowBigRightLine
                className=" rounded-full border w-12 h-12 p-3 hover:shadow-xl hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black cursor-pointer"
                onClick={() =>
                  setCollapsedMenu((prevActiveMenu) => !prevActiveMenu)
                }
              />
            </div>
          ) : (
            <>
            <span className="self-center ml-5">Sidebar</span>
              <span className="self-center hover:shadow-xl hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black 
              rounded-full p-3 border cursor-pointer mr-5">
                <ArrowBigLeftLine
                  onClick={() =>
                    setCollapsedMenu((prevActiveMenu) => !prevActiveMenu)
                  }
                />
              </span>
            </>
          )}
        </div>

        <div>
          {links.map((item, index) => (
            <>
              <div key="index">
                {item.links.map((link, indice) =>
                  collapsedMenu ? (
                    <div key={indice}
                      className=" hover:text-white hover:bg-main-dark-bg hover:dark:text-black hover:dark:bg-white 
                      flex rounded-sm justify-center cursor-pointer h-10"
                    >
                      <div className="self-center">{link.icon}</div>
                    </div>
                  ) : (
                    <div key={indice}
                      className=" hover:text-white hover:bg-main-dark-bg hover:dark:text-black hover:dark:bg-white 
                       flex rounded-sm cursor-pointer h-10"
                    >
                      <div className="self-center mx-7">{link.icon}</div>

                      <div className="self-center">
                      {link.name}
                        </div>
                    </div>
                  )
                )}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

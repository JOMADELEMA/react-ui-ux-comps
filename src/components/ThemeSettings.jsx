import React from "react";
import { Contenedor } from "./";

import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettings = () => {

    const {isClicked, setColor} = useStateContext();

  return (
    <div className="absolute sm:left-32 sm:top-12 top-12 left-32">
      <Contenedor
        altura="sm:h-48 h-auto"
        ancho="sm:w-400 w-44"
        fondo="bg-white dark:bg-card-dark-bg"
        elevacion="md"
      >
        <h1 className="text-black dark:text-gray-200 font-semibold text-xl sm:text-2xl">
          Seleccione el color de tema
        </h1>
        <div className="flex flex-col justify-around sm:justify-between sm:flex-row w-full p-5 flex-wrap">
          <div className="flex justify-center p-1 m-1 sm:m-0" onClick={()=>setColor("azul")}>
            <div className="w-10 h-10 bg-blue-500 rounded-full cursor-pointer"></div>
          </div>
          <div className="flex justify-center p-1 m-1 sm:m-0" onClick={()=>setColor("verde")}>
            <div className="w-10 h-10 bg-green-500 rounded-full cursor-pointer"></div>
          </div>
          <div className="flex justify-center p-1 m-1 sm:m-0" onClick={()=>setColor("rojo")}>
            <div className="w-10 h-10 bg-red-500 rounded-full cursor-pointer"></div>
          </div>
          <div className="flex justify-center p-1 m-1 sm:m-0" onClick={()=>setColor("violeta")}>
            <div className="w-10 h-10 bg-violet-500 rounded-full cursor-pointer"></div>
          </div>
          <div className="flex justify-center p-1 m-1 sm:m-0" onClick={()=>setColor("ambar")}>
            <div className="w-10 h-10 bg-amber-500 rounded-full cursor-pointer"></div>
          </div>
        </div>
      </Contenedor>
    </div>
  );
};

export default ThemeSettings;

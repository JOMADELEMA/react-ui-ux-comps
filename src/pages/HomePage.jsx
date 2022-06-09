import React from "react";
import { Contenedor, Tarjeta } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Home = () => {

  const {currentColor}= useStateContext();
  return (
    <Contenedor
      titulo="Home page"
      >
      <h3 className="dark:text-gray-200 text-black">
        Pagina de inicio de prueba...
      </h3>

      <div className="flex flex-wrap">
        <Tarjeta
          titulo="Ventas"
          altura="h-40"
          fondo="bg-white dark:bg-card-dark-bg"
          elevacion="md"
          ancho="w-400"
        >
            <p>Este es el contenido de la tarjeta</p>

        </Tarjeta>
        <Tarjeta
          titulo="Compras"
          altura="h-40"
          fondo={currentColor}
          elevacion="md"
          ancho="w-400"
        >
            <p>Este es el contenido de la tarjeta</p>

        </Tarjeta>
        <Tarjeta
          titulo="Reportes"
          altura="h-40"
          fondo="bg-white dark:bg-card-dark-bg"
          elevacion="md"
          ancho="w-400"
        >
            <p>Este es el contenido de la tarjeta</p>

        </Tarjeta>
      </div>
    </Contenedor>
  );
};

export default Home;

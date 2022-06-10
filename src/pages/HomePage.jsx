import React from "react";
import { Contenedor, Tarjeta } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Home = () => {

  const {currentColor}= useStateContext();
  return (
    <Contenedor
      titulo="Componentes"
      altura="h-screen"
      fondo="bg-main-bg dark: bg-main-dark-bg"
      >
      <h3 className="dark:text-gray-200 text-black mb-2 sm:mb-10 border">
        Pagina de inicio de prueba, donde se listan los componentes propios. 
      </h3>

      <div className="flex flex-wrap">
        <Tarjeta
          titulo="Ventas"
          altura="h-96"
          fondo="bg-white dark:bg-card-dark-bg"
          elevacion="md"
          fondo={currentColor}
          ancho="w-500 flex-grow flex-shrink"
          
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
          titulo="Compras"
          altura="h-40"
          fondo={currentColor}
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
          
        >
            <p>Este es el contenido de la tarjeta</p>

        </Tarjeta>
        <Tarjeta
          titulo="Compras"
          altura="h-40"
          fondo={currentColor}
          elevacion="md"
          
        >
            <p>Este es el contenido de la tarjeta</p>

        </Tarjeta>
        <Tarjeta
          titulo="Compras"
          altura="h-40"
          fondo={currentColor}
          elevacion="md"
          
        >
            <p>Este es el contenido de la tarjeta</p>

        </Tarjeta>
        <Tarjeta
          titulo="Compras"
          altura="h-40"
          fondo={currentColor}
          elevacion="md"
          
        >
            <p>Este es el contenido de la tarjeta</p>

        </Tarjeta>
        <Tarjeta
          titulo="Compras"
          altura="h-40"
          fondo={currentColor}
          elevacion="md"
          
        >
            <p>Este es el contenido de la tarjeta</p>

        </Tarjeta>
        <Tarjeta
          titulo="Compras"
          altura="h-40"
          fondo={currentColor}
          elevacion="md"
          
        >
            <p>Este es el contenido de la tarjeta</p>

        </Tarjeta>
        <Tarjeta
          titulo="Compras"
          altura="h-40"
          fondo={currentColor}
          elevacion="md"
          
        >
            <p>Este es el contenido de la tarjeta</p>

        </Tarjeta>
        <Tarjeta
          titulo="Compras"
          altura="h-40"
          fondo={currentColor}
          elevacion="md"
          
        >
            <p>Este es el contenido de la tarjeta</p>

        </Tarjeta>
        <Tarjeta
          titulo="Reportes"
          altura="h-40"
          fondo="bg-white dark:bg-card-dark-bg"
          elevacion="md"
          
        >
            <p>Este es el contenido de la tarjeta</p>

        </Tarjeta>
      </div>
    </Contenedor>
  );
};

export default Home;

import React from "react";
import { Contenedor, Tarjeta } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import fondo from "../img/hero-bg.jpg"

const Home = () => {

  const { currentColor } = useStateContext();
  return (
    <>
      <div className="hero-container">
        <section className="h-screen w-full flex justify-center items-center scroll" style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover", backgroundPosition:"center"}} >
          <h1 className="text-white text-6xl font-semibold">Welcome!</h1>
        </section>
      </div>


      <Contenedor
        titulo="Componentes"
        altura="h-screen flex items-center justify-center flex-col"
        fondo="bg-main-bg dark: bg-main-dark-bg"

      >
        <h3 className="dark:text-gray-200 text-black mb-2 sm:mb-10 border">
          Pagina de inicio de prueba, donde se listan los componentes propios.
        </h3>


      </Contenedor>
    </>
  );
};

export default Home;

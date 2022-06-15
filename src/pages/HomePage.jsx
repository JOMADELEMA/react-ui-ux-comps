import React from "react";
import { Contenedor, Tarjeta } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import fondo from "../img/hero-bg.jpg"
import { ArrowRight } from "tabler-icons-react";

const Home = () => {

  const { currentColor, hoverColor } = useStateContext();
  return (
    <>
      <div className="hero-container">
        <section className="h-screen w-full flex flex-col justify-center items-center scroll" style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover", backgroundPosition: "center" }} >
          <h1 className="text-gray-200 text-6xl font-semibold">Welcome!</h1>
          <p className="mt-12 sm:mt-5 text-gray-400 px-48">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis repudiandae, vel quasi consequuntur praesentium neque totam suscipit impedit ab at, tenetur eius atque odit corrupti accusamus minus nobis ex unde!</p>
          <button className={`flex justify-middle rounded-sm p-2 mt-5 sm:mt-10 ${currentColor} ${hoverColor}`} >
            <p className="text-white mr-5 self-center">Más información</p>
            <ArrowRight color="white" className="self-center" />
          </button>
          <div id="enlaces" className="mt-5 flex justify-between align-middle w-1/2">
            <a href="#componentes" className="text-white p-1  w-32 text-center rounded-sm bg-gray-600 hover:bg-gray-300 hover:text-black ">Componentes</a>
            <a href="#contenedor" className="text-white p-1  w-32 text-center rounded-sm bg-gray-600 hover:bg-gray-300 hover:text-black ">Contenedor</a>
            <a href="#tarjetas" className="text-white p-1  w-32 text-center rounded-sm bg-gray-600 hover:bg-gray-300 hover:text-black ">Tarjetas</a>
          </div>
        </section>
      </div>


      <Contenedor
        id="componentes"
        titulo="Componentes"
        altura=" flex flex-col"
        fondo="bg-white dark:bg-main-dark-bg"

      >
        <h3 className="dark:text-gray-200 text-black mb-2 sm:mb-10 ">
          Pagina de inicio de prueba, donde se listan los componentes propios.
        </h3>

        <div className="flex">

          <Tarjeta
            titulo="Contenedor"
            altura="40"
            fondo="bg-white"
            elevacion="2xl"
          >
            <h3 className="text-black dark:text-gray-200">Componente utilizado para envolver elementos principales de una pagina</h3>
            <button className={`${currentColor} ${hoverColor} rounded-sm p-1 text-white w-1/2`}
            >
              más información...
            </button>

          </Tarjeta>
          <Tarjeta
            titulo="Tarjetas"
            altura="40"
          fondo="bg-white"
            elevacion="md"
          >
            <h3 className="text-black dark:text-gray-200">Componente para mostrar elementos</h3>
            <button className={`${currentColor} ${hoverColor} rounded-sm p-1 text-white w-1/2`}
            >
              más información...
            </button>

          </Tarjeta>

        </div>

      </Contenedor>
      <Contenedor
        titulo="Contenedor"
        id="contenedor"
        altura=" flex items-center justify-center flex-col"
        fondo="bg-main-bg dark:bg-main-dark-bg"
      >
        <h3 className="dark:text-gray-200 text-black mb-2 sm:mb-10">
          Pagina de inicio de prueba, donde se listan los componentes propios.
        </h3>


      </Contenedor>
      <Contenedor
        titulo="Tarjetas"
        id="tarjetas"
        altura=" flex items-center justify-center flex-col"
        fondo="bg-main-bg dark:bg-main-dark-bg"

      >
        <h3 className="dark:text-gray-200 text-black mb-2 sm:mb-10">
          Pagina de inicio de prueba, donde se listan los componentes propios.
        </h3>


      </Contenedor>
    </>
  );
};

export default Home;

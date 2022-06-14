import React from "react";
import { Contenedor, Tarjeta } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import fondo from "../img/hero-bg.jpg"
import { InfoCircle, ArrowRight } from "tabler-icons-react";

const Home = () => {

  const { currentColor } = useStateContext();
  return (
    <>
      <div className="hero-container">
        <section className="h-screen w-full flex flex-col justify-center items-center scroll" style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover", backgroundPosition:"center"}} >
          <h1 className="text-gray-200 text-6xl font-semibold">Welcome!</h1>
          <p className="mt-12 sm:mt-5 text-gray-400 px-48">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis repudiandae, vel quasi consequuntur praesentium neque totam suscipit impedit ab at, tenetur eius atque odit corrupti accusamus minus nobis ex unde!</p>
          <button className={`flex justify-middle rouned-sm p-2 mt-5 sm:mt-10 ${currentColor}`} >
            <p className="text-white mr-5 self-center">Más información</p>
            <ArrowRight color="white" className="self-center"/>  
          </button>
        </section>
      </div>


      <Contenedor
        titulo="Componentes"
        altura="h-screen flex items-center justify-center flex-col"
        fondo="bg-main-bg dark: bg-main-dark-bg"

      >
        <h3 className="dark:text-gray-200 text-black mb-2 sm:mb-10">
          Pagina de inicio de prueba, donde se listan los componentes propios.
        </h3>


      </Contenedor>
      <Contenedor
        titulo="Contenedor"
        altura="h-screen flex items-center justify-center flex-col"
        fondo="bg-main-bg dark: bg-main-dark-bg"

      >
        <h3 className="dark:text-gray-200 text-black mb-2 sm:mb-10">
          Pagina de inicio de prueba, donde se listan los componentes propios.
        </h3>


      </Contenedor>
      <Contenedor
        titulo="Tarjetas"
        altura="h-screen flex items-center justify-center flex-col"
        fondo="bg-main-bg dark: bg-main-dark-bg"

      >
        <h3 className="dark:text-gray-200 text-black mb-2 sm:mb-10">
          Pagina de inicio de prueba, donde se listan los componentes propios.
        </h3>


      </Contenedor>
    </>
  );
};

export default Home;

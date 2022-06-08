import React from "react";
import { Contenedor } from "../components";

const AboutPage = () => {
  return (
    <>
      <Contenedor
        titulo="About Us"
        fondo="bg-white dark:bg-card-darker-bg"
        elevacion="md"
      >

        <p className="text-black dark:text-gray-400 p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          laborum dolor necessitatibus eligendi possimus explicabo
          reprehenderit, ad vitae ab rerum perferendis consequuntur numquam
          eveniet molestias quis earum saepe incidunt distinctio.
        </p>

        <p className="text-black dark:text-gray-400 p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          laborum dolor necessitatibus eligendi possimus explicabo
          reprehenderit, ad vitae ab rerum perferendis consequuntur numquam
          eveniet molestias quis earum saepe incidunt distinctio.
        </p>
      </Contenedor>

      
    </>
  );
};

export default AboutPage;

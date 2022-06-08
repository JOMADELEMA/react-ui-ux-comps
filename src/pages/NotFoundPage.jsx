import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "tabler-icons-react";
import { Contenedor } from "../components";

const NotFoundPage = () => {
  return (
    <>
      <Contenedor
        fondo="bg-white dark:bg-card-dark-bg"
        titulo="Error 404!"
        elevacion="md"

      >
        <h1 className="text-black text-2xl dark:text-gray-200 text-center p-2">
          Not Found!
        </h1>
        <Link
          to="/"
          className="text-blue-400 dark:text-blue-200 text-xl flex p-3"
        >
          <ArrowLeft />
          Back to home
        </Link>
      </Contenedor>
    </>
  );
};

export default NotFoundPage;

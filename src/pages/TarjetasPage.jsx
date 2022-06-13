import React from 'react'
import { Tarjeta } from '../components'
import { useStateContext } from '../contexts/ContextProvider'

const TarjetasPage = () => {

    const {currentColor} = useStateContext();

  return (
    <div className="flex flex-wrap">
    <Tarjeta
      titulo="Tarjeta 1"
      altura="h-96"
      elevacion="md"
      fondo={currentColor}
      ancho="w-500 flex-grow flex-shrink"
      
    >
        <p>Este es el contenido de la tarjeta</p>

    </Tarjeta>
    <Tarjeta
      titulo="tarjeta 2"
      altura="h-40 lg:h-96"
      fondo={currentColor}
      elevacion="md"
      ancho="w-400"
      
    >
        <p>Este es el contenido de la tarjeta</p>

    </Tarjeta>
    <Tarjeta
      titulo="tarjeta 3"
      altura="h-40"
      fondo={currentColor}
      elevacion="md"
      ancho="w-400"
      
    >
        <p>Este es el contenido de la tarjeta</p>

    </Tarjeta>
    <Tarjeta
      titulo="tarjeta 4"
      altura="h-40"
      fondo={currentColor}
      elevacion="md"
      
    >
        <p>Este es el contenido de la tarjeta</p>

    </Tarjeta>
    <Tarjeta
      titulo="tarjeta 5"
      altura="h-40"
      fondo={currentColor}
      elevacion="md"
      
    >
        <p>Este es el contenido de la tarjeta</p>

    </Tarjeta>

  </div>
  )
}

export default TarjetasPage
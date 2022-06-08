import React from 'react'
import { Contenedor } from './'

const ThemeSettings = () => {
    return (
        <div className='absolute left-32 top-12'>


            <Contenedor altura="h-48" ancho="w-400" fondo="bg-white dark:bg-card-dark-bg" elevacion="md">
                <h1 className='text-black dark:text-gray-200 font-semibold text-2xl'>Seleccione el color de tema</h1>
                
                <div className='flex justify-between w-full p-5'>
                    <div className='w-10 h-10 bg-blue-500 rounded-full cursor-pointer'></div>
                    <div className='w-10 h-10 bg-green-500 rounded-full cursor-pointer'></div>
                    <div className='w-10 h-10 bg-red-500 rounded-full cursor-pointer'></div>
                    <div className='w-10 h-10 bg-gray-500 rounded-full cursor-pointer'></div>
                    <div className='w-10 h-10 bg-amber-500 rounded-full cursor-pointer'></div>
                </div>

            </Contenedor>

        </div>
    )
}

export default ThemeSettings
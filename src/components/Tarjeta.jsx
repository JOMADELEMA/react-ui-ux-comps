import React from 'react';

const Card = ({ titulo, altura, ancho, fondo, children, elevacion }) => {
    
    return (
       <>
            <div className={`rounded-sm p-5 ${fondo} ${altura} ${"shadow-"+elevacion} m-5 
            ${ancho===undefined? "xl:w-500 lg:w-400 md:w-96, sm:w-80": ancho} 
            dark:border dark:border-gray-700 flex flex-col justify-end flex-grow` }>    
                <div className='text-xl text-black dark:text-gray-200 font-bold text-center mb-2'>{titulo}</div>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Card
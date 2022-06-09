import React from 'react';

const Card = ({ titulo, altura, ancho, fondo, children, elevacion }) => {

    return (
       <>
            <div className={`rounded-sm p-5 ${fondo} ${altura} ${"shadow-"+elevacion} m-5 ${ancho} dark:border dark:border-gray-700 flex flex-col justify-end` }>    
                <div className='text-xl text-black dark:text-gray-200 font-bold text-center mb-2'>{titulo}</div>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Card
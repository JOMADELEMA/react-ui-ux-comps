import React from 'react';

const Contenedor = ({ titulo, altura,fondo, children, elevacion }) => {

    return (
       <>
            <div className={`rounded-sm p-5 bg-white ${fondo} ${altura} ${"shadow-"+elevacion} m-5`}>
                <div className='text-3xl text-black dark:text-gray-200 font-bold text-center mb-5'>{titulo}</div>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Contenedor
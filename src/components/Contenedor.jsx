import React from 'react';

const Contenedor = ({ titulo, altura, ancho, children }) => {

    return (
       <>
            <div className={`p-5 ${altura} m-5 ${ancho}` }>
                <div className='text-3xl text-black dark:text-gray-200 font-bold text-center mb-5'>{titulo}</div>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Contenedor
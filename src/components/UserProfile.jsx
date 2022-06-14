import React from 'react'
import { Logout } from 'tabler-icons-react'
import { Tarjeta } from '.'
import { useStateContext } from '../contexts/ContextProvider'

const UserProfile = () => {

    const {currentColor } = useStateContext();

    return (
        <div className="absolute top-8 right-6 h-">
            <Tarjeta
                altura="h-460"
                ancho="sm:w-400 w-400"
                fondo="bg-white dark:bg-card-dark-bg"
                elevacion="md"
            >
                <div className='flex flex-col '>

                    <h1 className="text-black dark:text-gray-200 font-semibold text-xl sm:text-2xl text-center">
                        User Profile
                    </h1>

                    <div id="user-info" className=' flex flex-col'>
                        <div id="avatar" className='w-32  self-center'>
                            <div className={`rounded-full w-32 h-32 my-2 ${currentColor}`}>
                            
                            </div>
                        </div>

                        <div id="user-data" className='flex flex-col justify-between'>
                            <p className='text-black dark:text-gray-400 text-sm'>User Name:</p>
                            <p className='text-black dark:text-gray-200 text-xl'>ExampleUser</p>

                            <p className='text-black dark:text-gray-400 text-sm'>Email:</p>
                            <p className='text-black dark:text-gray-200 text-xl'>exampleemail@example.com</p>


                            <p className='text-black dark:text-gray-400 text-sm'>User Role:</p>
                            <p className='text-black dark:text-gray-200 text-xl'>Admin</p>
                        </div>


                    </div>

                    <div id='opciones' className=''>
                        <button className={`flex m-auto px-5 py-2 rounded-sm ${currentColor} `}>
                            <span className='text-xl text-white'>Logout</span>
                            <Logout color='white' className='ml-5 self-center' />
                        </button>
                    </div>


                </div>

            </Tarjeta>
        </div>
    )
}

export default UserProfile
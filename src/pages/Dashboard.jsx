import React from 'react'
import { Contenedor } from '../components'

const Dashboard = () => {
    return (
        <div className='mt-20'>
            <Contenedor titulo="Dashboard con fondo oscuro" altura="h-96" fondo="bg-white dark:bg-card-dark-bg" elevacion="md">
                <p className='text-black dark:text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt aut dolor temporibus beatae. 
                Et possimus temporibus fugit odit laboriosam vitae distinctio doloribus hic dolor, voluptatibus mollitia exercitationem beatae excepturi.
                </p>
            </Contenedor>
            <Contenedor titulo="Dashboard con fondo más oscuro" altura="h-96" fondo="bg-white dark:bg-card-darker-bg">
                <p className='text-black dark:text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt aut dolor temporibus beatae. 
                Et possimus temporibus fugit odit laboriosam vitae distinctio doloribus hic dolor, voluptatibus mollitia exercitationem beatae excepturi.
                </p>
            </Contenedor>
        </div>
    )
}

export default Dashboard
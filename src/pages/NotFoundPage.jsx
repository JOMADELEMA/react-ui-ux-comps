import React from 'react'
import {Link} from 'react-router-dom'
import { ArrowLeft } from 'tabler-icons-react'

const NotFoundPage = () => {
  return (
    <>
    
    <div className='p-5  bg-white rounded-sm shadow-sm dark:bg-main-dark-bg h-full dark:shadow-md' >
    <h1 className='text-black text-3xl dark:text-gray-200'>
      Pagina no encontrada!
    </h1>
    
    <Link to="/" className='text-blue-400 dark:text-blue-200 text-xl flex p-3'>
      <ArrowLeft />
      Volver a Inicio
      </Link>

    </div>
    
    
    </>
  )
}

export default NotFoundPage
import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'

const Navbar = () => {

    const { currentMode, setMode } = useStateContext();

    return (
        <>
            <div className='dark:bg-blue-400 bg-blue-200 flex justify-between h-16'>
                <div className='text-xl font-semibold dark:text-gray-50 self-center ml-2'>
                    Navbar
                </div>
                <button onClick={() => setMode(currentMode)} className="border border-slate-800 dark:border-slate-200 rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-gray-200 p-2 w-40 hover:shadow-lg h-12 self-center mr-2">
                    toggle
                </button>
            </div>
        </>
    )
}

export default Navbar
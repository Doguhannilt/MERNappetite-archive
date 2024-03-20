import React from 'react'
import { Link } from 'react-router-dom'
import Mobilenav from '../responsive/Mobilenav'
import Hero from './Hero'


const Header = () => {
  return (
    <div className=' py-6'>
        <div className='container mx-auto flex justify-between items-center'>
            <Link to= '/'
            className='text-3xl font-bold tracking-tight text-red-500 font-sans'>
                MERNappetite.com
            </Link>

            <div className='hidden md:block'>
                <Link 
                    to={"/login"}
                    className='ml-20 font-sans text-red-500 text-2xl font-bold hover:text-red-400 hover:duration-300 duration-300'> 
                    Log in 
                </Link>
            </div>
            <div className='md:hidden'>
        <Mobilenav/>
        </div>
        </div>

    </div>
  )
}

export default Header

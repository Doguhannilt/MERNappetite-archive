import React from 'react'
import { Link } from 'react-router-dom'
import Mobilenav from '../responsive/Mobilenav'
import Hero from './Hero'
import { useAuth0 } from '@auth0/auth0-react'

const Header = () => {
    const {loginWithRedirect } = useAuth0()
  return (
    <div className=' py-6'>
        <div className='container mx-auto flex justify-between items-center'>
            <Link to= '/'
            className='text-3xl font-bold tracking-tight text-red-500 font-sans'>
                MERNappetite.com
            </Link>

            <div className='hidden md:block'>
                <button 
                    onClick={async () => await loginWithRedirect()}
                    className='ml-20 font-sans text-red-500 text-2xl font-bold hover:text-red-400 hover:duration-300 duration-300'> 
                    Log in 
                </button>
            </div>
            <div className='md:hidden'>
        <Mobilenav/>
        </div>
        </div>

    </div>
  )
}

export default Header

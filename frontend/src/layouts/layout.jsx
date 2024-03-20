import React from 'react'
import Header from '../components/layouts/Header'
import Hero from '../components/layouts/Hero'
import Footer from '../components/layouts/Footer'

const Layout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header />
        <Hero/>
        <div className='container mx-auto flex-1 py-10'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout

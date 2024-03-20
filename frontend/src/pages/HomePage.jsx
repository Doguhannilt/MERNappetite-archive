import React from 'react'
import landingImage from '../assets/landing.jpg'
import appDownload from '../assets/download.png'


const HomePage = () => {
  return (
    <div className='flex flex-col  gap-12'>
        <div className='bg-inherit glass rounded-lg shadow-none border-slate-500 gap-5 text-center font-sans -mt-16 py-8 flex flex-col'>
                <h1 className="text-5xl font-bold tracking-tight text-red-600">
                    Are you hungary?
                </h1>
                <span className='text-xl  font-normal font-mono'>Here is the menu...</span>
        </div>
    {/* SEARCH BAR WILL BE HERE */}
        <div className='grid md:grid-cols-2 gap-5'>
            <img src={landingImage} />
            <div className='flex flex-col items-center justify-center gap-4 text-center'>
                <span className='font-bold font-sans text-2xl tracking-tight'>
                    Download the <span className='text-red-600'>MERNappetite</span> for faster ordering and personalised recommendations
                </span>
                <img src={appDownload} className='h-40'/>
            </div>
        </div>

    </div>
  )
}

export default HomePage

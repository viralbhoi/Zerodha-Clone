import React from 'react'

export default function HeroSection() {
  return (
    <div className='container p-5 mb-5 my-5'>
        <div className='flex flex-col text-center'>
            <img src="media/homeHero.png" alt='Hero Image' className='mb-5 w-[90%] m-auto'/>
            <h1 className='md:text-5xl text-4xl font-semibold p-4'>Invest in everything</h1>
            <p className='mb-5 text-md px-5 pb-5'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
            <button className='inline-block px-4 py-2 bg-blue-600 text-white rounded text-lg font-medium hover:bg-blue-700 transition w-1/2 md:w-3/12 m-auto'>Signup Now</button>
        </div>
      
    </div>
  )
}

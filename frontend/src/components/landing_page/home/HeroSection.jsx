import React from 'react'

export default function HeroSection() {
  return (
    <div className='container p-5 mb-5'>
        <div className='row text-center'>
            <img src="media/homeHero.png" alt='Hero Image' className='mb-5'/>
            <h1>Invest in everything</h1>
            <p className='mb-5'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
            <button className='p-2 btn btn-primary fs-5' style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
        </div>
      
    </div>
  )
}

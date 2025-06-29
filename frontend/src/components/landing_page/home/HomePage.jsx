import React from 'react'
import HeroSection from './HeroSection'
import Award from './Award'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from '../OpenAccount'


export default function HomePage() {
  return (
    <>
        <HeroSection/>
        <Award/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
    </>
  )
}

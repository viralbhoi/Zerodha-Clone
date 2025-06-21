import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import HomePage from './components/landing_page/home/HomePage.jsx'
import Signup from './components/landing_page/signup/Signup.jsx'
import AboutPage from './components/landing_page/about/AboutPage.jsx'
import ProductPage from './components/landing_page/product/ProductPage.jsx'
import PricingPage from './components/landing_page/pricing/PricingPage.jsx'
import SupportPage from './components/landing_page/support/SupportPage.jsx'
import Navbar from './components/landing_page/Navbar.jsx'
import Footer from './components/landing_page/Footer.jsx'
import NotFound from './components/landing_page/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
)

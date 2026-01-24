import React from 'react'
import { CartypeProvider } from '../../../Homecontext/Homecontext';
import Banner from '../../Banner/Banner';
import Features from '../../Features/Features';
const Home = () => {
  return (
    <div>
   <Banner/>
   <Features/>
   <CartypeProvider/>
       </div>
  )
}

export default Home
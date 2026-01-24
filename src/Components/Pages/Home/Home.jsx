import React from 'react'
import { CartypeProvider } from '../../../Homecontext/Homecontext';
import Banner from '../../Banner/Banner';
import Carbodystyles from '../../Carbodystyles/Carbodystyles';
import Features from '../../Features/Features';
const Home = () => {
  return (
    <div>
      <CartypeProvider>
        <Banner />
        <Carbodystyles />
        <Features/>
      </CartypeProvider>
    </div>
  )
}

export default Home
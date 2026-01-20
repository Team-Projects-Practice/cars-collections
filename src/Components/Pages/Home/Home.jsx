import React from 'react'
import { CartypeProvider } from '../../../Context/Context';
import Banner from '../../Banner/Banner';
import Carbodystyles from '../../Carbodystyles/Carbodystyles';
const Home = () => {
  return (
    <div>
      <CartypeProvider>
   <Banner/>
   <Carbodystyles/>
   </CartypeProvider>
    </div>
  )
}

export default Home
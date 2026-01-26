import React from 'react'
import { CartypeProvider } from '../../../Homecontext/Homecontext';
import Banner from '../../Banner/Banner';
import Carbodystyles from '../../Carbodystyles/Carbodystyles';
import Searchedcars from '../../Searchedcars/Searchedcars';
const Home = () => {
  return (
    <div>
      <CartypeProvider>
        <Banner />
        <Carbodystyles />
      </CartypeProvider>
      <Searchedcars/>
    </div>
  )
}

export default Home
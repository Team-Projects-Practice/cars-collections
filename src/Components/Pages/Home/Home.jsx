import React from 'react'
import { CartypeProvider } from '../../../Homecontext/Homecontext';
import Banner from '../../Banner/Banner';
import Carbodystyles from '../../Carbodystyles/Carbodystyles';
import Features from '../../Features/Features';
import CarServiceCard from '../../CarServiceCard/CarServiceCard';
import cardData from '../../../Utility/carServiceCards/carServiceCards';
import "./home.scss";
import Searchedcars from '../../Searchedcars/Searchedcars';
const Home = () => {
  return (
    <div className='home-container'>
      <CartypeProvider>
        <Banner />
        <Carbodystyles />
        <Features />
        <div className='car-service-container'>
          <div className="car-service-container__row">
            {
              cardData.map(({ backGroundColor, icon, title, description, variant, buttonText }) => (
                <CarServiceCard
                  backGroundColor={backGroundColor}
                  icon={icon}
                  title={title}
                  description={description}
                  variant={variant}
                  buttonText={buttonText}
                />
              ))
            }
          </div>
        </div>
      </CartypeProvider>
      <Searchedcars/>
    </div>
  )
}

export default Home
import React from 'react'
import { CartypeProvider } from '../../../Homecontext/Homecontext';
import Banner from '../../Banner/Banner';
import Carbodystyles from '../../Carbodystyles/Carbodystyles';
import Features from '../../Features/Features';
import CarServiceCard from '../../CarServiceCard/CarServiceCard';
import cardData from '../../../Utility/carServiceCards/carServiceCards';
import BlogHeader from "../../Blogheader/BlogHeader";
import { Blogpost, Brand } from '../../../Utility/Blogpost';
import CarBlogcard from '../../BolgPost/CarBlogcard';
import carBlogPosts from "../../../Utility/CarBlogPost/carBlogPosts";
import BrandCard from "../../Carbrand/BrandCard";
import brandData from "../../../Utility/BrandCard/brandData";
import "./home.scss";

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
      <div className="latest-blogs">
          {Blogpost.map((post,index)=>(
         <BlogHeader
           key={index}
           title={post.title}
           button={post.button}
        />
         ))}
       </div>
        <div className="Blogpost__Container">
         <div className="Blogpost__Cards">
        {carBlogPosts.map((blogpost,index) => (
          <CarBlogcard
            key={index}
            image={blogpost.image}
            category={blogpost.category}
            date={blogpost.date}
            title={blogpost.title}
            author={blogpost.author}
          />
        ))}
    </div>
    </div>
      <carBlogPosts  />
         <div className="latest-blogs">
          {Brand.map((post,index)=>(
         <BlogHeader
           key={index}
           title={post.title}
           button={post.button}
        />
         ))}
       </div>
       <div className='brand-section'>
        <div className="brand-container">
        {brandData.map((item) => (
          <BrandCard
            key={item.id}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>
     </div>
      </CartypeProvider>
     </div>
     )
}

export default Home
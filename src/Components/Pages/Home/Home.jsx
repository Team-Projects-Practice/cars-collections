import React from 'react'
import { CartypeProvider } from '../../../Homecontext/Homecontext';
import Banner from '../../Banner/Banner';
import Carbodystyles from '../../Carbodystyles/Carbodystyles';
import Features from '../../Features/Features';
import Searchedcars from '../../Searchedcars/Searchedcars';
import CarServiceCard from '../../CarServiceCard/CarServiceCard';
import cardData from '../../../Utility/carServiceCards/carServiceCards';
import Searchedcartitle from '../../Products/Searchedcartitle/Searchedcartitle';
import Cardslider from '../../Products/Cardslider/Cardslider';
import { cars } from '../../../Utility/searchedcars';
import { MilesIcon,HybridIcon,CvtIcon,SliderLeftArrow,SliderRightArrow } from '../../../Res/icons';
import BlogHeader from "../../Blogheader/BlogHeader";
import { Blogpost, Brand } from '../../../Utility/Blogpost';
import CarBlogcard from '../../BolgPost/CarBlogcard';
import carBlogPosts from "../../../Utility/CarBlogPost/carBlogPosts";
import BrandCard from "../../Carbrand/BrandCard";
import brandData from "../../../Utility/BrandCard/brandData";
import "./home.scss";
const iconMap = {
  miles: <MilesIcon />,
  hybrid: <HybridIcon />,
  cvt: <CvtIcon />,
};
const PrevArrow = ({ onClick }) => (
  <button className="slider__arrow left" onClick={onClick}>
    <SliderLeftArrow />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="slider__arrow right" onClick={onClick}>
    <SliderRightArrow />
  </button>
);

const Home = () => {
  return (
    <div className='home-container'>
      <CartypeProvider>
        <Banner />
        <Carbodystyles />
         </CartypeProvider>
        <Features />
           <Searchedcars/>
           <CarServiceCard/>
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
      <div className="recommended__cars">
        <Searchedcartitle title="Recommended Cars For You" />
        <Cardslider
          data={cars}
          iconMap={iconMap}
          PrevArrow={PrevArrow}
          NextArrow={NextArrow}
        />
      </div>
      <div className="latest-blogs">
        {Blogpost.map((post, index) => (
          <BlogHeader
            key={index}
            title={post.title}
            button={post.button}
          />
        ))}
      </div>
      <div className="Blogpost__Container">
        <div className="Blogpost__Cards">
          {carBlogPosts.map((blog, index) => (
            <CarBlogcard
              key={index}
              image={blog.image}
              category={blog.category}
              date={blog.date}
              title={blog.title}
              author={blog.author}
            />
          ))}
        </div>
      </div>
      <carBlogPosts  />
      <div className="latest-blogs">
        {Brand.map((post, index) => (
          <BlogHeader
            key={index}
            title={post.title}
            button={post.button}
          />
        ))}
      </div>
      <div className="brand-section">
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
    </div>
  );
};


export default Home
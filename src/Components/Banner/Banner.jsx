import React from "react";
import Slider from "react-slick";
import { LeftArrow, RightArrow } from "../../Res/icons";
import "./banner.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useData } from "../../Homecontext/Homecontext";
/* Left Arrow */
const PrevArrow = ({ onClick }) => (
  <button
    className="banner__arrow left"
    onClick={onClick}
    type="button"
  >
    <LeftArrow />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="banner__arrow right"
    onClick={onClick}
    type="button"
  >
    <RightArrow />
  </button>
);

const Banner = () => {
  const { selectedBodyStyle } = useData()
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        {selectedBodyStyle && (
          <div className="Banner__slide">
            <img
              src={selectedBodyStyle.image}
            />
            <div className="Banner__text">
              <h1>Find Your Perfect Vehicle Online</h1>
              <p>{selectedBodyStyle.title}</p>
            </div>
          </div>
        )}
        <div className="Banner__slide">
          <img src="/images/Bannerimg/car.jpg" alt="Car Banner" />
          <div className="Banner__text">
            <p>The World’s Largest Used Car Dealership</p>
            <h1>Find Your Perfect Vehicle Online</h1>
          </div>
        </div>

        <div className="Banner__slide">
          <img src="/images/Bannerimg/car3.jpg" alt="Car Banner" />
          <div className="Banner__text">
            <p>The World’s Largest Used Car Dealership</p>
            <h1>Find Your Perfect Vehicle Online</h1>
          </div>
        </div>
      
       <div className="Banner__slide">
          <img src="/images/Bannerimg/h10.jpg" alt="Car Banner" />
          <div className="Banner__text">
            <p>The World’s Largest Used Car Dealership</p>
            <h1>Find Your Perfect Vehicle Online</h1>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;

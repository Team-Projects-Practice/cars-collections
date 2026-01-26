import React, { useState } from 'react'
import "./searchedcars.scss"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cars } from '../../Utility/searchedcars'
import { MilesIcon, HybridIcon, CvtIcon, ArrowIcon, BoockmarkIcon, SliderLeftArrow, SliderRightArrow } from '../../Res/icons'
const iconMap = {
  miles: <MilesIcon />,
  hybrid: <HybridIcon />,
  cvt: <CvtIcon />,
}
const PrevArrow = ({ onClick }) => (
  <button
    className="slider__arrow left"
    onClick={onClick}
    type="button"
  >
    <SliderLeftArrow />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="slider__arrow right"
    onClick={onClick}
    type="button"
  >
    <SliderRightArrow />
  </button>
);


const Searchedcars = () => {

  const [data, setData] = useState(cars)
  const [menu, setMenu] = useState("sedan")
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

  }
  return (
    <div className="card__container">
      <div className="card">
        <h2>The Most Searched Cars</h2>
        <div className="card__menu">
          <ul>
            <li onClick={() => setMenu("sedan")} className={menu === "sedan" ? "active" : ""}>Sedan</li>
            <li onClick={() => setMenu("suv")} className={menu === "suv" ? "active" : ""}>SUV</li>
            <li onClick={() => setMenu("convertible")} className={menu === "convertible" ? "active" : ""}>Convertible</li>
            <li onClick={() => setMenu("hatchback")} className={menu === "hatchback" ? "active" : ""}>Hatchback</li>
          </ul>
        </div>
        <Slider {...settings} className="cards">
          {data.map((item) => (
            <div key={item.id}>
              <div className="car__card">
                <img src={item.image} alt={item.title} />
                {item.tag && (
                  <span className={`tag tag--${item.tag.toLowerCase().replace(' ', '-')}`}>
                    {item.tag}
                  </span>
                )}
                <button><BoockmarkIcon /></button>

                <div className="car__content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="specifications">
                    {item.specs.map((spec) => (
                      <div className="spec" key={spec.id}>
                        {iconMap[spec.icon]}
                        <p>{spec.label}</p>
                      </div>
                    ))}
                  </div>

                  <h6>{item.oldprice && (
              <span>{item.oldprice}</span>
            )}</h6>
                  <div className="price">
                    <h5>{item.price}</h5>
                    <a href="#">
                      View Details <ArrowIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Searchedcars
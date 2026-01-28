import React from 'react'
import "./cardslider.scss"
import Slider from 'react-slick'
import { ArrowIcon,BoockmarkIcon } from '../../../Res/icons'
const Cardslider = ({ data,iconMap,PrevArrow, NextArrow}) => {
   const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 1020, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
    ],
  };
  return (
       <div className="card__slider">
      <Slider {...settings} className="cards">
        {data.map((item) => (
          <div key={item.id}>
            <div className="car__card">
              <img src={item.image} alt={item.title} />

              {item.tag && (
                <span
                  className={`tag tag--${item.tag
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {item.tag}
                </span>
              )}

              <button>
                <BoockmarkIcon />
              </button>

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

                {item.oldprice && (
                  <h6>
                    <span>{item.oldprice}</span>
                  </h6>
                )}

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
  )
}

export default Cardslider























import React, { useState } from 'react'
import "./searchedcars.scss"
import Searchedcartitle from '../Products/Searchedcartitle/Searchedcartitle'
import Tabs from '../Products/Tabs/Tabs'
import Cardslider from '../Products/Cardslider/Cardslider'
import { cars } from '../../Utility/searchedcars'
import { MilesIcon, HybridIcon, CvtIcon, SliderLeftArrow, SliderRightArrow } from '../../Res/icons'
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
const tabs = [
  { label: "Sedan", value: "sedan" },
  { label: "SUV", value: "suv" },
  { label: "Convertible", value: "convertible" },
  { label: "Hatchback", value: "hatchback" },
];
const Searchedcars = () => {
  const [menu, setMenu] = useState("sedan");


  return (
    <div className="searchedcars">
      <Searchedcartitle title="The Most Searched Cars" />
      <Tabs
        data={cars}
        menu={menu}
        setMenu={setMenu}
        tabs={tabs} />
      <Cardslider
        data={cars}
        iconMap={iconMap}
        PrevArrow={PrevArrow}
        NextArrow={NextArrow} />
    </div>
  )
}

export default Searchedcars






























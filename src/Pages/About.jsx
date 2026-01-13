import { useState } from "react";
import carImage1 from "../Images/car.jpg";
import carImage2 from "../Images/car3.jpg";
import carImage3 from "../Images/h10.jpg";

const images = [carImage1,carImage3,carImage2];

const About = () =>{

const [currentIndex,setCurrentIndex] = useState(0);
 
 const leftClick = () =>{
  setCurrentIndex(
    currentIndex === 0 ? Image.length -1 :currentIndex +1
  )
 };
 const rightClick = () =>{
  setCurrentIndex(
    currentIndex === Image.length -1 ? 0  :currentIndex -1
  )
 };


    return(

         <>
        <section className="Breadcum">

    
    <div className="Breadcrumb-content"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
    
  
      <div className="text">
    
      <p className="top-text">The World’s Largest Used Car Dealership</p>
     </div>
     <div className="hading">
      <h1>Find Your Perfect Vehicle Online</h1>
      </div>

      <div className="arrows">
        <button className="arrow" onClick={leftClick}>&#10094;</button>
        <button className="arrow"onClick={rightClick}>&#10095;</button>
      </div>
    </div>
    
    </section>
        </>
    )
}

export default About;
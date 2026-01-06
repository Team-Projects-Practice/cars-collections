import "../App.css";
import carImage from "../Images/car.jpg";

function  About (){
    

   return (
    <section
      className="hero"
    
      style={{ backgroundImage: `url(${carImage})` }}
    >
      <p className="top-text">The World’s Largest Used Car Dealership</p>

      <h1>Find Your Perfect Vehicle Online</h1>

      <div className="arrows">
        <button className="arrow">&#10094;</button>
        <button className="arrow">&#10095;</button>
      </div>
  
    </section>
  );
};
    
export default About
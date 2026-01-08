import carImage from "../Images/car.jpg";
import "../App.css";

const Home = () => {
  return (
    <section className="Breadcum">

    
    <div className="hero"
      style={{ backgroundImage: `url(${carImage})` }}
    >
    
  
      <div className="text">
      <p className="top-text">The World’s Largest Used Car Dealership</p>
     </div>
     <div className="hading">
      <h1>Find Your Perfect Vehicle Online</h1>
      </div>

      <div className="arrows">
        <button className="arrow">&#10094;</button>
        <button className="arrow">&#10095;</button>
      </div>
    </div>
    
    </section>
  );
};

export default Home;

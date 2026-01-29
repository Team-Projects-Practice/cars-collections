import React from 'react'
import "./content.scss"
const Content = ({ title, description, buttonText, icon }) => {
  const handleClick = () => {
    alert("Get Started!");
  };
  return (

    <div className="content">
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button className="btn" onClick={handleClick}>{buttonText}
        <span className='card__arrow-icon'>{icon}</span>
      </button>
    </div>
  )
}

export default Content
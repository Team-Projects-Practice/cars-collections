import React from 'react';
import {ElectriccarIcon ,Electriccar2Icon,CrosarowIcon } from "../../Res/icons";
import "./Card.scss"
const Carcard = () => {
   const cardData = [
    {
        Title: "Are You Looking \n For a Car ?",
         Description: "We are committed to providing our customers with exceptional service.",
         Icon:<ElectriccarIcon  />,
         ButtonText: "Get Started",
         variant:"blue"
    },
     {
        Title: "Do You Want to \n Sell a Car ?",
         Description: "We are committed to providing our customers with exceptional service.",
         Icon:<Electriccar2Icon />,
         ButtonText: "Get Started",
         variant:"black"
    },
   ]
   const Button = () => {
    alert("Get Started!");
   }
    return (
        <div className='card__section'>
        <div className='card__container'>
            <div className='cards'>
                {cardData.map((card,index)=>(
                <div className='card'
                    style={{
                       backgroundColor: index === 0 ? "#E9F2FF" : "#FFE9F3"
                      }}
                key={index}>
                       

                    <span className='card__icon'>{card.Icon}</span>
                    <h3 className='card__title'>{card.Title}</h3>
                    <p className='card__description'>{card.Description}</p>
                    <button className={`button button--${card.variant}`} onClick={Button}>{card.ButtonText}
                        <span className='card__arrow-icon'><CrosarowIcon /></span>
                    </button>
                    
                </div>
                ))}
            </div>

        </div>
           
        </div>
    );
}

export default Carcard;

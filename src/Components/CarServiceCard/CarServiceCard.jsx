import React from 'react';
import { CrosarowIcon } from "../../Res/icons";
import "./CarServiceCard.scss";

const CarServiceCard = ({
    backGroundColor, icon, title, description, variant, buttonText
}) => {
    const Button = () => {
        alert("Get Started!");
    }
    return (
        <div className='cards'>
            <div className='card'
                style={{ backgroundColor: backGroundColor }}>
                <span className='card__icon'>{icon}</span>
                <h3 className='card__title'>{title}</h3>
                <p className='card__description'>{description}</p>
                <button className={`button button--${variant}`} onClick={Button}>{buttonText}
                    <span className='card__arrow-icon'><CrosarowIcon /></span>
                </button>

            </div>
        </div>
    );
}

export default CarServiceCard;

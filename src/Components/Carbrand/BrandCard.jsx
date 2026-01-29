import React from "react";
import "./brandCard.scss";

const BrandCard = ({ image, title }) => {
  return (
    <div className="brand-card">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default BrandCard;

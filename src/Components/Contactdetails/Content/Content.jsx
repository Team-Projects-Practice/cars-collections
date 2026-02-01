import React from "react";
import "./content.scss"
const Content = ({ data }) => {
  const { title, address, btntext,icon, actions } = data;

  return (
    <div className="contact__container">
      <h2>{title}</h2>
      <p>{address}</p>
      <div className="contact__actions">
        {actions.map((item, index) => (
          <div className="contact__item" key={index}>
            <span className="contact__icon">{item.icon}</span>
            <span className="contact__text">{item.label}</span>
          </div>
        ))}
      </div>
      <button className="btn">{btntext}<span>{icon}</span></button>
    </div>
  );
};

export default Content;



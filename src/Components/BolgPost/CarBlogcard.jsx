import React from "react";
import "./CarBlogcard.scss"
const CarBlogcard = ({ image, category, date, title, author }) => {
  return (
    <div className="Blogpost__card">
      <div className="Blogpost__images">
        <img src={image} className="Blogpost__image" alt="image-blog"/>
        <span className="Blogpost__category">{category}</span>

      </div>
       <div>
    <span className="Blogpost__date">
      <span className="author">{author}</span>
      <span className="date">{date}</span>
   </span>

      <h3 className="Blogpost__title">{title}</h3>
      </div>
    </div>
  );
};

export default CarBlogcard;

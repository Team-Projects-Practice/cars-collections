import React, { useState } from "react";
import { SliderLeftArrow, SliderRightArrow, TickMarkIcon } from "../../Res/icons";
import { reviewsData, summary } from "../../Utility/ReviewCare/care";
import "./testimonials.scss";

const Testimonials = ({
  summaryData = summary,
  reviews = reviewsData,
}) => {
  const [selected, setSelected] = useState(0);

  const next = () =>
    setSelected((prev) => (prev + 1) % reviews.length);

  const prev = () =>
    setSelected((prev) => (prev - 1 + reviews.length) % reviews.length);

  // LEFT DATA
  const { title, ratingText, totalReviews, image4, image5 } = summaryData;

  // CURRENT REVIEW
  const {
    name,
    role,
    text,
    image1,
    image2,
    image3,
    verified = "Verified",
  } = reviews[selected];

  return (
    <div className="testimonial__content">
      <div className="testimonial__wrapper">

        {/* LEFT SIDE */}
        <div className="testimonial__left">
          <h2>{title}</h2>
          <p className="rating-title">{ratingText}</p>
          <img src={image4} alt="" className="review-image" />
          <p className="reviews">{totalReviews}</p>
          <img src={image5} alt="" className="review-logo" />
        </div>

        {/* RIGHT SIDE */}
        <div className="testimonial__right">

          <div className="arrows">
            <button onClick={prev}><SliderLeftArrow /></button>
            <button onClick={next}><SliderRightArrow /></button>
          </div>

          <div className="review-card">

            <div className="review-varified">
              <img src={image4} alt="" className="review-detail" />

              <div className="verified">
                <span className="tickmark">
                  <TickMarkIcon />
                </span>
                <span>{verified}</span>
              </div>
            </div>

            <h4>{name}</h4>
            <span className="role">{role}</span>
            <p className="text">{text}</p>
          </div>

          <div className="review-card-images">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Testimonials;

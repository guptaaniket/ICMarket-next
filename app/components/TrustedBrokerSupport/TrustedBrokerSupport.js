"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowDropleft, IoIosArrowDropright, IoIosCheckmarkCircle, IoIosStar } from "react-icons/io";
import "./TrustedBrokerSupport.css";
import { reviews } from '../../utils/Constants'


const ArrowLeft = ({ onClick }) => (
  <div onClick={onClick} className="arrow arrow-left">
    <IoIosArrowDropleft size={24} />
  </div>
);

const ArrowRight = ({ onClick }) => (
  <div onClick={onClick} className="arrow arrow-right">
    <IoIosArrowDropright size={24} />
  </div>
);
const Stars = ({ rating }) => {
  const icons = [];
  for (let i = 0; i < rating; i++) {
    icons.push(<IoIosStar key={i} size={18} className="review-stars" />);
  }
return <div className="d-flex">{icons}</div>;
};
const ReviewSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };


  return (
    <Slider {...settings}>
      {reviews.map((rev, idx) => (
        <div key={idx} className="review-card">
           <div className="d-flex align-items-center mb-2">
            <Stars rating={5} />
            <div className="d-flex align-items-center gap-1">
              <IoIosCheckmarkCircle size={18} />
              <span className="review-verified">Verified</span>
            </div>
          </div>
          <h4 className="mt-2">{rev.title}</h4>
          <p className="review-description">{rev.description}</p>
          <p className="review-author text-muted">{rev.author}, {rev.time}</p>
        </div>
      ))}
    </Slider>
  );
};

const TrustedBrokerSection = () => (
  <div className="trusted-broker-section">
    <div className="trusted-broker-content">
      <div className="trustpilot-info">
        <h4>Excellent</h4>
        <Stars rating={5} />
        <p>Based on <u>30,790 reviews</u></p>
        <div className="d-flex justify-content-center align-items-center gap-1">
          <IoIosStar className="review-stars" size={18} /><b>Trustpilot</b></div>
      </div>
      <div className="review-slider-container">
        <ReviewSlider />
      </div>
    </div>
  </div>
);




export default TrustedBrokerSection;

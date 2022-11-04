// import { Link } from "gatsby"
import React from "react";
import review1 from "../img/reviews/1.png";
import review2 from "../img/reviews/2.png";
import review3 from "../img/reviews/3.png";
import review4 from "../img/reviews/4.png";
import review5 from "../img/reviews/5.png";
import review6 from "../img/reviews/6.png";
import review7 from "../img/reviews/7.png";
import review8 from "../img/reviews/8.png";

const TestimoniosLandings = () => {
  return (
    <div className="row">
      <div className="col-6 col-lg-3">
        <img src={review1} />
      </div>
      <div className="col-6 col-lg-3">
        <img src={review2} />
      </div>
      <div className="col-6 col-lg-3">
        <img src={review3} />
      </div>
      <div className="col-6 col-lg-3">
        <img src={review4} />
      </div>
      <div className="col-6 col-lg-3">
        <img src={review5} />
      </div>
      <div className="col-6 col-lg-3">
        <img src={review6} />
      </div>
      <div className="col-6 col-lg-3">
        <img src={review7} />
      </div>
      <div className="col-6 col-lg-3">
        <img src={review8} />
      </div>
    </div>
  );
};

export default TestimoniosLandings;

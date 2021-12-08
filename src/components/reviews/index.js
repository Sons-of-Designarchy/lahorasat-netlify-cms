import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Reviews = () => {
  return (
    <div className="container" showThumbs={false} showStatus={false}>
      <Carousel>
        <div className="row">
          <div className="col-lg-4">
            review card here
          </>
        </div>
        <div>by bitches</div>
      </Carousel>
    </div>
  );
};

export default Reviews;

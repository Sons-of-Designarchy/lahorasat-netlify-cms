// import { Link } from "gatsby"
import React from "react";

const BulletsAsesoria = ({ bullets, title }) => {
  return (
    <>
      <div className="section section-purple text-center">
        <div className="container">
          <h2 className="mb-5">{title}</h2>
          <div className="boxed-bullet-container row mb-5 justify-content-center">
            {bullets.map((bullet) => (
              <div className="col-lg-6">
                <div className="boxed-bullet mb-3 text-secondary">{bullet}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BulletsAsesoria;
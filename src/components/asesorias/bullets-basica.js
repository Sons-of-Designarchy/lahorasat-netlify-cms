// import { Link } from "gatsby"
import React from "react";

const BulletsBasica = ({ bullets }) => {
  return (
    <>
      <div className="section section-purple text-center">
        <div className="container">
          <h2 className="mb-5">Te ayudamos paso a paso a ...</h2>
          <div className="boxed-bullet-container row mb-5">
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

export default BulletsBasica;
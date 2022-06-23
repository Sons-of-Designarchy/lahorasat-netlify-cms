// import { Link } from "gatsby"
import React from "react";

const BulletsCursoNew = ({ bullets }) => {
  return (
    <>
      <div className="section section-green text-center">
        <div className="container">
          <h2 className="mb-5">Resuelve estas y muchas más dudas... </h2>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="boxed-bullet-container row justify-content-center">
                {bullets.map((bullet) => (
                  <div className="col">
                    <div className="boxed-bullet light mb-3">{bullet}</div>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-center">
                <div className="boxed-bullet mb-3">* En 8 lecciones rápidas y sencillas de entender </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BulletsCursoNew;
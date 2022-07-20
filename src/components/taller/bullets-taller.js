// import { Link } from "gatsby"
import React from "react";

const BulletsTaller = ({ bullets }) => {
  return (
    <>
      <div className="section section-green text-center">
        <div className="container">
          <p className="text-uppercase font-sm">¿qué aprenderé aquí?</p>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-5">Cómo navegar en el portal y generar facturas en la nueva versión 4.0.</h2>
            </div>
          </div>
          <div className="boxed-bullet-container row mb-5 justify-content-center">
            {bullets.map((bullet) => (
              <div className="col-lg-6">
                <div className="boxed-bullet mb-3">{bullet}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BulletsTaller;
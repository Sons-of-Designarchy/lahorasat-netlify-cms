// import { Link } from "gatsby"
import React from "react";

const BulletsTaller = ({ bullets }) => {
  return (
    <>
      <div className="section section-green text-center">
        <div className="container">
          <p className="uppercase font-xs">¿qué aprenderé aquí?</p>
          <h2 className="mb-5">Hacks del sat para Freelancers y RIF's</h2>
          <div className="boxed-bullet-container row mb-5 justify-content-center">
            {bullets.map((bullet) => (
              <div className="col-lg-6">
                <div className="boxed-bullet mb-3">{bullet}</div>
              </div>
            ))}
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-3">
              <a
                className="btn btn-secondary mb-3 me-3 btn-lg"
                style={{ width: "100%" }}
                href="#horarios"
              >
                Ver fechas disponibles
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <a
                className="btn btn-outline-secondary mb-3 btn-lg"
                style={{ width: "100%" }}
                target="_blank"
                href="https://wa.me/+525510722129"
              >
                Agendar por Whatsapp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BulletsTaller;
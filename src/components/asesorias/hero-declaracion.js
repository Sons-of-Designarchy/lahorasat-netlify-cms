// import { Link } from "gatsby"
import React from "react";
import Adorno from "../../img/acento-morado.svg";
import practica from "../../img/cursos/asesoria-practica-2.jpg";

const HeroDeclaracion = () => {
  return (
    <div className="section section-green">
      <div className="container">
        <div className="row no-gutters align-items-center">
          <div className="col-lg-5 p-lg-r">
            <img src={Adorno} className="mb-3 d-block" />
            <h2 className="mb-3">¿Aún no haces tu declaración anual?</h2>
            <p>
              Nosotras te explicamos cómo hacerla y te enseñamos a presentarla paso a paso desde la comodidad de tu hogar. 
            </p>
            <div className="d-flex flex-column flex-md-row">
              <a
                className="btn btn-light btn-primary-outlined btn-lg mb-3 me-3"
                style={{ width: "100%" }}
                href="https://lahorasat.podia.com/asesoria-declaracion"
                data-podia-embed="link"
              >
                Agendar asesoría
              </a>
            </div>
          </div>
          <div className="col-lg-7 d-none d-lg-block">
            <div style={{ marginLeft: "2rem" }}>
              <img src={practica} className="img-fluid image-stroke-purple" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDeclaracion;

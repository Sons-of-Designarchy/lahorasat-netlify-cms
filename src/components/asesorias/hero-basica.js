// import { Link } from "gatsby"
import React from "react";
import Adorno from "../../img/acento-morado.svg";
import basica from "../../img/cursos/asesoria.jpg";

const HeroBasica = () => {
  return (
    <div className="section section-green">
      <div className="container">
        <div className="row no-gutters align-items-center">
          <div className="col-lg-5 p-lg-r">
            <img src={Adorno} className="mb-3 d-block" />
            <h2 className="mb-3">
              ¿Tu cliente te pidió factura y no sabes como empezar?
            </h2>
            <p>
              No te preocupes, nosotros te ayudamos pasito a pasito a entender
              todo el mundo del SAT en una asesoría 1-1 en videollamada con uno
              de nuestros expertos.
            </p>
            <div className="d-flex flex-column flex-md-row">
              <a
                className="btn btn-light btn-primary-outlined btn-lg mb-3 me-3"
                style={{ width: "100%" }}
                href="https://lahorasat.podia.com/asesoria-basica"
                data-podia-embed="link"
              >
                Agendar asesoria
              </a>
            </div>
          </div>
          <div className="col-lg-7 d-none d-lg-block">
            <div style={{ marginLeft: "2rem" }}>
              <img src={basica} className="img-fluid image-stroke-purple" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBasica;

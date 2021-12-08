// import { Link } from "gatsby"
import React from "react";
import Adorno from "../../img/acento-verde.svg";

const HeaderCursoNew = () => {
  return (
    <div className="section section-purple">
      <div className="container">
        <div className="row no-gutters align-items-center">
          <div className="col-lg-5 p-lg-r">
            <img src={Adorno} className="mb-3 d-block" />
            <h2 className="mb-3 text-light">
              ¿No sabes cómo empezar con el SAT?{" "}
              <span className="text-primary">Este curso es para ti</span>
            </h2>
            <p className="text-light">
              Aquí aprenderás lo más básico que necesitas saber para darte de
              alta ante el SAT y aprender a pagar tus impuestos.
            </p>
            <div className="d-flex flex-column flex-md-row">
              <a
                className="btn btn-primary btn-lg mb-3 me-3"
                style={{ width: "100%" }}
                href="https://lahorasat.podia.com/curso-en-video"
                data-podia-embed="link"
              >
                Comprar
              </a>
            </div>
          </div>
          <div className="col-lg-7 d-none d-lg-block">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/BxjK_NGBq0o"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="curso-video-iframe"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCursoNew;

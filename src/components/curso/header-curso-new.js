// import { Link } from "gatsby"
import React from "react";
import Adorno from "../../img/acento-verde.svg";

const HeaderCursoNew = ({url}) => {
  return (
    <div className="section section-purple">

      <div className="container">
        <div className="d-lg-none mb-4">
          <iframe
            width="100%"
            height="300px"
            src="https://www.youtube.com/embed/BxjK_NGBq0o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="row no-gutters align-items-center">
          <div className="col-lg-5 p-lg-r">
            <img src={Adorno} className="mb-3 d-none d-lg-block" />
            <h5 className="label label-primary">Curso</h5>
            <h2 className="mb-3 text-light">
              Cómo darte de alta en el SAT y pagar tus impuestos, tú mismo.{" "}
            </h2>
            <h5 className="text-primary">Un curso para NO contadores</h5>
            <p className="text-light">
              Todo lo esencial que necesitas saber para sobrevivir al SAT.
            </p>

            <div className="d-flex align-items-center mb-4">
              <h4 style={{ marginRight: "6px" }}>
                <s>de $800</s>
              </h4>
              <h2 className="text-primary"> a sólo $349</h2>
            </div>
            <div className="d-flex flex-column flex-md-row">
              <a
                className="btn btn-primary btn-lg mb-3 me-3"
                style={{ width: "100%" }}
                href={url}
                data-podia-embed="link"
              >
                Comprar curso
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

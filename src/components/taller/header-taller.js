// import { Link } from "gatsby"
import React from "react";
import coverPhoto from "../../img/taller/taller-cover.png";

const HeaderTaller = () => {
  return (
    <div className="section section-purple">
      <div className="container">
        <div className="row no-gutters align-items-center">
          <div className="col-lg-6 p-lg-r">
            <p className="font-sm text-uppercase text-primary">
              Curso en video: Aprende a facturar en el portal del SAT Versión 4.0 (grabación de zoom)
            </p>
            <h4>
              ¿Tus clientes te piden factura y no tienes ni idea de cómo
              sacarla?{" "}
              <span className="text-primary">
                Entonces este taller es para ti 😉
              </span>
            </h4>
            <img
              src={coverPhoto}
              className="img-fluid mb-4 d-lg-none"
              style={{ borderRadius: 24, width: "100%" }}
            />
            <p className="text-light font-sm">
              Aquí aprenderás de forma práctica cómo facturar en el portal del SAT en la versión 4.0, navegar a través del portal
              del SAT.
            </p>
            <div className="mt-2 mb-4"></div>
            <div className="d-flex flex-column flex-md-row">
              <a
                className="btn btn-primary mb-3 me-3"
                style={{ width: "100%" }}
                href="https://lahorasat.podia.com/curso-en-video-aprende-a-facturar-en-el-portal-del-sat-version-4-0"
                data-podia-embed="link"
              >
                Comprar curso
              </a>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <img
              src={coverPhoto}
              className="img-fluid mb-4"
              style={{ borderRadius: 24, width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTaller;

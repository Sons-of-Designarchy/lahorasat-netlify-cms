// import { Link } from "gatsby"
import React from "react";
import curso from "../img/cursos/curso-thumbnail-video.jpg";
import taller from "../img/cursos/curso-thumbnail-taller.jpg";

const Cursos = () => {
  return (
    <>
      <div className="section section-purple">
        <div className="container">
          <h1 className="text-center text-primary">
            Aprende lo básico sobre el SAT.
          </h1>
          <p className="text-light text-center mb-5">
            Elige el formato que más se adapte a tus necesidades
          </p>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="row no-gutters">
                <div className="col-lg-6 mb-3">
                  <a className="course-card rounded" href="/curso-basico-lhs">
                    <img src={curso} className="img-fluid" />
                    <div className="course-content">
                      <div className="d-flex mb-2">
                        <div className="label label-primary me-2">
                          CURSO EN VIDEO
                        </div>
                        <div className="label label-primary">$349 MXN</div>
                      </div>
                      <h4 className="mb-1 text-secondary">
                        Curso Básico en Video
                      </h4>
                      <p className="font-sm text-secondary-l">
                        Aprende cómo incorporarte ante el SAT, primeros pasos
                        para la vida fiscal y super tips para llevar tu
                        contabilidad.
                      </p>
                    </div>
                    <div className="p-3">
                      <a className="btn btn-secondary btn-block">
                        Ver detalles →
                      </a>
                    </div>
                  </a>
                </div>

                <div className="col-lg-6 mb-3">
                  <a
                    className="course-card rounded course-card-green"
                    href="/curso-facturacion-lhs"
                  >
                    <img src={taller} className="img-fluid" />
                    <div className="course-content">
                      <div className="d-flex mb-2">
                        <div className="label me-2">CURSO EN VIDEO</div>
                        <div className="label me-2">$549 MXN</div>
                      </div>
                      <h4 className="mb-1 text-secondary">
                        Aprende a facturar en la versión 4.0
                      </h4>
                      <p className="font-sm text-secondary-l mb-0">
                        Te enseñamos cómo navegar y emitir facturas desde la nueva versión 4.0 del portal del SAT
                      </p>
                    </div>
                    <div className="p-3">
                      <a className="btn btn-secondary btn-block">
                        Ver detalles →
                      </a>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cursos;
